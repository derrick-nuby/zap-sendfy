"use client";

import { Button } from "@/components/ui/button";
import React from 'react';

const DashboardPage = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl font-medium">
                Welcome Derrick
            </h1>
            <p className="text-gray-500 mt-2">
                You are signed in.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
                <Button variant="outline">
                    Back to home
                </Button>
                <Button>
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default DashboardPage;
