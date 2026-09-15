import Image from "next/image";
import Link from "next/link";

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Header */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link
            href="/#projects"
            className="text-sm font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-400"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              ERP Project
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Smart Inventory ERP System
            </h1>

            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
              Hardware Retail Store Management
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              A web-based ERP system designed for hardware retail stores with
              inventory tracking, billing, customer and supplier management,
              purchase and sales management, invoice generation, and role-based
              access control.
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Python", "Django", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium dark:border-slate-700 dark:bg-slate-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          <Image
            src="/projects/inventory-dashboard.png"
            alt="Smart Inventory ERP Dashboard"
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Inventory Management",
              description:
                "Real-time inventory tracking helps manage products and monitor stock levels.",
            },
            {
              title: "Billing & Invoices",
              description:
                "The system supports billing, sales management, and invoice generation.",
            },
            {
              title: "Customer & Supplier Management",
              description:
                "Customer and supplier information can be managed from the ERP system.",
            },
            {
              title: "Purchase & Sales Management",
              description:
                "Purchase and sales operations are organized within a centralized system.",
            },
            {
              title: "Role-Based Access Control",
              description:
                "Secure authentication and role-based access help manage permissions for admins and staff.",
            },
            {
              title: "Database Management",
              description:
                "PostgreSQL with Django ORM is used for data management and reporting.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 p-7 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-bold">{feature.title}</h2>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Billing Screenshot */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Project Screen
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Billing and invoice management.
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-800">
          <Image
            src="/projects/inventory-billing.png"
            alt="Smart Inventory ERP Billing and Tax Invoice"
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </section>
    </main>
  );
}