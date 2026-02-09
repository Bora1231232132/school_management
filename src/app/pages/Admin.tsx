import React, { useState } from "react";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  FilePlus,
  Settings,
  LogOut,
  Bell,
  Image as ImageIcon,
  Send,
} from "lucide-react";
import emblemBlue from "../../assets/7b340a16453c67207ebf0d2aea65df6d982060fa.png";

export function Admin() {
  const [activeTab, setActiveTab] = useState("new-post");

  return (
    <div className="pt-24 min-h-screen bg-gray-100 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-10 px-2">
          <img
            src={emblemBlue}
            alt="Admin Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="font-bold text-[#182B70]">College Admin</div>
        </div>

        <nav className="flex-1 space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all",
              activeTab === "dashboard"
                ? "bg-[#182B70] text-white shadow-lg shadow-[#182B70]/20"
                : "text-gray-500 hover:bg-gray-50",
            )}
          >
            <LayoutDashboard size={20} />{" "}
            <span className="font-bold">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("new-post")}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all",
              activeTab === "new-post"
                ? "bg-[#182B70] text-white shadow-lg shadow-[#182B70]/20"
                : "text-gray-500 hover:bg-gray-50",
            )}
          >
            <FilePlus size={20} /> <span className="font-bold">Post News</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all",
              activeTab === "settings"
                ? "bg-[#182B70] text-white shadow-lg shadow-[#182B70]/20"
                : "text-gray-500 hover:bg-gray-50",
            )}
          >
            <Settings size={20} /> <span className="font-bold">Settings</span>
          </button>
        </nav>

        <button className="flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all mt-auto font-bold">
          <LogOut size={20} /> Sign Out
        </button>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 lg:ml-64 p-6 md:p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-[#182B70]">
              {activeTab === "new-post"
                ? "Create New Post"
                : activeTab === "dashboard"
                  ? "Admin Dashboard"
                  : "Settings"}
            </h1>
            <p className="text-gray-400">
              Manage Chea Chanto College website content.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#182B70] shadow-sm hover:shadow-md transition-all">
              <Bell size={20} />
            </button>
            <div className="w-12 h-12 bg-[#182B70] rounded-xl flex items-center justify-center text-white font-bold">
              JS
            </div>
          </div>
        </header>

        {activeTab === "new-post" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Post Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter article title"
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#182B70]/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Category
                  </label>
                  <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#182B70]/10 appearance-none">
                    <option>Academic</option>
                    <option>Sports</option>
                    <option>Campus Life</option>
                    <option>Announcements</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Featured Image
                </label>
                <div className="w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-gray-100 transition-all">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">
                    <ImageIcon size={32} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-600">
                      Click to upload image
                    </p>
                    <p className="text-sm text-gray-400">
                      PNG, JPG or WebP (Max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Content Body
                </label>
                <textarea
                  rows={8}
                  placeholder="Write your news article here..."
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#182B70]/10"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-100 transition-all">
                  Save Draft
                </button>
                <button className="px-10 py-4 bg-[#182B70] text-white rounded-2xl font-bold shadow-lg shadow-[#182B70]/20 hover:scale-105 transition-all flex items-center gap-2">
                  Publish Article <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-[#182B70] mb-2">24</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                Total Posts
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-[#182B70] mb-2">
                1,240
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                Total Views
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-[#182B70] mb-2">86</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                Applications
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
