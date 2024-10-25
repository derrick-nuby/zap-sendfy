"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/types";
import { loginUser } from "@/lib";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/context/UserContext";
import { PasswordInput } from "../ui/password-input";

const SignInForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const { setUser, setToken } = useUser();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            const { user, token } = data;
            setUser(user);
            setToken(token);
            toast.success("Signed in successfully!");
            router.push("/dashboard");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = (data: LoginFormData) => {
        mutation.mutate(data);
    };

    return (
        <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
            <h2 className="text-2xl font-semibold">Sign in to ZapSendify</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-2 w-full">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        disabled={isSubmitting}
                        placeholder="Enter your email"
                        className="w-full focus-visible:border-foreground"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                    )}
                </div>
                <div className="mt-4 space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative w-full">
                        <PasswordInput
                            id="password"
                            {...register('password')}
                            disabled={isSubmitting}
                            placeholder="Enter your password"
                            className="w-full focus-visible:border-foreground"
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-xs">{errors.password.message}</p>
                    )}
                </div>
                <div className="mt-4 w-full">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? (
                            <LoaderIcon className="w-5 h-5 animate-spin" />
                        ) : (
                            "Sign in with email"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;