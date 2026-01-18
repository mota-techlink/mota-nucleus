# Mota Nucleus: High-Density SaaS Core

> **Structuring the Chaos.**
> This project is a living implementation of the **"Inverted Atom"** theory, where digital chaos is captured at the edge and funneled into high-density actionable insights.

**Mota Nucleus** is a production-grade Monorepo boilerplate designed for extreme scalability, type safety, and developer experience. It serves as the foundational "Nucleus" for future MOTA products (like Mota Engine & ELMS).

---

## 🏗 Architecture: The Inverted Atom

The project is structured as a **TurboRepo** monorepo, separating the core business logic (Nucleus) from the application layers (Electrons).

\`\`\`text
mota-nucleus/
├── apps/                 # The Application Layer (Consumers)
│   ├── web/              # [Next.js] Official Website (SSG/SSR)
│   ├── portal/           # [Next.js] User Dashboard (SPA behavior)
│   └── console/          # [Next.js] Admin Management (Internal)
├── packages/             # The High-Density Core (Shared Logic)
│   ├── ui/               # [Shadcn + Tailwind] The Visual Arsenal
│   ├── database/         # [Supabase] The Memory & Schema Definitions
│   ├── config/           # [TS/ESLint] The Law & Governance
│   └── logic/            # [Hooks/Utils] Pure Business Logic
└── tooling/              # Infrastructure Scripts
\`\`\`

---

## 🛠 Tech Stack (The Arsenal)

* **Monorepo Manager**: [TurboRepo](https://turbo.build/)
* **Package Manager**: [pnpm](https://pnpm.io/) (v9.1.0 pinned)
* **Runtime**: [Node.js](https://nodejs.org/) (v20.20.0 LTS pinned via Volta)
* **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
* **UI System**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
* **Database**: [Supabase](https://supabase.com/) (Local Docker Instance)
* **Type Safety**: End-to-End TypeScript (DB Schema to React Component)

---

## 🚀 Getting Started

### 1. Prerequisites (Environment Governance)

We use **Volta** to strictly pin Node.js and pnpm versions, eliminating "it works on my machine" chaos.

1.  **Install Volta**: [https://volta.sh/](https://volta.sh/)
2.  **Install Docker**: Required for the local database.
    * *Linux Note*: Ensure your user is in the docker group (\`sudo usermod -aG docker $USER\` and \`newgrp docker\`).

### 2. Ignition Sequence

\`\`\`bash
# 1. Clone the repository
git clone <repo-url> mota-nucleus
cd mota-nucleus

# 2. Install Dependencies (Volta will auto-switch Node/pnpm versions)
pnpm install

# 3. Start Local Database (The Memory)
# This spins up a full Supabase instance in Docker
cd packages/database
pnpm db:start
# Output will provide: API URL & Anon Key (Save these!)

# 4. Initialize Environment Variables
# Create apps/web/.env.local and add your Supabase keys
# NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
\`\`\`

### 3. Running the Nucleus

Go back to the root directory and ignite all engines:

\`\`\`bash
pnpm dev
\`\`\`

* **Web App**: \`http://localhost:3000\`
* **Supabase Studio**: \`http://127.0.0.1:54323\` (Database Admin UI)

---

## 🧠 Core Workflows

### A. Database Management (The Memory Loop)

We treat the database schema as code. Never modify the database manually in production.

1.  **Modify Schema**: Run a migration command to create a new SQL file.
    \`\`\`bash
    # inside packages/database
    pnpm supabase migration new <migration_name>
    \`\`\`
2.  **Apply & Reset**: Apply changes to the local docker instance.
    \`\`\`bash
    pnpm db:reset
    \`\`\`
3.  **Generate Types**: The magic step. Syncs DB schema to TypeScript interfaces.
    \`\`\`bash
    pnpm db:types
    \`\`\`
    *Result*: The \`@mota/database\` package now exports updated types utilized by all apps.

### B. UI Component Workflow

The \`@mota/ui\` package exports a unified design system.

1.  **Add Component**: Use the Shadcn CLI (configured in \`packages/ui\`).
2.  **Usage**:
    \`\`\`tsx
    import { Button } from "@mota/ui/components/button";
    import { cn } from "@mota/ui/utils";
    \`\`\`
3.  **Tailwind**: The configuration in \`apps/*/tailwind.config.ts\` is specially wired to scan \`packages/ui\` for classes.

---

## 📝 Best Practices & Fixes (Tribal Knowledge)

### 1. TypeScript Module Resolution
When using \`moduleResolution: "bundler"\`, we explicitly set \`module: "esnext"\` in \`packages/ui/tsconfig.json\` to ensure correct tree-shaking and import handling:

\`\`\`json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext", // Critical fix
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": { "@ui/*": ["./src/*"] }
  }
}
\`\`\`

### 2. Supabase Client in Server Components
For simple data fetching in Server Components (App Router), prefer the raw \`createClient\` over \`auth-helpers\` to avoid version conflicts and complexity during the early stages.

\`\`\`typescript
import { createClient } from "@supabase/supabase-js";
// Always force dynamic if you need real-time data
export const dynamic = 'force-dynamic';
\`\`\`

---

## 🔮 Roadmap

* [x] **Phase 1: Nucleus Genesis** (Monorepo, UI, DB, Type Pipeline) - *COMPLETED*
* [ ] **Phase 2: Identity & Access** (Auth, RBAC, User Profiles)
* [ ] **Phase 3: Mota Engine Logic** (Prompt Management, AI Integration)

---
**MOTA TECHLINK** | *Structuring the Chaos*
