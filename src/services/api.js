// =====================================================
// API Configuration - إعدادات API
// =====================================================

import axios from "axios";

// Base URL للخادم
const API_BASE_URL = "http://localhost:3000/api";

// إنشاء axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// إضافة token للمطلبات المحمية
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// معالجة الأخطاء
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("userToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// =====================================================
// Auth API - واجهة المصادقة
// =====================================================

export const authAPI = {
  // تسجيل مستخدم جديد
  register: (data) => api.post("/auth/register", data),

  // تسجيل دخول (اسم مستخدم أو بريد إلكتروني)
  login: (data) => api.post("/auth/login", data),

  // إنشاء مستخدم جديد من قبل المدير
  createUser: (data) => api.post("/auth/create-user", data),

  // الحصول على المستخدم الحالي
  getCurrentUser: () => api.get("/auth/me"),

  // تغيير كلمة المرور
  changePassword: (data) => api.post("/auth/change-password", data),
};

// =====================================================
// Users API - واجهة المستخدمين
// =====================================================

export const usersAPI = {
  // الحصول على جميع المستخدمين
  getAll: () => api.get("/users"),

  // الحصول على مستخدم معين
  getById: (id) => api.get(`/users/${id}`),

  // إنشاء مستخدم جديد
  create: (data) => api.post("/users", data),

  // تحديث مستخدم
  update: (id, data) => api.put(`/users/${id}`, data),

  // حذف مستخدم
  delete: (id) => api.delete(`/users/${id}`),

  // تبديل حالة النشاط
  toggleActive: (id) => api.patch(`/users/${id}/toggle-active`),
};

// =====================================================
// Children API - واجهة الأطفال
// =====================================================

export const childrenAPI = {
  // الحصول على جميع الأطفال
  getAll: () => api.get("/children"),

  // الحصول على طفل معين
  getById: (id) => api.get(`/children/${id}`),

  // إنشاء طفل جديد
  create: (data) => api.post("/children", data),

  // تحديث طفل
  update: (id, data) => api.put(`/children/${id}`, data),

  // حذف طفل
  delete: (id) => api.delete(`/children/${id}`),
};

// =====================================================
// Classes API - واجهة الفصول
// =====================================================

export const classesAPI = {
  // الحصول على جميع الفصول
  getAll: () => api.get("/classes"),

  // الحصول على فصل معين
  getById: (id) => api.get(`/classes/${id}`),

  // إنشاء فصل جديد
  create: (data) => api.post("/classes", data),

  // تحديث فصل
  update: (id, data) => api.put(`/classes/${id}`, data),

  // حذف فصل
  delete: (id) => api.delete(`/classes/${id}`),

  // تسجيل طفل في فصل
  enrollChild: (classId, data) => api.post(`/classes/${classId}/enroll`, data),

  // إزالة طفل من فصل
  removeChild: (classId, childId) => api.delete(`/classes/${classId}/enroll/${childId}`),
};

// =====================================================
// Attendance API - واجهة الحضور
// =====================================================

export const attendanceAPI = {
  // الحصول على سجلات الحضور
  getAll: (params) => api.get("/attendance", { params }),

  // تسجيل حضور
  mark: (data) => api.post("/attendance", data),

  // تسجيل حضور جماعي
  markBulk: (data) => api.post("/attendance/bulk", data),

  // الحصول على إحصائيات الحضور
  getStats: (params) => api.get("/attendance/stats", { params }),
};

// =====================================================
// Cameras API - واجهة الكاميرات
// =====================================================

export const camerasAPI = {
  // الحصول على جميع الكاميرات
  getAll: () => api.get("/cameras"),

  // الحصول على كاميرا معينة
  getById: (id) => api.get(`/cameras/${id}`),

  // إنشاء كاميرا جديدة
  create: (data) => api.post("/cameras", data),

  // تحديث كاميرا
  update: (id, data) => api.put(`/cameras/${id}`, data),

  // حذف كاميرا
  delete: (id) => api.delete(`/cameras/${id}`),

  // منح صلاحية كاميرا
  grantPermission: (cameraId, data) => api.post(`/cameras/${cameraId}/permission`, data),

  // إلغاء صلاحية كاميرا
  revokePermission: (cameraId, userId) => api.delete(`/cameras/${cameraId}/permission/${userId}`),
};

// =====================================================
// Inquiries API - واجهة الاستفسارات
// =====================================================

export const inquiriesAPI = {
  // الحصول على جميع الاستفسارات
  getAll: () => api.get("/inquiries"),

  // الحصول على استفسار معين
  getById: (id) => api.get(`/inquiries/${id}`),

  // إنشاء استفسار جديد
  create: (data) => api.post("/inquiries", data),

  // الرد على استفسار
  respond: (id, data) => api.post(`/inquiries/${id}/respond`, data),

  // إغلاق استفسار
  close: (id) => api.patch(`/inquiries/${id}/close`),

  // حذف استفسار
  delete: (id) => api.delete(`/inquiries/${id}`),
};

// =====================================================
// Activities API - واجهة الأنشطة
// =====================================================

export const activitiesAPI = {
  // الحصول على جميع الأنشطة
  getAll: (params) => api.get("/activities", { params }),

  // الحصول على نشاط معين
  getById: (id) => api.get(`/activities/${id}`),

  // إنشاء نشاط جديد
  create: (data) => api.post("/activities", data),

  // تحديث نشاط
  update: (id, data) => api.put(`/activities/${id}`, data),

  // حذف نشاط
  delete: (id) => api.delete(`/activities/${id}`),
};

// =====================================================
// Announcements API - واجهة الإعلانات
// =====================================================

export const announcementsAPI = {
  // الحصول على جميع الإعلانات
  getAll: () => api.get("/announcements"),

  // الحصول على إعلان معين
  getById: (id) => api.get(`/announcements/${id}`),

  // إنشاء إعلان جديد
  create: (data) => api.post("/announcements", data),

  // تحديث إعلان
  update: (id, data) => api.put(`/announcements/${id}`, data),

  // حذف إعلان
  delete: (id) => api.delete(`/announcements/${id}`),
};

// =====================================================
// Fees API - واجهة الرسوم
// =====================================================

export const feesAPI = {
  // الحصول على جميع الرسوم
  getAll: () => api.get("/fees"),

  // الحصول على رسم معين
  getById: (id) => api.get(`/fees/${id}`),

  // إنشاء رسم جديد
  create: (data) => api.post("/fees", data),

  // دفع رسم
  pay: (id) => api.post(`/fees/${id}/pay`),

  // تحديث رسم
  update: (id, data) => api.put(`/fees/${id}`, data),

  // حذف رسم
  delete: (id) => api.delete(`/fees/${id}`),
};

export default api;