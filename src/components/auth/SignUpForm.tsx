"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from "sonner";
import { Label } from "../ui/label";
import { createAccount } from "@/lib";
import { UserFormData, userSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../ui/password-input";

const SignUpForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
    });

    const mutation = useMutation({
        mutationFn: createAccount,
        onSuccess: (data) => {
            toast.success('Account created successfully!');
            router.push("/auth/sign-in");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = (data: UserFormData) => {
        mutation.mutate(data);
    };

    return (
        <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
            <h2 className="text-2xl font-semibold">
                Create an account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-2 w-full">
                    <Label htmlFor="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        type="name"
                        {...register('name')}
                        // disabled={isUpdating}
                        placeholder="Enter your name"
                        className="w-full focus-visible:border-foreground"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name.message}</p>
                    )}
                </div>
                <div className="mt-4 space-y-2 w-full">
                    <Label htmlFor="phone">
                        Phone
                    </Label>
                    <Input
                        id="phone"
                        type="text"
                        {...register('phone')}
                        // disabled={isUpdating}
                        placeholder="Enter your Phone number"
                        className="w-full focus-visible:border-foreground"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs">{errors.phone.message}</p>
                    )}
                </div>
                <div className="mt-4 space-y-2 w-full">
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        // disabled={isUpdating}
                        placeholder="Enter your email"
                        className="w-full focus-visible:border-foreground"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                    )}
                </div>
                <div className="mt-4 space-y-2">
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <div className="w-full">
                        <PasswordInput
                            id="password"
                            {...register('password')}
                            // disabled={isUpdating}
                            placeholder="Enter your password"
                            className="w-full focus-visible:border-foreground"
                            autoComplete="new-password"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>
                </div>
                <div className="mt-4 space-y-2">
                    <Label htmlFor="confirmPassword">
                        Confirm Password
                    </Label>
                    <div className="relative w-full">
                        <PasswordInput
                            id="confirmPassword"
                            {...register('confirmPassword')}
                            // disabled={isUpdating}
                            placeholder="Confirm Your Password"
                            className="w-full focus-visible:border-foreground"
                            autoComplete="new-password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                        )}
                    </div>
                </div>
                <div className="mt-4 w-full">
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
