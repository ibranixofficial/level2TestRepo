import React from 'react'
import {
    LayoutDashboard,
    BookOpen,
    Users,
    GraduationCap,
    MessageSquare,
    Settings,
    HelpCircle,
    LogOut,
    UserPlus,
    ChevronRight,
    AlertTriangle,
} from 'lucide-react'
import { useLocation } from 'react-router-dom'







const Sidebar = () => {
    let location = useLocation()

    if (location.pathname == "/" || location.pathname=="/registration" ) {
        return null;
    }

    return (
        <aside className="h-screen overflow-hidden w-72 flex flex-col bg-white border-r border-slate-100 px-5 py-6">

            {/* Logo */}
            <div className="flex items-center gap-3 px-2 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-200">
                    <GraduationCap size={27} className="text-white" />
                </div>
                <div>
                    <h1 className="text-lg font-bold text-slate-900">SSI Bannu</h1>
                    <p className="text-xs text-slate-400">Learning Management</p>
                </div>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 p-3 mb-8 rounded-2xl bg-blue-50/70">
                <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Profile"
                    className="w-11 h-11 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold text-slate-800">Admin User</h2>
                    <p className="text-xs text-slate-500">Administrator</p>
                </div>
                <ChevronRight size={17} className="text-slate-400" />
            </div>

            {/* Navigation */}
            <div className="flex-1">
                <p className="text-[11px] font-bold tracking-widest text-slate-400 px-3 mb-4">
                    MAIN MENU
                </p>

                <nav className="space-y-2">
                    <button
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all `}
                    >
                        <GraduationCap size={19} />
                        Students
                    </button>
                </nav>

                <nav className="space-y-2">
                    <button
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all `}
                    >
                        <AlertTriangle size={19} />
                        Attendace
                    </button>
                </nav>

            </div>

            {/* Bottom Signup */}
            <div className="mt-6">


                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all">
                    <LogOut size={19} />
                    Logout
                </button>

                <p className="text-center text-[10px] text-slate-400 mt-4">
                    © 2026 SSI Bannu. All rights reserved.
                </p>
            </div>
        </aside>
    )
}

export default Sidebar