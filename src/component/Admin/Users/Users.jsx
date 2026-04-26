import { useState, useEffect } from 'react';
import { authAPI, usersAPI } from '../../services/api';
import { toast } from 'react-toastify';
import styles from './Users.module.css';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: 'teacher'
  });
  const [tempPassword, setTempPassword] = useState(null);

  // جلب المستخدمين عند تحميل الصفحة
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await usersAPI.getAll();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('فشل في جلب المستخدمين');
    } finally {
      setLoading(false);
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin': return 'إدارة';
      case 'teacher': return 'معلم';
      case 'parent': return 'ولي أمر';
      default: return role;
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.createUser(newUser);
      
      // عرض كلمة المرور المؤقتة
      if (response.data.temporaryPassword) {
        setTempPassword(response.data.temporaryPassword);
        toast.success(`تم إنشاء المستخدم. كلمة المرور المؤقتة: ${response.data.temporaryPassword}`);
      }
      
      // إعادة تعيين النموذج
      setNewUser({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        role: 'teacher'
      });
      
      // إغلاق النموذج بعد إضافة المستخدم
      setShowAddForm(false);
      
      // تحديث قائمة المستخدمين
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error(error.response?.data?.error || 'فشل في إنشاء المستخدم');
    }
  };

  const handleApprove = async (id) => {
    try {
      await usersAPI.update(id, { is_active: true });
      toast.success('تم تفعيل المستخدم');
      fetchUsers();
    } catch (error) {
      toast.error('فشل في تفعيل المستخدم');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
      try {
        await usersAPI.delete(id);
        toast.success('تم حذف المستخدم');
        fetchUsers();
      } catch (error) {
        toast.error('فشل في حذف المستخدم');
      }
    }
  };

  return (
    <div className={styles.usersPage}>
      <div className={styles.pageHeader}>
        <h1>إدارة المستخدمين</h1>
        <button onClick={() => setShowAddForm(!showAddForm)} className={styles.addBtn}>
          {showAddForm ? 'إلغاء' : '+ إضافة مستخدم'}
        </button>
      </div>

      {/* عرض كلمة المرور المؤقتة */}
      {tempPassword && (
        <div className={styles.passwordAlert}>
          <p>كلمة المرور المؤقتة للمستخدم الجديد:</p>
          <strong>{tempPassword}</strong>
          <button onClick={() => setTempPassword(null)}>إغلاق</button>
        </div>
      )}

      {loading ? (
        <div className={styles.loading}>جاري التحميل...</div>
      ) : (
        <>
          {showAddForm && (
            <div className={styles.addForm}>
              <h3>إضافة مستخدم جديد</h3>
              <form onSubmit={handleAddUser}>
                <div className={styles.formRow}>
                  <input 
                    type="text" 
                    placeholder="الاسم الأول" 
                    value={newUser.firstName} 
                    onChange={(e) => setNewUser({...newUser, firstName: e.target.value})} 
                    required 
                  />
                  <input 
                    type="text" 
                    placeholder="اسم العائلة" 
                    value={newUser.lastName} 
                    onChange={(e) => setNewUser({...newUser, lastName: e.target.value})} 
                    required 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="اسم المستخدم" 
                  value={newUser.username} 
                  onChange={(e) => setNewUser({...newUser, username: e.target.value})} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  value={newUser.email} 
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="رقم الهاتف" 
                  value={newUser.phone} 
                  onChange={(e) => setNewUser({...newUser, phone: e.target.value})} 
                />
                <select 
                  value={newUser.role} 
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option value="teacher">معلم</option>
                  <option value="parent">ولي أمر</option>
                  <option value="admin">إدارة</option>
                </select>
                <button type="submit" className={styles.submitBtn}>إضافة</button>
              </form>
            </div>
          )}

          <div className={styles.usersTable}>
            <table>
              <thead>
                <tr>
                  <th>الاسم</th>
                  <th>اسم المستخدم</th>
                  <th>البريد الإلكتروني</th>
                  <th>الدور</th>
                  <th>الحالة</th>
                  <th>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`${styles.roleBadge} ${styles[user.role]}`}>
                        {getRoleLabel(user.role)}
                      </span>
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${user.is_active ? styles.active : styles.pending}`}>
                        {user.is_active ? 'نشط' : 'معلق'}
                      </span>
                    </td>
                    <td>
                      {!user.is_active && (
                        <button onClick={() => handleApprove(user.id)} className={styles.approveBtn}>تفعيل</button>
                      )}
                      <button onClick={() => handleDelete(user.id)} className={`${styles.actionBtn} ${styles.delete}`}>حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}