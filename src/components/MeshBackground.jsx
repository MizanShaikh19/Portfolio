import React from 'react';

const MeshBackground = ({ children, className = "" }) => {
    return (
        <div className={`relative overflow-hidden bg-black ${className}`}>
            {/* Animated Mesh Gradients with Purple-Pink-Orange */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink/15 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-orange/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[30%] left-[20%] w-[35%] h-[35%] bg-purple-light/10 rounded-full blur-[90px] animate-pulse delay-1000" />
            </div>

            {/* Grid Pattern/Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v1h-1v-1h1zm0 1h1v1h-1v-1zm1 0h1v1h-1v-1zm0-1h1v1h-1v-1zm1 1h1v1h-1v-1zM34 34h1v1h-1v-1zm0 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zM33 33h1v1h-1v-1zm0 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zM32 32h1v1h-1v-1zm0 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zM31 31h1v1h-1v-1zm0 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default MeshBackground;
