import { CheckCircle2 } from "lucide-react";

export default function CompassTest() {
  return (
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 bg-slate-50">
        <header className="flex items-center p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold">Compass Integration Test</div>
            <div className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
              Passed
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-6">
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Test Suite: Compass API Integration</h2>
            <div className="space-y-4">
              {[
                { name: "Authentication Token Validation", status: "passed" },
                { name: "Component Discovery", status: "passed" },
                { name: "Metrics Collection", status: "passed" },
                { name: "Event Processing", status: "passed" }
              ].map((test) => (
                  <div key={test.name} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span>{test.name}</span>
                    </div>
                    <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-700">
                  Passed
                </span>
                  </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Test Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Total Tests", value: "4", color: "bg-gray-100" },
                { label: "Passed", value: "4", color: "bg-green-100" },
                { label: "Failed", value: "0", color: "bg-red-100" }
              ].map((metric) => (
                  <div key={metric.label} className={`${metric.color} p-4 rounded-lg`}>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className="text-2xl font-semibold mt-1">{metric.value}</div>
                  </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="flex justify-center gap-4 py-4 text-sm text-gray-600">
          <span>Test Report Generated: January 15, 2025</span>
        </footer>
      </div>
  );
}
