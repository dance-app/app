import { Link } from "@tanstack/react-router";
import { AppWindow, Calendar, Student } from "@phosphor-icons/react";

export const Navigation = () => {
  const links = [
    { to: "/", label: "Dashboard", icon: AppWindow },
    { to: "/schedule", label: "Schedule", icon: Calendar },
    { to: "/students", label: "Students", icon: Student },
  ] as const;

  return (
    <nav>
      <ul className="flex flex-col gap-1 mt-4">
        {links.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className="text-sm transition-all duration-300 text-center text-slate-500 rounded-md border border-transparent
            flex items-center gap-1 w-[200px] mx-auto [&.active]:bg-slate-100 [&.active]:border-slate-200 p-2 hover:bg-slate-50 focus:bg-slate-100"
          >
            <item.icon
              size={18}
              weight="duotone"
              className="text-2xl text-slate-500"
            />
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
