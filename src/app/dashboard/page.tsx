"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React from 'react';
import { toast } from "sonner";

const DashboardPage = () => {
    const { user, logout } = useUser();
    const router = useRouter();

    const handleSignOut = () => {
        try {
            logout();
            toast.success("Signed out successfully");
            router.push("/auth/sign-in");
        } catch (error) {
            toast.error("Failed to sign out. Please try again.");
        }
    };

    const handleBackToHome = () => {
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl font-medium">
                Welcome {user?.name || "User"}
            </h1>

            <p className="text-gray-500 mt-2">
                You are signed in as {user?.email}
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">
                <Button
                    variant="outline"
                    onClick={handleBackToHome}
                >
                    Back to home
                </Button>
                <Button
                    onClick={handleSignOut}
                    variant="destructive"
                >
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default DashboardPage;