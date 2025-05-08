
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { SectionHeading } from "@/components/layout/section-heading";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // الأرقام الثابتة للتحقق
  const VALID_PHONE = "01551866326";
  const VALID_PASSWORD = "adham&nada2052006";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phone === VALID_PHONE && password === VALID_PASSWORD) {
      // تخزين حالة تسجيل الدخول في localStorage
      localStorage.setItem("isLoggedIn", "true");
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك في لوحة التحكم",
      });
      navigate("/admin");
    } else {
      toast({
        title: "فشل تسجيل الدخول",
        description: "رقم الهاتف أو كلمة المرور غير صحيحة",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <SectionHeading
          title="تسجيل الدخول"
          subtitle="الرجاء إدخال بيانات تسجيل الدخول للوصول إلى لوحة التحكم"
          align="right"
        />
        
        <div className="flex justify-center mt-8">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">تسجيل الدخول</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="أدخل رقم الهاتف"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    كلمة المرور
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة المرور"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  دخول
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
