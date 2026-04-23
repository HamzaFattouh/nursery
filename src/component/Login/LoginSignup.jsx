import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import './loginSignupPage.Module.css';
import { LuBaby } from "react-icons/lu";

export default function LoginSignupPage() {

    const [checked, setChecked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // تحديد حجم الشاشة
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // أول تشغيل
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="lscontainer">

            {/* السويتش يظهر في كل الحالات */}
            <div className="slidecheck">
                <p>تسجيل الدخول</p>
                <input
                    className="checkbox1"
                    type="checkbox"
                    id="reg-log"
                    onChange={handleCheckboxChange}
                    checked={checked}
                />
                <label htmlFor="reg-log"></label>
                <p>التسجيل</p>
            </div>

            <div className="maincontainer">

                {/* 📱 موبايل: عرض واحد فقط */}
                {isMobile ? (
                    checked ? <Signup /> : <Login />
                ) : (
                    /* 🖥️ ديسكتوب: السلايد كامل */
                    <>
                        <Login />
                        <Signup />

                        <div className={`overlay ${checked ? 'overlay-active' : ''}`}>
                            <LuBaby className='babyface' />
                            <h2> حضانة الأطفال</h2>
                            <p>مكان أمن لأطفالك</p>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}