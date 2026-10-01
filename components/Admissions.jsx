"use client";

import {
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  FileText,
  GraduationCap,
  ClipboardList,
  Download,
} from "lucide-react";

export default function Admissions({ school }) {
  const admissions = school?.admissions;

  if (!admissions) {
    return null;
  }

  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-[#F8F6EF] py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#123B72]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-white px-5 py-2 text-sm font-semibold tracking-[0.18em] text-[#C9A227] shadow-sm">
            <GraduationCap className="h-4 w-4" />
            {admissions.status}
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#071A33] md:text-5xl">
            {admissions.heading}
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {admissions.description}
          </p>
        </div>

        {/* =========================================================
            CLASSES AVAILABLE
        ========================================================= */}
        {Array.isArray(admissions.classesAvailable) &&
          admissions.classesAvailable.length > 0 && (
            <div className="mb-20">
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  Admissions Available For
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#071A33] md:text-3xl">
                  Classes & Academic Levels
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {admissions.classesAvailable.map((className, index) => (
                  <div
                    key={`${className}-${index}`}
                    className="group rounded-2xl border border-[#C9A227]/20 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#071A33] text-[#E2C66D] transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <h4 className="font-semibold text-[#071A33]">
                      {className}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* =========================================================
            ADMISSION PROCESS
        ========================================================= */}
        {Array.isArray(admissions.process) &&
          admissions.process.length > 0 && (
            <div className="mb-20">
              <div className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  How It Works
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#071A33] md:text-3xl">
                  Admission Process
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {admissions.process.map((item) => (
                  <div
                    key={item.number}
                    className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl"
                  >
                    {/* Number */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A33] text-sm font-bold text-[#E2C66D]">
                        {item.number}
                      </div>

                      <ArrowRight className="h-5 w-5 text-[#C9A227]" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-[#071A33]">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* =========================================================
            DOCUMENTS + IMPORTANT DATES
        ========================================================= */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Required Documents */}
          {Array.isArray(admissions.requiredDocuments) &&
            admissions.requiredDocuments.length > 0 && (
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A33] text-[#E2C66D]">
                    <FileText className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A227]">
                      Documents
                    </p>

                    <h3 className="text-2xl font-bold text-[#071A33]">
                      Required Documents
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {admissions.requiredDocuments.map((document, index) => (
                    <div
                      key={`${document}-${index}`}
                      className="flex items-start gap-3 rounded-xl bg-[#F8F6EF] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A227]" />

                      <span className="font-medium text-gray-700">
                        {document}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Important Dates */}
          {Array.isArray(admissions.importantDates) &&
            admissions.importantDates.length > 0 && (
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A33] text-[#E2C66D]">
                    <CalendarDays className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A227]">
                      Schedule
                    </p>

                    <h3 className="text-2xl font-bold text-[#071A33]">
                      Important Dates
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {admissions.importantDates.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex items-center justify-between gap-5 rounded-xl border border-gray-100 bg-[#F8F6EF] p-5"
                    >
                      <div>
                        <h4 className="font-semibold text-[#071A33]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500">
                          {item.date}
                        </p>
                      </div>

                      <CalendarDays className="h-5 w-5 shrink-0 text-[#C9A227]" />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>

        {/* =========================================================
            ACTION BUTTONS
        ========================================================= */}
        <div className="mt-14 rounded-3xl bg-[#071A33] p-8 text-center shadow-2xl md:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-white">
              <ClipboardList className="h-7 w-7" />
            </div>

            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Ready to Begin the Journey?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
              Take the next step toward your child's educational journey at
              Royal International School.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              {/* Apply */}
              {admissions.applyButton && (
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E2C66D] hover:text-[#071A33]"
                >
                  {admissions.applyButton}
                  <ArrowRight className="h-5 w-5" />
                </a>
              )}

              {/* Enquiry */}
              {admissions.enquiryButton && (
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#071A33]"
                >
                  {admissions.enquiryButton}
                </a>
              )}

              {/* Prospectus */}
              {admissions.prospectusButton && admissions.prospectus && (
                <a
                  href={admissions.prospectus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A227] px-7 py-3.5 font-semibold text-[#E2C66D] transition-all duration-300 hover:bg-[#C9A227] hover:text-white"
                >
                  <Download className="h-5 w-5" />
                  {admissions.prospectusButton}
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}