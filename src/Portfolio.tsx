import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { SVGProps } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Mail,
  FileText,
  Terminal,
  Cloud,
  Server,
  Shield,
  Code2,
  Wrench,
  GraduationCap,
  Award,
  Compass,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
  Layers,
  Activity,
  Sliders,
  Info,
  Cpu,
  Database,
  HardDrive,
  Network,
  Lock,
  Monitor,
} from 'lucide-react';

// Custom GitHub and LinkedIn brand icons
function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.04 3.2 1.56.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.45H4.96V9.04h2.97v9.41ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.7h-2.97v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.66H9.24V9.04h2.85v1.29h.04c.4-.75 1.36-1.53 2.8-1.53 3 0 3.56 1.97 3.56 4.53v5.12Z" />
    </svg>
  );
}


/**
 * ============================================================================
 * CENTRALIZED SITE CONFIGURATION (`siteConfig`)
 * ============================================================================
 * Update personal details, links, projects, skills, experiments, and backend
 * endpoints here without modifying component logic.
 */
const siteConfig = {
  name: 'Brijesh',
  brand: 'BRIJESH.Cloud',
  introLabel: "HELLO, WORLD. I'M BRIJESH.",
  headlineLines: ['Building with curiosity.', 'Thinking beyond the ordinary.'],
  heroDescription:
    "I'm an aspiring Cloud & Infrastructure professional exploring the intersection of cloud computing, automation, security and technology. I enjoy turning ideas into practical solutions and continuously learning how things work behind the scenes.",
  identityLabels: [
    'Cloud & Infrastructure',
    'AWS & Linux',
    'Creative Problem Solver',
  ],
  tagline: 'Designed with curiosity. Built with purpose.',

  // --- Editable Contact & Profile Links ---
  // Replace these placeholder values with your actual details before deploying.
  email: 'brijeshchandera26@gmail.com', // Editable placeholder email
  linkedinUrl: 'https://www.linkedin.com/in/brijesh6', // Editable LinkedIn URL
  githubUrl: 'https://github.com/brij06h',

  // --- Contact Form Backend Endpoint ---
  // Example: 'https://formspree.io/f/yourFormId' or your own API route.
  // Leave empty until configured; the form will NEVER fake a submission.
  contactFormEndpoint: '',

  about: {
    heading: 'A little about how I think.',
    paragraphs: [
      "I'm someone who enjoys understanding how technology works, experimenting with ideas and building things that solve actual problems.",
      'My primary interest lies in cloud computing, IT infrastructure, AWS, Linux administration, security and automation.',
      'I believe technical knowledge becomes valuable when it can be applied to real-world challenges.',
      'Beyond technology, I enjoy creative thinking, exploring unconventional approaches and looking at problems from different perspectives.',
      "I'm continuously learning, experimenting and building my way into the technology industry.",
    ],
    philosophy: 'Stay curious. Build relentlessly. Think differently.',
  },

  skills: [
    {
      id: 'cloud',
      category: 'Cloud Computing',
      label: 'CLOUD COMPUTING',
      description: 'Core AWS services, identity foundations, and cloud security principles.',
      icon: 'cloud',
      items: [
        'Amazon Web Services (AWS)',
        'IAM',
        'EC2',
        'S3',
        'Lambda',
        'DynamoDB',
        'AWS Identity Center',
        'Cloud Security Fundamentals',
      ],
    },
    {
      id: 'systems',
      category: 'Systems & Infrastructure',
      label: 'SYSTEMS & INFRASTRUCTURE',
      description: 'Linux system administration, storage management, and networking basics.',
      icon: 'server',
      items: [
        'Linux Administration',
        'Red Hat Enterprise Linux',
        'Users & Groups',
        'Permissions and Ownership',
        'Storage and Partitioning',
        'LVM Fundamentals',
        'Networking Fundamentals',
      ],
    },
    {
      id: 'automation',
      category: 'Automation & Scripting',
      label: 'AUTOMATION & SCRIPTING',
      description: 'Writing practical scripts to automate cloud workflows and system tasks.',
      icon: 'code',
      items: [
        'Python Fundamentals',
        'Boto3',
        'Bash Scripting',
        'CSV and YAML',
        'Infrastructure Automation Concepts',
      ],
    },
    {
      id: 'tools',
      category: 'Tools & Workflow',
      label: 'TOOLS & WORKFLOW',
      description: 'Everyday developer and cloud operations tooling.',
      icon: 'wrench',
      items: [
        'Git',
        'GitHub',
        'AWS Management Console',
        'Linux Terminal',
        'VS Code',
      ],
    },
  ],

  projects: [
    {
      slug: 'aws-cloud-security-auditor',
      index: 'PROJECT 01',
      title: 'AWS Cloud Security Auditor',
      shortDescription:
        'A practical AWS security auditing project designed to inspect cloud configurations and identify potential security issues.',
      status: 'Active / Open Source',
      githubUrl: 'https://github.com/brij06h/aws-cloud-security-auditor',
      problem:
        'Cloud environments can accumulate misconfigurationsâ€”such as overly permissive IAM policies, public S3 buckets, or open security group rulesâ€”that are tedious and error-prone to audit manually.',
      solutionOverview:
        'A Python and Boto3 auditing utility that queries AWS service APIs in read-only mode, evaluates resource configurations against foundational cloud security checks, and outputs structured audit reports.',
      stack: [
        'Python',
        'Boto3',
        'AWS IAM',
        'Amazon S3',
        'Amazon EC2',
        'Cloud Security',
      ],
      implementationDetails: [
        'Uses the AWS SDK for Python (Boto3) with read-only API calls to safely inspect account resources without mutating state.',
        'Evaluates IAM configuration hygiene, S3 bucket access controls, and EC2 security group ingress rules against foundational security checks.',
        'Separates AWS resource discovery from rule evaluation so additional security checks can be added modularly.',
        'Generates clean, structured audit findings to help surface potential misconfigurations quickly.',
      ],
      architectureType: 'security-auditor',
    },
    {
      slug: 'aws-iam-employee-lifecycle-automation',
      index: 'PROJECT 02',
      title: 'AWS IAM Employee Lifecycle Automation',
      shortDescription:
        'An AWS automation project focused on simplifying employee onboarding and access management through IAM-related workflows. The project incorporates Python, Boto3, AWS Lambda, DynamoDB, Amazon S3 and AWS IAM Identity Center.',
      status: 'Active / Open Source',
      githubUrl: 'https://github.com/brij06h/aws-iam-employee-lifecycle-automation',
      problem:
        'Manually provisioning accounts, assigning permission sets, and tracking access changes during employee onboarding and offboarding introduces operational friction and increases the risk of stale privileges.',
      solutionOverview:
        'An event-driven serverless workflow where employee data uploaded to Amazon S3 triggers an AWS Lambda function (Python/Boto3) that automates user provisioning and group/access assignment in AWS IAM Identity Center while maintaining lifecycle state in DynamoDB.',
      stack: [
        'Python',
        'Boto3',
        'AWS Lambda',
        'DynamoDB',
        'Amazon S3',
        'AWS IAM Identity Center',
      ],
      implementationDetails: [
        'Ingests structured employee records uploaded to Amazon S3, automatically triggering downstream serverless execution.',
        'Executes Python and Boto3 logic inside AWS Lambda to orchestrate identity provisioning and group/access assignment in AWS IAM Identity Center.',
        'Persists employee lifecycle metadata and processing state in Amazon DynamoDB for traceability and idempotent handling.',
        'Designed around event-driven cloud automation principles to reduce repetitive manual IAM administration.',
      ],
      architectureType: 'iam-lifecycle',
    },
    {
      slug: 'esxi-live-monitoring',
      index: 'PROJECT 03',
      title: 'ESXi Live Monitoring Dashboard',
      shortDescription:
        'A Docker-based infrastructure monitoring solution built in a home lab to collect and visualize VMware ESXi host and virtual machine performance metrics. The monitoring stack uses Telegraf to collect metrics through the vSphere API, InfluxDB for time-series storage and Grafana for real-time visualization.',
      status: 'Verified Home Lab Build',
      githubUrl: 'https://github.com/brij06h/ESXi-Live-Monitoring',
      githubLabel: 'GitHub',
      problem:
        'Gaining real-time, centralized visibility into hypervisor and virtual machine resource utilization (CPU, memory, disk, and network) in a home lab VMware ESXi environment without relying on heavy enterprise monitoring suites.',
      solutionOverview:
        'A containerized, configuration-driven monitoring stack deployed via Docker Compose on Windows 11 & WSL2. Telegraf polls the VMware ESXi 7.0 Update 3 host via the vSphere API, writes time-series telemetry into InfluxDB 2.7, and feeds live dashboards in Grafana 11.',
      stack: [
        'VMware ESXi 7.0 Update 3',
        'Docker & Docker Compose',
        'Telegraf',
        'InfluxDB 2.7',
        'Grafana 11',
        'VMware Workstation',
        'Windows 11 & WSL2',
      ],
      implementationDetails: [
        'Automated infrastructure metrics collection.',
        'CPU, memory, disk and network monitoring.',
        'Containerized monitoring architecture.',
        'Time-series metrics storage.',
        'Grafana dashboard visualization.',
        'Reusable configuration-based deployment.',
      ],
      outcome:
        'Successfully implemented and verified an end-to-end ESXi monitoring environment, displaying host CPU performance metrics through Grafana using Telegraf and InfluxDB.',
      architectureType: 'esxi-monitoring',
    },
  ],

  /**
   * Modular Creative Corner experiments registry.
   * Add future experiments here without redesigning the layout.
   */
  experiments: [
    {
      id: 'mesh-network',
      code: 'EXP-01',
      title: 'Generative Mesh Network',
      category: 'Interactive Particles',
      description:
        'Autonomous nodes drift smoothly across a coordinate plane, forming hairline geometric links within a dynamic proximity radius and responding subtly to pointer movement.',
      paramLabel: 'Connection Radius',
      paramMin: 70,
      paramMax: 180,
      paramDefault: 120,
      hint: 'Move your cursor or touch across the canvas to gently deflect nearby nodes.',
    },
    {
      id: 'harmonic-field',
      code: 'EXP-02',
      title: 'Harmonic Field',
      category: 'Generative Artwork',
      description:
        'Minimal topographic sine-wave contours rendered over a technical coordinate grid, creating calm interference ripples around pointer coordinates.',
      paramLabel: 'Wave Frequency',
      paramMin: 1,
      paramMax: 6,
      paramDefault: 3,
      hint: 'Glide across the field to modulate wave amplitude and phase locally.',
    },
    {
      id: 'packet-pulse',
      code: 'EXP-03',
      title: 'Packet Pulse Topology',
      category: 'Technical Experiment',
      description:
        'A minimal distributed graph where clicking or tapping any node emits propagating telemetry pulses across connected network edges.',
      paramLabel: 'Signal Velocity',
      paramMin: 1,
      paramMax: 5,
      paramDefault: 2.5,
      hint: 'Click or tap any node to emit a cascading signal pulse through the graph.',
    },
  ],

  education: [
    {
      degree: 'Master of Science (M.Sc.) in Information Technology',
      specialization: 'IMS and Cloud Technology',
      highlightLabel: 'Latest Academic Achievement',
      highlightValue: 'Semester 2 CGPA: 9.65',
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      focus: 'Foundational cloud architecture, security, billing, and core AWS services.',
    },
  ],

  currentlyExploring: [
    {
      topic: 'Advanced AWS concepts',
      status: 'Exploring',
      detail: 'Deepening architectural understanding across networking, serverless, and identity services.',
    },
    {
      topic: 'Cloud infrastructure and architecture',
      status: 'In Progress',
      detail: 'Designing resilient, well-structured cloud topologies and repeatable environments.',
    },
    {
      topic: 'Linux administration',
      status: 'In Progress',
      detail: 'Hands-on RHEL administration, storage/LVM, services, and system troubleshooting.',
    },
    {
      topic: 'Python and Boto3 automation',
      status: 'In Progress',
      detail: 'Building practical cloud operational scripts and automated audit/lifecycle tooling.',
    },
    {
      topic: 'Bash scripting',
      status: 'Exploring',
      detail: 'Streamlining Linux operational tasks, log checks, and repeatable shell workflows.',
    },
    {
      topic: 'Cloud security and IAM',
      status: 'In Progress',
      detail: 'Least-privilege access patterns, identity governance, and configuration auditing.',
    },
    {
      topic: 'DevOps fundamentals',
      status: 'Exploring',
      detail: 'CI/CD concepts, version-controlled infrastructure workflows, and operational reliability.',
    },
  ],

  navItems: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'creative', label: 'Creative' },
    { id: 'contact', label: 'Contact' },
  ],
};

/**
 * ============================================================================
 * HOOKS: REDUCED MOTION & HASH ROUTING
 * ============================================================================
 */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mediaQuery.matches);

    const listener = (event) => setReduced(event.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);

  return reduced;
}

/**
 * Parses window.location.hash into structured routes:
 * - { view: 'home', section: string | null }
 * - { view: 'project', slug: string }
 * - { view: 'not-found', path: string }
 */
function parseHashRoute(hash) {
  const raw = (hash || '').replace(/^#/, '');
  if (!raw || raw === '/' || raw === '') {
    return { view: 'home', section: null };
  }

  // Section anchors like #about, #projects, etc.
  const validSections = new Set(siteConfig.navItems.map((n) => n.id));
  if (validSections.has(raw)) {
    return { view: 'home', section: raw };
  }

  // Project detail routes: #/projects/:slug or #/project/:slug
  if (raw.startsWith('/projects/') || raw.startsWith('/project/')) {
    const slug = raw.replace(/^\/projects?\//, '').replace(/\/$/, '');
    const exists = siteConfig.projects.some((p) => p.slug === slug);
    if (exists) {
      return { view: 'project', slug };
    }
    return { view: 'not-found', path: raw };
  }

  // Any other hash route (e.g. #/not-found) resolves to 404
  return { view: 'not-found', path: raw };
}

/**
 * ============================================================================
 * HERO INFRASTRUCTURE TOPOLOGY CANVAS
 * ============================================================================
 * Lightweight animated cloud topology graphic with nodes, hairline links,
 * and drifting telemetry packets. Respects prefers-reduced-motion.
 */
function HeroTopologyVisual({ theme, reducedMotion }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const effectivelyPaused = reducedMotion || isPaused;

  const nodes = useMemo(
    () => [
      { id: 'vpc', label: 'AWS VPC', sub: '10.0.0.0/16', rx: 0.5, ry: 0.2 },
      { id: 'iam', label: 'IAM', sub: 'Least Priv', rx: 0.18, ry: 0.38 },
      { id: 'lambda', label: 'Lambda', sub: 'Python/Boto3', rx: 0.52, ry: 0.52 },
      { id: 's3', label: 'S3', sub: 'Event Source', rx: 0.84, ry: 0.36 },
      { id: 'linux', label: 'Linux Node', sub: 'RHEL / Bash', rx: 0.22, ry: 0.78 },
      { id: 'ddb', label: 'DynamoDB', sub: 'State Store', rx: 0.78, ry: 0.78 },
    ],
    []
  );

  const edges = useMemo(
    () => [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [3, 2],
      [2, 4],
      [2, 5],
      [1, 4],
      [3, 5],
    ],
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = null;

    // Telemetry packets traveling slowly along edges
    const packets = edges.map((edge, i) => ({
      edgeIndex: i,
      progress: (i * 0.27) % 1,
      speed: 0.0022 + (i % 3) * 0.0007,
      direction: i % 2 === 0 ? 1 : -1,
    }));

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const isDark = theme === 'dark';

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural dot grid
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.045)' : 'rgba(15, 23, 42, 0.06)';
      const step = 28;
      for (let x = step; x < width; x += step) {
        for (let y = step; y < height; y += step) {
          ctx.fillRect(x, y, 1.2, 1.2);
        }
      }

      // Compute node coordinates with very subtle organic drift
      const pts = nodes.map((n, idx) => {
        const driftX = effectivelyPaused ? 0 : Math.sin(time * 0.0005 + idx * 1.3) * 3.5;
        const driftY = effectivelyPaused ? 0 : Math.cos(time * 0.00045 + idx * 1.7) * 3.5;
        return {
          ...n,
          x: n.rx * width + driftX,
          y: n.ry * height + driftY,
        };
      });

      // Draw hairline edges
      edges.forEach(([aIdx, bIdx]) => {
        const a = pts[aIdx];
        const b = pts[bIdx];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.16)' : 'rgba(15, 23, 42, 0.13)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw drifting telemetry packets
      packets.forEach((p) => {
        if (!effectivelyPaused) {
          p.progress += p.speed * p.direction;
          if (p.progress > 1) p.progress = 0;
          if (p.progress < 0) p.progress = 1;
        }
        const [aIdx, bIdx] = edges[p.edgeIndex];
        const a = pts[aIdx];
        const b = pts[bIdx];
        const px = a.x + (b.x - a.x) * p.progress;
        const py = a.y + (b.y - a.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#38BDF8' : '#0284C7';
        ctx.fill();
      });

      // Draw nodes and labels
      pts.forEach((pt, idx) => {
        const isCore = idx === 2 || idx === 0;
        // Outer subtle ring
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, isCore ? 15 : 12, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#10141C' : '#FFFFFF';
        ctx.fill();
        ctx.strokeStyle = isCore
          ? isDark
            ? 'rgba(59, 130, 246, 0.55)'
            : 'rgba(37, 99, 235, 0.45)'
          : isDark
          ? 'rgba(255, 255, 255, 0.14)'
          : 'rgba(15, 23, 42, 0.15)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Inner status dot
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = isCore
          ? isDark
            ? '#3B82F6'
            : '#2563EB'
          : isDark
          ? '#38BDF8'
          : '#0284C7';
        ctx.fill();

        // Node text label
        ctx.font = '600 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = isDark ? '#F4F5F7' : '#0F172A';
        ctx.fillText(pt.label, pt.x, pt.y + (isCore ? 29 : 26));

        ctx.font = '400 10px "JetBrains Mono", monospace';
        ctx.fillStyle = isDark ? '#9299A8' : '#64748B';
        ctx.fillText(pt.sub, pt.x, pt.y + (isCore ? 42 : 39));
      });
    };

    const loop = (time) => {
      draw(time);
      if (!effectivelyPaused) {
        rafId = requestAnimationFrame(loop);
      }
    };

    draw(0);
    if (!effectivelyPaused) {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [theme, effectivelyPaused, nodes, edges]);

  return (
    <div
      className="relative w-full rounded-xl border overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Minimal terminal-style top bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b text-xs font-mono"
        style={{
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-secondary)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-cyan)' }} />
          <span>topology.cloud.map</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline opacity-75">region: ap-south-1</span>
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded border transition-colors hover:opacity-100 opacity-80"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label={isPaused ? 'Resume topology animation' : 'Pause topology animation'}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              <span>{isPaused ? 'Play' : 'Pause'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Responsive canvas container */}
      <div ref={containerRef} className="w-full h-[320px] sm:h-[360px] lg:h-[390px] relative">
        <canvas
          ref={canvasRef}
          className="block w-full h-full"
          aria-label="Abstract cloud infrastructure topology diagram connecting AWS VPC, IAM, Lambda, S3, Linux Node, and DynamoDB"
        />
      </div>

      {/* Bottom status strip */}
      <div
        className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-t text-[11px] font-mono"
        style={{
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-secondary)',
        }}
      >
        <div className="flex items-center gap-3">
          <span>nodes: 6</span>
          <span>links: 9</span>
        </div>
        <span>status: {effectivelyPaused ? 'static' : 'nominal'}</span>
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * PROJECT ARCHITECTURE SVG DIAGRAMS
 * ============================================================================
 * Crisp, technically accurate custom SVG architecture diagrams for each project.
 */
function ProjectArchitectureDiagram({ type }) {
  if (type === 'security-auditor') {
    return (
      <div
        className="w-full rounded-xl border p-4 sm:p-6 overflow-x-auto"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
            Architecture Flow â€” Read-Only Security Audit
          </span>
          <span className="text-[11px] font-mono" style={{ color: 'var(--accent-cyan)' }}>
            AWS SDK / Boto3
          </span>
        </div>
        <svg
          viewBox="0 0 860 220"
          className="w-full min-w-[620px] h-auto"
          role="img"
          aria-label="AWS Cloud Security Auditor architecture: Auditor CLI connects via Boto3 SDK to AWS APIs for IAM, S3, and EC2 Security Groups, feeding into a Rule Evaluator and Structured Audit Report."
        >
          <defs>
            <marker id="arrow-auditor" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
            </marker>
          </defs>

          {/* Node 1: Auditor CLI */}
          <rect x="16" y="75" width="140" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
          <text x="86" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Auditor CLI
          </text>
          <text x="86" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Python 3
          </text>

          {/* Arrow 1 -> 2 */}
          <line x1="156" y1="110" x2="200" y2="110" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-auditor)" />

          {/* Node 2: Boto3 SDK */}
          <rect x="206" y="75" width="124" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.2" />
          <text x="268" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Boto3 SDK
          </text>
          <text x="268" y="124" textAnchor="middle" fill="var(--accent-cyan)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Read-Only API
          </text>

          {/* Branching arrows to AWS APIs */}
          <path d="M 330 110 C 355 110, 355 45, 384 45" fill="none" stroke="var(--accent)" strokeWidth="1.3" markerEnd="url(#arrow-auditor)" />
          <line x1="330" y1="110" x2="384" y2="110" stroke="var(--accent)" strokeWidth="1.3" markerEnd="url(#arrow-auditor)" />
          <path d="M 330 110 C 355 110, 355 175, 384 175" fill="none" stroke="var(--accent)" strokeWidth="1.3" markerEnd="url(#arrow-auditor)" />

          {/* Node 3 Group: AWS APIs */}
          <rect x="390" y="22" width="144" height="46" rx="7" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.1" />
          <text x="462" y="42" textAnchor="middle" fill="var(--text-primary)" fontSize="11.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            AWS IAM
          </text>
          <text x="462" y="57" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Users, Policies, MFA
          </text>

          <rect x="390" y="87" width="144" height="46" rx="7" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.1" />
          <text x="462" y="107" textAnchor="middle" fill="var(--text-primary)" fontSize="11.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Amazon S3
          </text>
          <text x="462" y="122" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Public Access & ACLs
          </text>

          <rect x="390" y="152" width="144" height="46" rx="7" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.1" />
          <text x="462" y="172" textAnchor="middle" fill="var(--text-primary)" fontSize="11.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            EC2 Security Groups
          </text>
          <text x="462" y="187" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Ingress / Port Rules
          </text>

          {/* Converging arrows to Rule Evaluator */}
          <path d="M 534 45 C 558 45, 558 110, 582 110" fill="none" stroke="var(--accent)" strokeWidth="1.3" markerEnd="url(#arrow-auditor)" />
          <line x1="534" y1="110" x2="582" y2="110" stroke="var(--accent)" strokeWidth="1.3" markerEnd="url(#arrow-auditor)" />
          <path d="M 534 175 C 558 175, 558 110, 582 110" fill="none" stroke="var(--accent)" strokeWidth="1.3" markerEnd="url(#arrow-auditor)" />

          {/* Node 4: Rule Evaluator */}
          <rect x="588" y="75" width="118" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
          <text x="647" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Rule Evaluator
          </text>
          <text x="647" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Security Checks
          </text>

          {/* Arrow 4 -> 5 */}
          <line x1="706" y1="110" x2="736" y2="110" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-auditor)" />

          {/* Node 5: Report */}
          <rect x="742" y="75" width="104" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--accent-cyan)" strokeWidth="1.2" />
          <text x="794" y="103" textAnchor="middle" fill="var(--text-primary)" fontSize="11.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Audit Report
          </text>
          <text x="794" y="122" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Structured Output
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'esxi-monitoring') {
    return (
      <div
        className="w-full rounded-xl border p-4 sm:p-6 overflow-x-auto"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
            Architecture Flow â€” Containerized ESXi Telemetry Pipeline
          </span>
          <span className="text-[11px] font-mono" style={{ color: 'var(--accent-cyan)' }}>
            vSphere API Ã¢â€ â€™ Telegraf Ã¢â€ â€™ InfluxDB Ã¢â€ â€™ Grafana
          </span>
        </div>
        <svg
          viewBox="0 0 860 220"
          className="w-full min-w-[640px] h-auto"
          role="img"
          aria-label="ESXi Live Monitoring Dashboard architecture: VMware Workstation running VMware ESXi 7.0 Update 3 Host connects via vSphere API to a Docker Compose stack on Windows 11 and WSL2 containing Telegraf Collector, InfluxDB 2.7 Time-Series DB, and Grafana 11 Live Dashboards."
        >
          <defs>
            <marker id="arrow-esxi" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
            </marker>
          </defs>

          {/* Left Box: VMware Workstation / ESXi Host */}
          <rect x="16" y="42" width="186" height="140" rx="10" fill="none" stroke="var(--border-strong)" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="109" y="64" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            VMware Workstation
          </text>

          <rect x="30" y="80" width="158" height="84" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
          <text x="109" y="109" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            VMware ESXi 7.0 U3
          </text>
          <text x="109" y="128" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Host &amp; VM Metrics
          </text>
          <text x="109" y="145" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
            CPU / Mem / Disk / Net
          </text>

          {/* Arrow: ESXi -> Telegraf via vSphere API */}
          <line x1="188" y1="122" x2="294" y2="122" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-esxi)" />
          <rect x="208" y="96" width="76" height="20" rx="4" fill="var(--bg-primary)" stroke="var(--border-subtle)" strokeWidth="1" />
          <text x="246" y="109" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9" fontFamily="JetBrains Mono, monospace">
            vSphere API
          </text>

          {/* Right Container: Docker Compose Stack on Windows 11 & WSL2 */}
          <rect x="284" y="24" width="560" height="176" rx="10" fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="5 4" />
          <text x="564" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Docker Compose Stack â€” Windows 11 &amp; WSL2
          </text>

          {/* Node 1: Telegraf */}
          <rect x="302" y="82" width="144" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.3" />
          <text x="374" y="112" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Telegraf
          </text>
          <text x="374" y="130" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Metric Collector
          </text>
          <text x="374" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
            vSphere Input Plugin
          </text>

          {/* Arrow: Telegraf -> InfluxDB */}
          <line x1="446" y1="122" x2="486" y2="122" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-esxi)" />

          {/* Node 2: InfluxDB 2.7 */}
          <rect x="492" y="82" width="148" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
          <text x="566" y="112" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            InfluxDB 2.7
          </text>
          <text x="566" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Time-Series DB
          </text>
          <text x="566" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Metric Storage
          </text>

          {/* Arrow: InfluxDB -> Grafana */}
          <line x1="640" y1="122" x2="680" y2="122" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-esxi)" />

          {/* Node 3: Grafana 11 */}
          <rect x="686" y="82" width="142" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--accent-cyan)" strokeWidth="1.3" />
          <text x="757" y="112" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
            Grafana 11
          </text>
          <text x="757" y="130" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Live Dashboards
          </text>
          <text x="757" y="146" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Real-Time Visuals
          </text>
        </svg>
      </div>
    );
  }

  // Architecture Diagram for Project 02: AWS IAM Employee Lifecycle Automation
  return (
    <div
      className="w-full rounded-xl border p-4 sm:p-6 overflow-x-auto"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
          Architecture Flow â€” Event-Driven Serverless Lifecycle
        </span>
        <span className="text-[11px] font-mono" style={{ color: 'var(--accent-cyan)' }}>
          S3 Ã¢â€ â€™ Lambda Ã¢â€ â€™ Identity Center & DynamoDB
        </span>
      </div>
      <svg
        viewBox="0 0 860 220"
        className="w-full min-w-[620px] h-auto"
        role="img"
        aria-label="AWS IAM Employee Lifecycle Automation architecture: HR CSV upload to Amazon S3 triggers AWS Lambda running Python and Boto3, which provisions users in AWS IAM Identity Center and records lifecycle audit state in Amazon DynamoDB."
      >
        <defs>
          <marker id="arrow-iam" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Node 1: HR CSV / Data Upload */}
        <rect x="16" y="75" width="150" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
        <text x="91" y="104" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          HR Data Upload
        </text>
        <text x="91" y="123" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
          CSV / Employee Feed
        </text>

        {/* Arrow 1 -> 2 */}
        <line x1="166" y1="110" x2="212" y2="110" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-iam)" />

        {/* Node 2: Amazon S3 */}
        <rect x="218" y="75" width="152" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
        <text x="294" y="104" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          Amazon S3
        </text>
        <text x="294" y="123" textAnchor="middle" fill="var(--accent-cyan)" fontSize="10" fontFamily="JetBrains Mono, monospace">
          Object Event Trigger
        </text>

        {/* Arrow 2 -> 3 */}
        <line x1="370" y1="110" x2="416" y2="110" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-iam)" />

        {/* Node 3: AWS Lambda */}
        <rect x="422" y="70" width="166" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.4" />
        <text x="505" y="102" textAnchor="middle" fill="var(--text-primary)" fontSize="12.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          AWS Lambda
        </text>
        <text x="505" y="121" textAnchor="middle" fill="var(--accent-cyan)" fontSize="10" fontFamily="JetBrains Mono, monospace">
          Python + Boto3
        </text>
        <text x="505" y="136" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          Lifecycle Orchestrator
        </text>

        {/* Branch arrows to Identity Center & DynamoDB */}
        <path d="M 588 110 C 620 110, 620 56, 650 56" fill="none" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-iam)" />
        <path d="M 588 110 C 620 110, 620 164, 650 164" fill="none" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-iam)" />

        {/* Node 4A: AWS IAM Identity Center */}
        <rect x="656" y="22" width="188" height="68" rx="8" fill="var(--bg-surface)" stroke="var(--accent-cyan)" strokeWidth="1.2" />
        <text x="750" y="51" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          IAM Identity Center
        </text>
        <text x="750" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
          Users, Groups & Access
        </text>

        {/* Node 4B: Amazon DynamoDB */}
        <rect x="656" y="130" width="188" height="68" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
        <text x="750" y="159" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          Amazon DynamoDB
        </text>
        <text x="750" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
          Lifecycle Audit State
        </text>
      </svg>
    </div>
  );
}

/**
 * ============================================================================
 * ESXi HOME LAB INFRASTRUCTURE ENVIRONMENT DIAGRAM
 * ============================================================================
 * Illustrates the Windows 11 Pro host running VMware Workstation (nested ESXi)
 * alongside WSL2 + Docker Desktop (Docker Compose observability stack).
 */
function EsxiEnvironmentDiagram() {
  return (
    <div
      className="w-full rounded-xl border p-4 sm:p-6 overflow-x-auto"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
          Home Lab Environment Topology
        </span>
        <span className="text-[11px] font-mono" style={{ color: 'var(--accent-cyan)' }}>
          Windows 11 Pro Ã¢â‚¬Â¢ VMware Workstation Ã¢â‚¬Â¢ WSL2 + Docker Desktop
        </span>
      </div>
      <svg
        viewBox="0 0 880 310"
        className="w-full min-w-[660px] h-auto"
        role="img"
        aria-label="Home lab infrastructure environment: Windows 11 Pro host running VMware Workstation with nested ESXi 7.0 Update 3 and guest VMs alongside WSL2 and Docker Desktop running Telegraf, InfluxDB 2.7, and Grafana 11 over a local virtual network."
      >
        <defs>
          <marker id="arrow-env" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent-cyan)" />
          </marker>
        </defs>

        {/* Outer Boundary: Windows 11 Pro Host */}
        <rect
          x="12"
          y="12"
          width="856"
          height="286"
          rx="14"
          fill="var(--bg-surface)"
          stroke="var(--border-strong)"
          strokeWidth="1.3"
        />
        <text x="32" y="38" fill="var(--text-primary)" fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          PHYSICAL WORKSTATION â€” WINDOWS 11 PRO (PERSONAL HOME LAB)
        </text>
        <text x="848" y="38" textAnchor="end" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
          LOCAL LAB VIRTUAL NETWORK
        </text>

        {/* Left Layer: VMware Workstation */}
        <rect
          x="32"
          y="56"
          width="368"
          height="220"
          rx="10"
          fill="var(--bg-primary)"
          stroke="var(--border-strong)"
          strokeWidth="1.2"
        />
        <text x="50" y="80" fill="var(--accent-cyan)" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          VMWARE WORKSTATION
        </text>

        {/* Nested ESXi Host */}
        <rect
          x="50"
          y="96"
          width="332"
          height="162"
          rx="8"
          fill="var(--bg-surface)"
          stroke="var(--accent)"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />
        <text x="68" y="120" fill="var(--text-primary)" fontSize="12.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          Nested VMware ESXi 7.0 Update 3
        </text>
        <text x="68" y="137" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          esxi-01.homelab.local Ã¢â‚¬Â¢ vSphere API Enabled
        </text>

        {/* Guest VMs inside ESXi */}
        <rect x="68" y="156" width="92" height="54" rx="6" fill="var(--bg-primary)" stroke="var(--border-subtle)" strokeWidth="1" />
        <text x="114" y="179" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          ubuntu-lab
        </text>
        <text x="114" y="196" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          Guest VM
        </text>

        <rect x="170" y="156" width="92" height="54" rx="6" fill="var(--bg-primary)" stroke="var(--border-subtle)" strokeWidth="1" />
        <text x="216" y="179" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          rhel-node
        </text>
        <text x="216" y="196" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          Guest VM
        </text>

        <rect x="272" y="156" width="92" height="54" rx="6" fill="var(--bg-primary)" stroke="var(--border-subtle)" strokeWidth="1" />
        <text x="318" y="179" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          docker-vm
        </text>
        <text x="318" y="196" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          Guest VM
        </text>

        <text x="216" y="240" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          Host &amp; VM Telemetry: CPU, Memory, Disk, Network
        </text>

        {/* Bridge Connector between VMware Workstation & WSL2/Docker */}
        <line
          x1="400"
          y1="166"
          x2="472"
          y2="166"
          stroke="var(--accent-cyan)"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          markerEnd="url(#arrow-env)"
          markerStart="url(#arrow-env)"
        />
        <text x="436" y="152" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          vSphere API
        </text>
        <text x="436" y="186" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
          Local Lab Net
        </text>

        {/* Right Layer: WSL2 + Docker Desktop */}
        <rect
          x="480"
          y="56"
          width="368"
          height="220"
          rx="10"
          fill="var(--bg-primary)"
          stroke="var(--border-strong)"
          strokeWidth="1.2"
        />
        <text x="498" y="80" fill="var(--accent-cyan)" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          WSL2 + DOCKER DESKTOP
        </text>

        {/* Docker Compose Stack Box */}
        <rect
          x="498"
          y="96"
          width="332"
          height="162"
          rx="8"
          fill="var(--bg-surface)"
          stroke="var(--accent-cyan)"
          strokeOpacity="0.5"
          strokeDasharray="5 4"
          strokeWidth="1.2"
        />
        <text x="516" y="120" fill="var(--text-primary)" fontSize="12.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
          Docker Compose Bridge Network
        </text>
        <text x="516" y="137" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          Portable container stack + provisioned volumes
        </text>

        {/* 3 Containers */}
        <rect x="516" y="156" width="94" height="54" rx="6" fill="var(--bg-primary)" stroke="var(--border-strong)" strokeWidth="1" />
        <text x="563" y="179" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          telegraf
        </text>
        <text x="563" y="196" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          collector
        </text>

        <rect x="618" y="156" width="96" height="54" rx="6" fill="var(--bg-primary)" stroke="var(--accent)" strokeWidth="1.1" />
        <text x="666" y="179" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          influxdb:2.7
        </text>
        <text x="666" y="196" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          tsdb store
        </text>

        <rect x="722" y="156" width="92" height="54" rx="6" fill="var(--bg-primary)" stroke="var(--accent-cyan)" strokeWidth="1.1" />
        <text x="768" y="179" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
          grafana:11
        </text>
        <text x="768" y="196" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9" fontFamily="JetBrains Mono, monospace">
          dashboard
        </text>

        <text x="664" y="240" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          Browser Dashboard Access Ã¢â€ â€™ localhost (Grafana UI)
        </text>
      </svg>
    </div>
  );
}

/**
 * ============================================================================
 * INTERACTIVE GRAFANA 11 DASHBOARD PREVIEW (PROJECT 03)
 * ============================================================================
 * Polished dark-mode Grafana 11 telemetry preview using clearly labeled,
 * sanitized home-lab sample data with time-range switching, live simulation
 * toggle, and interactive SVG hover crosshair.
 */
function GrafanaDashboardPreview({ reducedMotion }) {
  const [timeRange, setTimeRange] = useState('1h');
  const [isLive, setIsLive] = useState(!reducedMotion);
  const [tick, setTick] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);

  const baseSeriesByRange = useMemo(
    () => ({
      '15m': {
        labels: ['-15m', '-13m', '-11m', '-9m', '-7m', '-5m', '-3m', '-2m', '-1m', 'Now'],
        values: [24.2, 26.8, 29.4, 27.1, 31.5, 34.8, 30.2, 28.6, 32.1, 29.7],
        memoryPct: 62.4,
        diskMbps: 18.4,
        netMbps: 11.2,
      },
      '1h': {
        labels: ['-60m', '-54m', '-48m', '-42m', '-36m', '-30m', '-24m', '-18m', '-12m', '-6m', 'Now'],
        values: [19.5, 22.1, 28.4, 35.2, 31.8, 26.4, 38.6, 33.9, 29.2, 31.4, 28.8],
        memoryPct: 64.1,
        diskMbps: 22.6,
        netMbps: 14.8,
      },
      '6h': {
        labels: ['-6h', '-5h', '-4h', '-3h', '-2h', '-1h30m', '-1h', '-45m', '-30m', '-15m', 'Now'],
        values: [14.8, 18.2, 25.6, 41.3, 36.7, 29.1, 24.5, 33.4, 30.8, 27.9, 29.4],
        memoryPct: 61.8,
        diskMbps: 19.8,
        netMbps: 12.5,
      },
    }),
    []
  );

  // Subtle live tick animation when enabled
  useEffect(() => {
    if (!isLive || reducedMotion) return;
    const id = setInterval(() => {
      setTick((t) => (t + 1) % 1000);
    }, 2400);
    return () => clearInterval(id);
  }, [isLive, reducedMotion]);

  const activeData = baseSeriesByRange[timeRange];

  // Apply gentle realistic jitter when live mode is active
  const points = useMemo(() => {
    return activeData.values.map((v, i) => {
      const wave = isLive && !reducedMotion ? Math.sin(tick * 0.7 + i * 0.9) * 1.6 : 0;
      const clamped = Math.max(8, Math.min(88, Number((v + wave).toFixed(1))));
      return {
        label: activeData.labels[i],
        value: clamped,
      };
    });
  }, [activeData, tick, isLive, reducedMotion]);

  const currentCpu = points[points.length - 1].value;
  const maxCpu = Math.max(...points.map((p) => p.value)).toFixed(1);
  const avgCpu = (points.reduce((acc, p) => acc + p.value, 0) / points.length).toFixed(1);

  // SVG chart coordinates
  const chartW = 760;
  const chartH = 220;
  const padL = 42;
  const padR = 16;
  const padT = 18;
  const padB = 30;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;

  const coords = points.map((pt, i) => {
    const x = padL + (i / (points.length - 1)) * plotW;
    const y = padT + plotH - (pt.value / 100) * plotH;
    return { ...pt, x, y };
  });

  // Smooth cubic bezier path
  const linePath = coords.reduce((acc, pt, i, arr) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const cpX = (prev.x + pt.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${pt.y}, ${pt.x} ${pt.y}`;
  }, '');

  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${padT + plotH} L ${coords[0].x} ${padT + plotH} Z`;

  const sanitizedVms = [
    {
      name: 'ubuntu-lab-01',
      os: 'Ubuntu Server',
      state: 'Powered On',
      cpu: `${(11.4 + (isLive && !reducedMotion ? Math.sin(tick) * 1.1 : 0)).toFixed(1)}%`,
      mem: '2.4 / 4.0 GiB',
      net: '4.6 Mbps',
    },
    {
      name: 'rhel-node-01',
      os: 'Red Hat Enterprise Linux',
      state: 'Powered On',
      cpu: `${(9.8 + (isLive && !reducedMotion ? Math.cos(tick) * 0.9 : 0)).toFixed(1)}%`,
      mem: '1.9 / 4.0 GiB',
      net: '3.2 Mbps',
    },
    {
      name: 'docker-test-vm',
      os: 'Linux Container Host',
      state: 'Powered On',
      cpu: `${(7.6 + (isLive && !reducedMotion ? Math.sin(tick + 2) * 1.2 : 0)).toFixed(1)}%`,
      mem: '3.1 / 4.0 GiB',
      net: '5.1 Mbps',
    },
  ];

  const handleChartPointer = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const relX = ((clientX - rect.left) / rect.width) * chartW;
    let nearest = 0;
    let bestDist = Infinity;
    coords.forEach((c, idx) => {
      const d = Math.abs(c.x - relX);
      if (d < bestDist) {
        bestDist = d;
        nearest = idx;
      }
    });
    setHoverIdx(nearest);
  };

  return (
    <div
      className="rounded-xl border overflow-hidden shadow-lg"
      style={{
        backgroundColor: '#0D1017',
        borderColor: 'var(--border-strong)',
        color: '#E5E7EB',
      }}
    >
      {/* Top Grafana 11 Bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b text-xs font-mono"
        style={{
          backgroundColor: '#121620',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold"
            style={{ backgroundColor: 'rgba(59,130,246,0.16)', color: '#60A5FA' }}
          >
            GRAFANA 11
          </span>
          <span className="text-slate-300 font-medium">
            ESXi Host Overview <span className="text-slate-500">/</span>{' '}
            <span className="text-sky-400">esxi-01.homelab.local</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className="px-2 py-0.5 rounded border text-[10px]"
            style={{
              backgroundColor: 'rgba(56,189,248,0.08)',
              borderColor: 'rgba(56,189,248,0.28)',
              color: '#7DD3FC',
            }}
          >
            Home Lab Telemetry Preview â€” Sanitized Sample Data
          </span>

          {/* Time-range switcher */}
          <div
            className="inline-flex rounded-md border overflow-hidden"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            role="group"
            aria-label="Dashboard time range"
          >
            {['15m', '1h', '6h'].map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => setTimeRange(range)}
                className="px-2.5 py-1 text-[11px] transition-colors"
                style={{
                  backgroundColor: timeRange === range ? '#2563EB' : '#0D1017',
                  color: timeRange === range ? '#FFFFFF' : '#94A3B8',
                }}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Live simulation toggle */}
          <button
            type="button"
            disabled={reducedMotion}
            onClick={() => setIsLive((l) => !l)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] disabled:opacity-50"
            style={{
              backgroundColor: '#0D1017',
              borderColor: 'rgba(255,255,255,0.12)',
              color: isLive && !reducedMotion ? '#34D399' : '#94A3B8',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: isLive && !reducedMotion ? '#34D399' : '#64748B',
              }}
            />
            <span>{isLive && !reducedMotion ? 'Live' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Top KPI Stat Panels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Stat 1: Host Memory Utilization */}
          <div
            className="rounded-lg border p-3.5"
            style={{ backgroundColor: '#121620', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span>Host Memory</span>
              <HardDrive className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="font-display text-2xl font-semibold text-slate-100 mb-2">
              {activeData.memoryPct}%
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${activeData.memoryPct}%`, backgroundColor: '#38BDF8' }}
              />
            </div>
            <div className="mt-1.5 text-[10px] font-mono text-slate-500">vSphere host.mem.usage</div>
          </div>

          {/* Stat 2: Active Guest VMs */}
          <div
            className="rounded-lg border p-3.5"
            style={{ backgroundColor: '#121620', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span>Active Guest VMs</span>
              <Server className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="font-display text-2xl font-semibold text-slate-100 mb-1">3 / 3</div>
            <div className="text-[11px] font-mono text-emerald-400">All lab VMs powered on</div>
            <div className="mt-1 text-[10px] font-mono text-slate-500">ESXi 7.0 Update 3</div>
          </div>

          {/* Stat 3: vSphere API Scrape Status */}
          <div
            className="rounded-lg border p-3.5"
            style={{ backgroundColor: '#121620', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span>vSphere API Scrape</span>
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="inline-flex items-center gap-2 font-display text-xl font-semibold text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Healthy</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">Telegraf Ã¢â€ â€™ InfluxDB 2.7</div>
            <div className="mt-1 text-[10px] font-mono text-slate-500">Interval: 20s poll</div>
          </div>

          {/* Stat 4: Disk & Network I/O */}
          <div
            className="rounded-lg border p-3.5"
            style={{ backgroundColor: '#121620', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span>Disk &amp; Network I/O</span>
              <Network className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="font-mono text-sm text-slate-100 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Disk:</span>
                <span>{activeData.diskMbps} MB/s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Net:</span>
                <span>{activeData.netMbps} Mbps</span>
              </div>
            </div>
            <div className="mt-1.5 text-[10px] font-mono text-slate-500">Exposed via vSphere API</div>
          </div>
        </div>

        {/* Primary Time-Series Panel: ESXi Host CPU Utilization (%) */}
        <div
          className="rounded-lg border p-4"
          style={{ backgroundColor: '#121620', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-100">
                ESXi Host CPU Utilization (%)
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
              <span>
                curr: <strong className="text-sky-400">{currentCpu}%</strong>
              </span>
              <span>
                avg: <strong className="text-slate-200">{avgCpu}%</strong>
              </span>
              <span>
                max: <strong className="text-slate-200">{maxCpu}%</strong>
              </span>
            </div>
          </div>

          <div className="relative w-full">
            <svg
              viewBox={`0 0 ${chartW} ${chartH}`}
              className="w-full h-auto block cursor-crosshair select-none"
              onMouseMove={handleChartPointer}
              onTouchMove={handleChartPointer}
              onMouseLeave={() => setHoverIdx(null)}
              role="img"
              aria-label="Interactive ESXi Host CPU Utilization time-series chart"
            >
              <defs>
                <linearGradient id="esxiCpuFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              {[0, 25, 50, 75, 100].map((val) => {
                const y = padT + plotH - (val / 100) * plotH;
                return (
                  <g key={val}>
                    <line
                      x1={padL}
                      y1={y}
                      x2={chartW - padR}
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                    <text
                      x={padL - 8}
                      y={y + 3}
                      textAnchor="end"
                      fill="#64748B"
                      fontSize="10"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {val}%
                    </text>
                  </g>
                );
              })}

              {/* X-axis labels */}
              {coords.map((pt, idx) => (
                <text
                  key={idx}
                  x={pt.x}
                  y={chartH - 8}
                  textAnchor="middle"
                  fill="#64748B"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {pt.label}
                </text>
              ))}

              {/* Area + Line */}
              <path d={areaPath} fill="url(#esxiCpuFill)" />
              <path d={linePath} fill="none" stroke="#38BDF8" strokeWidth="2.2" />

              {/* Hover crosshair & tooltip */}
              {hoverIdx !== null && coords[hoverIdx] && (
                <g>
                  <line
                    x1={coords[hoverIdx].x}
                    y1={padT}
                    x2={coords[hoverIdx].x}
                    y2={padT + plotH}
                    stroke="rgba(56,189,248,0.5)"
                    strokeDasharray="3 3"
                    strokeWidth="1"
                  />
                  <circle
                    cx={coords[hoverIdx].x}
                    cy={coords[hoverIdx].y}
                    r="4.5"
                    fill="#0D1017"
                    stroke="#38BDF8"
                    strokeWidth="2"
                  />
                  <g
                    transform={`translate(${Math.min(
                      chartW - 154,
                      Math.max(padL + 6, coords[hoverIdx].x - 68)
                    )}, ${Math.max(padT + 4, coords[hoverIdx].y - 44)})`}
                  >
                    <rect
                      width="136"
                      height="34"
                      rx="6"
                      fill="#090B10"
                      stroke="rgba(56,189,248,0.45)"
                      strokeWidth="1"
                    />
                    <text
                      x="10"
                      y="15"
                      fill="#94A3B8"
                      fontSize="9.5"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      esxi-01 ({coords[hoverIdx].label})
                    </text>
                    <text
                      x="10"
                      y="28"
                      fill="#38BDF8"
                      fontSize="10.5"
                      fontWeight="600"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      CPU: {coords[hoverIdx].value}%
                    </text>
                  </g>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Compact Sanitized Guest VM Metrics Table */}
        <div
          className="rounded-lg border overflow-hidden"
          style={{ backgroundColor: '#121620', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div
            className="px-4 py-2.5 border-b flex items-center justify-between text-xs font-mono"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <span className="text-slate-200">Guest Virtual Machine Telemetry (vSphere API)</span>
            <span className="text-slate-500">Sanitized Hostnames</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr
                  className="border-b text-[11px] text-slate-400"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <th className="px-4 py-2.5 font-medium">VM Name</th>
                  <th className="px-4 py-2.5 font-medium">Guest OS</th>
                  <th className="px-4 py-2.5 font-medium">State</th>
                  <th className="px-4 py-2.5 font-medium">CPU</th>
                  <th className="px-4 py-2.5 font-medium">Memory</th>
                  <th className="px-4 py-2.5 font-medium">Net I/O</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sanitizedVms.map((vm) => (
                  <tr key={vm.name} className="hover:bg-white/[0.02]">
                    <td className="px-4 py-2.5 text-sky-400">{vm.name}</td>
                    <td className="px-4 py-2.5 text-slate-300">{vm.os}</td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center gap-1.5 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {vm.state}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-slate-200">{vm.cpu}</td>
                    <td className="px-4 py-2.5 text-slate-300">{vm.mem}</td>
                    <td className="px-4 py-2.5 text-slate-300">{vm.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * SANITIZED CONFIGURATION & DEPLOYMENT EXPLORER (PROJECT 03)
 * ============================================================================
 */
function EsxiConfigExplorer() {
  const [activeTab, setActiveTab] = useState('compose');

  const snippets = {
    compose: {
      label: 'docker-compose.yml',
      note: 'Orchestrates InfluxDB 2.7, Telegraf, and Grafana 11 on a dedicated bridge network with environment-driven configuration.',
      code: `services:
  influxdb:
    image: influxdb:2.7
    environment:
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_ORG=\${INFLUXDB_ORG}
      - DOCKER_INFLUXDB_INIT_BUCKET=\${INFLUXDB_BUCKET}
      - DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=\${INFLUXDB_TOKEN}
    volumes:
      - influxdb_data:/var/lib/influxdb2
    networks: [monitoring]

  telegraf:
    image: telegraf:latest
    depends_on: [influxdb]
    env_file: [.env]
    volumes:
      - ./telegraf/telegraf.conf:/etc/telegraf/telegraf.conf:ro
    networks: [monitoring]

  grafana:
    image: grafana/grafana:11.0.0
    depends_on: [influxdb]
    ports: ["3000:3000"]
    env_file: [.env]
    volumes:
      - ./grafana/provisioning:/etc/grafana/provisioning:ro
    networks: [monitoring]`,
    },
    telegraf: {
      label: 'telegraf.conf',
      note: 'Polls the ESXi vSphere API for host and VM metrics and writes structured series to InfluxDB 2.7.',
      code: `[agent]
  interval = "20s"
  flush_interval = "20s"

[[inputs.vsphere]]
  vcenters = ["\${ESXI_HOST_URL}"]
  username = "\${VSPHERE_USER}"
  password = "\${VSPHERE_PASSWORD}"
  insecure_skip_verify = true
  host_metric_include = ["cpu.usage.average", "mem.usage.average", "disk.usage.average", "net.usage.average"]
  vm_metric_include   = ["cpu.usage.average", "mem.usage.average"]

[[outputs.influxdb_v2]]
  urls         = ["http://influxdb:8086"]
  token        = "\${INFLUXDB_TOKEN}"
  organization = "\${INFLUXDB_ORG}"
  bucket       = "\${INFLUXDB_BUCKET}"`,
    },
    grafana: {
      label: 'datasource.yml',
      note: 'Automatically provisions the InfluxDB Flux data source in Grafana 11 on first boot.',
      code: `apiVersion: 1

datasources:
  - name: InfluxDB-ESXi
    type: influxdb
    access: proxy
    url: http://influxdb:8086
    isDefault: true
    jsonData:
      version: Flux
      organization: \${INFLUXDB_ORG}
      defaultBucket: \${INFLUXDB_BUCKET}
    secureJsonData:
      token: \${INFLUXDB_TOKEN}`,
    },
  };

  const current = snippets[activeTab];

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Tabs */}
      <div
        className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Sanitized configuration files">
          {Object.entries(snippets).map(([key, item]) => {
            const selected = key === activeTab;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(key)}
                className="px-3 py-1.5 rounded-md font-mono text-xs border transition-colors"
                style={{
                  backgroundColor: selected ? 'var(--accent)' : 'var(--bg-primary)',
                  borderColor: selected ? 'var(--accent)' : 'var(--border-subtle)',
                  color: selected ? '#FFFFFF' : 'var(--text-secondary)',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <span className="font-mono text-[11px]" style={{ color: 'var(--accent-cyan)' }}>
          Sanitized Template
        </span>
      </div>

      {/* Explanation + Code */}
      <div className="p-4 sm:p-5 space-y-4">
        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {current.note}
        </p>

        <pre
          className="rounded-lg border p-4 overflow-x-auto text-xs font-mono leading-relaxed"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-primary)',
          }}
        >
          <code>{current.code}</code>
        </pre>

        {/* Explicit Security Callout */}
        <div
          className="rounded-lg border p-3.5 flex items-start gap-2.5 text-xs leading-relaxed"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-strong)',
            color: 'var(--text-secondary)',
          }}
        >
          <Lock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent-cyan)' }} />
          <span>
            <strong style={{ color: 'var(--text-primary)' }}>Security &amp; Portability Note:</strong>{' '}
            Real ESXi credentials, IP addresses, API tokens, and private configuration files are intentionally excluded. All host endpoints and secrets are injected at runtime via a git-ignored{' '}
            <code className="font-mono" style={{ color: 'var(--accent-cyan)' }}>
              .env
            </code>{' '}
            file, making the stack safe to share and straightforward to reuse with another ESXi host.
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * CREATIVE CORNER â€” INTERACTIVE CANVAS LAB
 * ============================================================================
 * Config-driven interactive lab supporting 3 distinct generative experiments:
 * 1. Generative Mesh Network
 * 2. Harmonic Field
 * 3. Packet Pulse Topology
 */
function CreativeLabCanvas({ experimentId, paramValue, isPaused, resetNonce, theme, reducedMotion }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const pointerRef = useRef({ x: -999, y: -999, active: false });
  const pulsesRef = useRef([]);

  const effectivelyPaused = reducedMotion || isPaused;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = null;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const isDark = theme === 'dark';

    // --- Experiment 1 state: Mesh particles ---
    const particleCount = 46;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * (width || 600),
      y: Math.random() * (height || 360),
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: 1.8 + Math.random() * 1.4,
    }));

    // --- Experiment 3 state: Distributed Graph ---
    const graphNodes = [
      { rx: 0.14, ry: 0.28, label: 'EDGE-01' },
      { rx: 0.32, ry: 0.18, label: 'GW-WEST' },
      { rx: 0.52, ry: 0.25, label: 'CORE-A' },
      { rx: 0.74, ry: 0.2, label: 'GW-EAST' },
      { rx: 0.88, ry: 0.42, label: 'EDGE-02' },
      { rx: 0.22, ry: 0.64, label: 'NODE-01' },
      { rx: 0.45, ry: 0.56, label: 'ROUTER' },
      { rx: 0.66, ry: 0.58, label: 'CORE-B' },
      { rx: 0.36, ry: 0.84, label: 'STORE-A' },
      { rx: 0.62, ry: 0.84, label: 'STORE-B' },
      { rx: 0.82, ry: 0.76, label: 'EDGE-03' },
    ];
    const graphEdges = [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [0, 5], [1, 6], [2, 6], [2, 7],
      [3, 7], [4, 7], [5, 6], [6, 7],
      [5, 8], [6, 8], [6, 9], [7, 9],
      [7, 10], [9, 10], [4, 10],
    ];
    const adjacency = graphNodes.map(() => []);
    graphEdges.forEach(([u, v]) => {
      adjacency[u].push(v);
      adjacency[v].push(u);
    });
    const nodeFlash = graphNodes.map(() => 0);

    // Seed an initial gentle pulse for Experiment 3
    pulsesRef.current = [];
    if (experimentId === 'packet-pulse') {
      adjacency[6].forEach((neighbor) => {
        pulsesRef.current.push({ from: 6, to: neighbor, progress: 0, hopsLeft: 2 });
      });
      nodeFlash[6] = 1;
    }

    const triggerPulseAt = (clientX, clientY) => {
      if (experimentId !== 'packet-pulse') return;
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      let closestIdx = -1;
      let minDist = 48;
      graphNodes.forEach((n, idx) => {
        const dx = n.rx * width - x;
        const dy = n.ry * height - y;
        const d = Math.hypot(dx, dy);
        if (d < minDist) {
          minDist = d;
          closestIdx = idx;
        }
      });

      if (closestIdx !== -1) {
        nodeFlash[closestIdx] = 1;
        adjacency[closestIdx].forEach((neighbor) => {
          pulsesRef.current.push({
            from: closestIdx,
            to: neighbor,
            progress: 0,
            hopsLeft: 2,
          });
        });
      }
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      pointerRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const handleClick = (e) => {
      triggerPulseAt(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e);
        triggerPulseAt(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handlePointerMove, { passive: true });

    let phase = 0;

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      if (experimentId === 'mesh-network') {
        const radius = paramValue;
        const ptr = pointerRef.current;

        // Subtle grid
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.035)' : 'rgba(15,23,42,0.045)';
        for (let x = 32; x < width; x += 32) {
          for (let y = 32; y < height; y += 32) {
            ctx.fillRect(x, y, 1, 1);
          }
        }

        // Update particles
        particles.forEach((p) => {
          if (!effectivelyPaused) {
            if (ptr.active) {
              const dx = p.x - ptr.x;
              const dy = p.y - ptr.y;
              const dist = Math.hypot(dx, dy);
              if (dist < 110 && dist > 1) {
                const force = (110 - dist) / 110;
                p.vx += (dx / dist) * force * 0.045;
                p.vy += (dy / dist) * force * 0.045;
              }
            }
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.992;
            p.vy *= 0.992;

            // Keep gentle ambient velocity
            if (Math.abs(p.vx) < 0.15) p.vx += (Math.random() - 0.5) * 0.05;
            if (Math.abs(p.vy) < 0.15) p.vy += (Math.random() - 0.5) * 0.05;

            if (p.x < 8 || p.x > width - 8) p.vx *= -1;
            if (p.y < 8 || p.y > height - 8) p.vy *= -1;
            p.x = Math.max(8, Math.min(width - 8, p.x));
            p.y = Math.max(8, Math.min(height - 8, p.y));
          }
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < radius) {
              const alpha = (1 - dist / radius) * (isDark ? 0.35 : 0.28);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = isDark
                ? `rgba(56, 189, 248, ${alpha.toFixed(3)})`
                : `rgba(37, 99, 235, ${alpha.toFixed(3)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? '#E2E8F0' : '#1E293B';
          ctx.fill();
        });
      } else if (experimentId === 'harmonic-field') {
        if (!effectivelyPaused) {
          phase += 0.018;
        }
        const freq = paramValue * 0.0045;
        const rows = 14;
        const ptr = pointerRef.current;

        // Faint coordinate grid
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.04)';
        ctx.lineWidth = 1;
        for (let gx = 48; gx < width; gx += 48) {
          ctx.beginPath();
          ctx.moveTo(gx, 0);
          ctx.lineTo(gx, height);
          ctx.stroke();
        }

        for (let r = 0; r < rows; r++) {
          const baseY = ((r + 1) / (rows + 1)) * height;
          ctx.beginPath();
          for (let x = 0; x <= width; x += 8) {
            let ripple = 0;
            if (ptr.active) {
              const dist = Math.hypot(x - ptr.x, baseY - ptr.y);
              if (dist < 170) {
                ripple = Math.cos(dist * 0.045 - phase * 2) * (1 - dist / 170) * 18;
              }
            }
            const y =
              baseY +
              Math.sin(x * freq + phase + r * 0.42) * 11 +
              Math.cos(x * freq * 0.5 - phase * 0.6 + r * 0.2) * 5 +
              ripple;

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          const isAccentRow = r === Math.floor(rows / 2) || r === Math.floor(rows / 2) - 1;
          ctx.strokeStyle = isAccentRow
            ? isDark
              ? 'rgba(56, 189, 248, 0.72)'
              : 'rgba(2, 132, 199, 0.68)'
            : isDark
            ? `rgba(148, 163, 184, ${(0.12 + (r / rows) * 0.16).toFixed(2)})`
            : `rgba(51, 65, 85, ${(0.12 + (r / rows) * 0.18).toFixed(2)})`;
          ctx.lineWidth = isAccentRow ? 1.5 : 1;
          ctx.stroke();
        }
      } else if (experimentId === 'packet-pulse') {
        const velocity = paramValue * 0.008;

        // Draw edges
        graphEdges.forEach(([u, v]) => {
          const a = graphNodes[u];
          const b = graphNodes[v];
          ctx.beginPath();
          ctx.moveTo(a.rx * width, a.ry * height);
          ctx.lineTo(b.rx * width, b.ry * height);
          ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(15, 23, 42, 0.15)';
          ctx.lineWidth = 1.1;
          ctx.stroke();
        });

        // Update & draw pulses
        const nextPulses = [];
        pulsesRef.current.forEach((pulse) => {
          if (!effectivelyPaused) {
            pulse.progress += velocity;
          }
          const a = graphNodes[pulse.from];
          const b = graphNodes[pulse.to];
          const ax = a.rx * width;
          const ay = a.ry * height;
          const bx = b.rx * width;
          const by = b.ry * height;

          if (pulse.progress >= 1) {
            nodeFlash[pulse.to] = 1;
            if (pulse.hopsLeft > 0 && pulsesRef.current.length < 40) {
              adjacency[pulse.to].forEach((nextTarget) => {
                if (nextTarget !== pulse.from) {
                  nextPulses.push({
                    from: pulse.to,
                    to: nextTarget,
                    progress: 0,
                    hopsLeft: pulse.hopsLeft - 1,
                  });
                }
              });
            }
          } else {
            const px = ax + (bx - ax) * pulse.progress;
            const py = ay + (by - ay) * pulse.progress;

            // Highlight edge tail
            ctx.beginPath();
            ctx.moveTo(ax + (bx - ax) * Math.max(0, pulse.progress - 0.18), ay + (by - ay) * Math.max(0, pulse.progress - 0.18));
            ctx.lineTo(px, py);
            ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.8)' : 'rgba(37, 99, 235, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Packet dot
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? '#38BDF8' : '#2563EB';
            ctx.fill();

            nextPulses.push(pulse);
          }
        });
        pulsesRef.current = nextPulses;

        // Draw graph nodes
        graphNodes.forEach((n, idx) => {
          const x = n.rx * width;
          const y = n.ry * height;
          if (!effectivelyPaused && nodeFlash[idx] > 0) {
            nodeFlash[idx] = Math.max(0, nodeFlash[idx] - 0.025);
          }

          if (nodeFlash[idx] > 0.02) {
            ctx.beginPath();
            ctx.arc(x, y, 10 + (1 - nodeFlash[idx]) * 18, 0, Math.PI * 2);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${(nodeFlash[idx] * 0.55).toFixed(2)})`
              : `rgba(37, 99, 235, ${(nodeFlash[idx] * 0.5).toFixed(2)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? '#10141C' : '#FFFFFF';
          ctx.fill();
          ctx.strokeStyle =
            nodeFlash[idx] > 0.1
              ? isDark
                ? '#38BDF8'
                : '#2563EB'
              : isDark
              ? 'rgba(255,255,255,0.22)'
              : 'rgba(15,23,42,0.25)';
          ctx.lineWidth = 1.3;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? '#3B82F6' : '#2563EB';
          ctx.fill();

          ctx.font = '500 9.5px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillStyle = isDark ? '#9299A8' : '#475569';
          ctx.fillText(n.label, x, y + 21);
        });
      }

      if (!effectivelyPaused) {
        rafId = requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handlePointerMove);
    };
  }, [experimentId, paramValue, effectivelyPaused, resetNonce, theme]);

  return (
    <div ref={containerRef} className="w-full h-[320px] sm:h-[380px] relative cursor-crosshair select-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-label={`Interactive canvas for ${experimentId}`}
      />
    </div>
  );
}

/**
 * ============================================================================
 * PROJECT DETAIL VIEW
 * ============================================================================
 */
function ProjectDetailPage({ project, onBack, onNavigateProject }) {
  const currentIdx = siteConfig.projects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    siteConfig.projects[(currentIdx + 1) % siteConfig.projects.length];

  return (
    <main className="pt-28 pb-24 px-5 sm:px-8 max-w-4xl mx-auto">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-mono mb-8 transition-colors hover:opacity-100 opacity-80"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </button>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded border"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--accent-cyan)',
            }}
          >
            {project.index}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded border"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            {project.status}
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5"
          style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)' }}
        >
          {project.title}
        </h1>

        <p className="text-base sm:text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          {project.shortDescription}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#FFFFFF',
            }}
          >
            <Github className="w-4 h-4" />
            <span>{project.githubLabel || 'View GitHub Repository'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Architecture Diagram */}
      <section className="mb-12" aria-label="Architecture Diagram">
        <h2
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          Architecture Overview
        </h2>
        <ProjectArchitectureDiagram type={project.architectureType} />
      </section>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <h2
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-cyan)' }}
          >
            01 / Problem Statement
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.problem}
          </p>
        </div>

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <h2
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            02 / Solution Overview
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.solutionOverview}
          </p>
        </div>
      </div>

      {/* Technology Stack */}
      <section
        className="rounded-xl border p-6 mb-10"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <h2
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-md border text-xs font-mono"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Key Implementation Details */}
      <section
        className="rounded-xl border p-6 mb-10"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <h2
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          Key Implementation Details
        </h2>
        <ul className="space-y-3.5">
          {project.implementationDetails.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
              <span
                className="font-mono text-xs mt-1 shrink-0"
                style={{ color: 'var(--accent-cyan)' }}
              >
                0{idx + 1}.
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Project Outcome (when provided) */}
      {project.outcome && (
        <section
          className="rounded-xl border p-6 mb-12"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <h2
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-cyan)' }}
          >
            Project Outcome
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.outcome}
          </p>
        </section>
      )}

      {/* Next project switcher */}
      {nextProject && (
        <div
          className="pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <span className="text-xs font-mono block mb-1" style={{ color: 'var(--text-secondary)' }}>
              Explore Next Project
            </span>
            <span
              className="text-lg font-medium"
              style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)' }}
            >
              {nextProject.title}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onNavigateProject(nextProject.slug)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
          >
            <span>Open Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </main>
  );
}

/**
 * ============================================================================
 * 404 NOT FOUND VIEW
 * ============================================================================
 */
function NotFoundPage({ path, onGoHome }) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 pt-24 pb-16">
      <div
        className="max-w-lg w-full rounded-2xl border p-8 sm:p-10 text-center"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-6"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--accent-cyan)',
          }}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>HTTP 404 â€” ROUTE NOT FOUND</span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3"
          style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--text-primary)' }}
        >
          This endpoint doesn&apos;t exist.
        </h1>

        <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          The requested path{' '}
          <code
            className="font-mono text-xs px-1.5 py-0.5 rounded"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
          >
            #{path}
          </code>{' '}
          could not be resolved on {siteConfig.brand}.
        </p>

        <button
          type="button"
          onClick={onGoHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
          style={{
            backgroundColor: 'var(--accent)',
            color: '#FFFFFF',
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </button>
      </div>
    </main>
  );
}

/**
 * ============================================================================
 * MAIN PORTFOLIO APPLICATION (`App`)
 * ============================================================================
 */
export default function App() {
  const reducedMotion = usePrefersReducedMotion();

  // Theme state (Dark default, persisted in localStorage)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = window.localStorage.getItem('brijesh-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // Ignore storage errors in sandboxed iframes
    }
    return 'dark';
  });

  // Routing state synced with window.location.hash
  const [route, setRoute] = useState(() =>
    typeof window !== 'undefined' ? parseHashRoute(window.location.hash) : { view: 'home', section: null }
  );

  // Navigation & UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSkillTab, setActiveSkillTab] = useState('all');

  // Creative Corner state
  const [activeExpId, setActiveExpId] = useState(siteConfig.experiments[0].id);
  const activeExp = useMemo(
    () => siteConfig.experiments.find((e) => e.id === activeExpId) || siteConfig.experiments[0],
    [activeExpId]
  );
  const [expParam, setExpParam] = useState(activeExp.paramDefault);
  const [expPaused, setExpPaused] = useState(false);
  const [expResetNonce, setExpResetNonce] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'
  const [formFeedback, setFormFeedback] = useState('');

  // Load Google Fonts (Space Grotesk, Inter, JetBrains Mono) + SEO/OG metadata
  useEffect(() => {
    const fontId = 'brijesh-google-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap';
      document.head.appendChild(link);
    }

    const ensureMeta = (attr, key, content) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta(
      'name',
      'description',
      'Personal portfolio of Brijesh â€” Aspiring Cloud & Infrastructure professional focused on AWS, Linux, virtualization, observability, automation, and cloud security.'
    );
    ensureMeta('property', 'og:title', 'BRIJESH.Cloud â€” Cloud & Infrastructure Portfolio');
    ensureMeta(
      'property',
      'og:description',
      'Building with curiosity. Thinking beyond the ordinary. AWS, Linux, ESXi observability, Python/Boto3 automation, and cloud security projects.'
    );
    ensureMeta('property', 'og:type', 'website');
  }, []);

  // Update page title based on active route
  useEffect(() => {
    if (route.view === 'project') {
      const proj = siteConfig.projects.find((p) => p.slug === route.slug);
      document.title = proj ? `${proj.title} â€” ${siteConfig.brand}` : siteConfig.brand;
    } else if (route.view === 'not-found') {
      document.title = `404 Not Found â€” ${siteConfig.brand}`;
    } else {
      document.title = `${siteConfig.brand} â€” Cloud & Infrastructure Portfolio`;
    }
  }, [route]);

  // Persist theme
  useEffect(() => {
    try {
      window.localStorage.setItem('brijesh-theme', theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  // Listen for hash changes
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHashRoute(window.location.hash);
      setRoute(parsed);
      setMobileMenuOpen(false);
      if (parsed.view === 'project' || parsed.view === 'not-found') {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [reducedMotion]);

  // IntersectionObserver for active section indication on Home view
  useEffect(() => {
    if (route.view !== 'home') return;

    const sectionIds = siteConfig.navItems.map((item) => item.id);
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [route.view]);

  // Update experiment slider default when switching experiments
  const handleSelectExperiment = (exp) => {
    setActiveExpId(exp.id);
    setExpParam(exp.paramDefault);
    setExpPaused(false);
  };

  // Smooth navigation handler
  const navigateToSection = useCallback(
    (sectionId) => {
      setMobileMenuOpen(false);
      if (route.view !== 'home') {
        window.location.hash = `#${sectionId}`;
        setRoute({ view: 'home', section: sectionId });
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
          }
        }, 60);
      } else {
        setActiveSection(sectionId);
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
        }
      }
    },
    [route.view, reducedMotion]
  );

  const openProjectDetail = (slug) => {
    window.location.hash = `#/projects/${slug}`;
    setRoute({ view: 'project', slug });
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const goHome = () => {
    window.location.hash = '#/';
    setRoute({ view: 'home', section: null });
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  // Skill icon helper
  const renderSkillIcon = (iconName) => {
    const cls = 'w-4 h-4';
    switch (iconName) {
      case 'cloud':
        return <Cloud className={cls} />;
      case 'server':
        return <Server className={cls} />;
      case 'code':
        return <Code2 className={cls} />;
      case 'wrench':
      default:
        return <Wrench className={cls} />;
    }
  };

  // Filtered skills
  const visibleSkillGroups = useMemo(() => {
    if (activeSkillTab === 'all') return siteConfig.skills;
    return siteConfig.skills.filter((group) => group.id === activeSkillTab);
  }, [activeSkillTab]);

  // Contact form validation & submission
  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please add a short subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please write a message of at least 10 characters.';
    }
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    // Never pretend a submission succeeded if no backend endpoint is configured
    if (!siteConfig.contactFormEndpoint || siteConfig.contactFormEndpoint.trim() === '') {
      setFormStatus('unconfigured');
      setFormFeedback(
        'No form backend endpoint is configured in siteConfig.contactFormEndpoint yet. To avoid pretending your message was sent, please use the pre-filled email button below or connect a form service before deployment.'
      );
      return;
    }

    setFormStatus('submitting');
    setFormFeedback('');

    try {
      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormStatus('success');
      setFormFeedback('Your message has been sent. Thank you for reaching out!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFormStatus('error');
      setFormFeedback(
        'Unable to reach the configured contact endpoint right now. You can still reach out directly via email below.'
      );
    }
  };

  // Pre-filled mailto link for honest fallback
  const prefilledMailto = useMemo(() => {
    const subject = encodeURIComponent(formData.subject.trim() || `Hello from ${siteConfig.brand}`);
    const bodyText = `Hi Brijesh,\n\n${formData.message.trim()}\n\nâ€” ${formData.name.trim() || 'Visitor'}${
      formData.email.trim() ? ` (${formData.email.trim()})` : ''
    }`;
    return `mailto:${siteConfig.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  }, [formData]);

  const currentProject =
    route.view === 'project' ? siteConfig.projects.find((p) => p.slug === route.slug) : null;

  return (
    <div
      data-theme={theme}
      className="min-h-screen transition-colors duration-200 selection:bg-blue-500/20"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Design Tokens & Scoped Theme Variables */}
      <style>{`
        [data-theme="dark"] {
          --bg-primary: #090B10;
          --bg-surface: #10141C;
          --bg-surface-hover: #151B26;
          --text-primary: #F4F5F7;
          --text-secondary: #9299A8;
          --accent: #3B82F6;
          --accent-cyan: #38BDF8;
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-strong: rgba(255, 255, 255, 0.16);
          --nav-bg: rgba(9, 11, 16, 0.85);
        }

        [data-theme="light"] {
          --bg-primary: #F8FAFC;
          --bg-surface: #FFFFFF;
          --bg-surface-hover: #F1F5F9;
          --text-primary: #0F172A;
          --text-secondary: #475569;
          --accent: #2563EB;
          --accent-cyan: #0284C7;
          --border-subtle: rgba(15, 23, 42, 0.09);
          --border-strong: rgba(15, 23, 42, 0.18);
          --nav-bg: rgba(248, 250, 252, 0.88);
        }

        .font-mono {
          font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .font-display {
          font-family: "Space Grotesk", "Inter", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        .surface-card {
          background-color: var(--bg-surface);
          border-color: var(--border-subtle);
          transition: border-color 180ms ease, transform 180ms ease;
        }

        .surface-card:hover {
          border-color: var(--border-strong);
        }

        input:focus, textarea:focus, button:focus-visible, a:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
      `}</style>

      {/* ====================================================================
          STICKY MINIMALIST NAVIGATION BAR
          ==================================================================== */}
      <header
        className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md"
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
          aria-label="Primary Navigation"
        >
          {/* Left Brand */}
          <button
            type="button"
            onClick={() => navigateToSection('home')}
            className="flex items-center gap-2 text-left group"
            aria-label="Go to homepage"
          >
            <span
              className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span
              className="font-mono text-sm font-semibold tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              {siteConfig.brand}
            </span>
          </button>

          {/* Right Desktop Links + Theme Toggle */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive = route.view === 'home' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className="relative px-3.5 py-2 text-sm rounded-md transition-colors"
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[1.5px] rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                  )}
                </button>
              );
            })}

            <div className="w-px h-4 mx-2" style={{ backgroundColor: 'var(--border-subtle)' }} />

            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="p-2 rounded-lg border transition-colors"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="p-2.5 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2.5 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-b px-5 py-4 space-y-1"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            {siteConfig.navItems.map((item) => {
              const isActive = route.view === 'home' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between"
                  style={{
                    backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* ====================================================================
          ROUTE SWITCHER: PROJECT DETAIL / 404 / HOME
          ==================================================================== */}
      {route.view === 'project' && currentProject ? (
        <ProjectDetailPage
          project={currentProject}
          onBack={() => navigateToSection('projects')}
          onNavigateProject={openProjectDetail}
        />
      ) : route.view === 'not-found' ? (
        <NotFoundPage path={route.path} onGoHome={goHome} />
      ) : (
        <main>
          {/* ================================================================
              SECTION 1: HERO SECTION
              ================================================================ */}
          <section
            id="home"
            className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Copy Column */}
              <div className="lg:col-span-7">
                <p
                  className="font-mono text-xs sm:text-[13px] tracking-widest uppercase mb-5"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  {siteConfig.introLabel}
                </p>

                <h1
                  className="font-display text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.08] mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {siteConfig.headlineLines[0]}
                  <br />
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {siteConfig.headlineLines[1]}
                  </span>
                </h1>

                <p
                  className="text-base sm:text-lg leading-relaxed max-w-xl mb-7"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {siteConfig.heroDescription}
                </p>

                {/* Identity Pills */}
                <div className="flex flex-wrap gap-2 mb-9">
                  {siteConfig.identityLabels.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center px-3 py-1 rounded-md border text-xs font-mono"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => navigateToSection('projects')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#FFFFFF',
                    }}
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateToSection('contact')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span>Let&apos;s Connect</span>
                  </button>
                </div>
              </div>

              {/* Right Abstract Cloud Topology Visual */}
              <div className="lg:col-span-5">
                <HeroTopologyVisual theme={theme} reducedMotion={reducedMotion} />
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 2: ABOUT ME
              ================================================================ */}
          <section
            id="about"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-4">
                <span
                  className="font-mono text-xs uppercase tracking-widest block mb-3"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  01 / About
                </span>
                <h2
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {siteConfig.about.heading}
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-5">
                {siteConfig.about.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-[17px] leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {para}
                  </p>
                ))}

                {/* Personal Philosophy Callout */}
                <blockquote
                  className="mt-8 pl-5 py-3 border-l-2 rounded-r-lg"
                  style={{
                    borderColor: 'var(--accent)',
                    backgroundColor: 'var(--bg-surface)',
                  }}
                >
                  <span
                    className="block font-mono text-[11px] uppercase tracking-widest mb-1.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Personal Philosophy
                  </span>
                  <p
                    className="font-display text-lg sm:text-xl font-medium tracking-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    &ldquo;{siteConfig.about.philosophy}&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 3: TECHNICAL SKILLS
              ================================================================ */}
          <section
            id="skills"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <span
                    className="font-mono text-xs uppercase tracking-widest block mb-3"
                    style={{ color: 'var(--accent-cyan)' }}
                  >
                    02 / Technical Skills
                  </span>
                  <h2
                    className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Core stack &amp; foundations.
                  </h2>
                </div>

                {/* Interactive Category Filter Tabs */}
                <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Skill categories">
                  {[
                    { id: 'all', label: 'All' },
                    ...siteConfig.skills.map((s) => ({ id: s.id, label: s.category })),
                  ].map((tab) => {
                    const active = activeSkillTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveSkillTab(tab.id)}
                        className="px-3 py-1.5 rounded-md text-xs font-mono border transition-colors"
                        style={{
                          backgroundColor: active ? 'var(--accent)' : 'var(--bg-surface)',
                          borderColor: active ? 'var(--accent)' : 'var(--border-subtle)',
                          color: active ? '#FFFFFF' : 'var(--text-secondary)',
                        }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {visibleSkillGroups.map((group) => (
                  <div
                    key={group.id}
                    className="surface-card rounded-xl border p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="p-2 rounded-lg border"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--accent-cyan)',
                          }}
                        >
                          {renderSkillIcon(group.icon)}
                        </span>
                        <h3
                          className="font-mono text-xs font-semibold tracking-wider uppercase"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {group.label}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                        {group.items.length} items
                      </span>
                    </div>

                    <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
                      {group.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-md border text-xs sm:text-[13px]"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 4: FEATURED PROJECTS
              ================================================================ */}
          <section
            id="projects"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <span
                  className="font-mono text-xs uppercase tracking-widest block mb-3"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  03 / Featured Projects
                </span>
                <h2
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Practical cloud, security &amp; infrastructure builds.
                </h2>
                <p className="text-sm sm:text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                  Hands-on projects built to explore AWS security auditing, serverless IAM lifecycle automation, and containerized home-lab observability.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {siteConfig.projects.map((project) => (
                  <article
                    key={project.slug}
                    className="surface-card rounded-xl border p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span
                          className="font-mono text-xs px-2.5 py-1 rounded border"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--accent-cyan)',
                          }}
                        >
                          {project.index}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 font-mono text-[11px]"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                          {project.status}
                        </span>
                      </div>

                      <h3
                        className="font-display text-xl font-semibold tracking-tight mb-2.5"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>

                      {'category' in project &&
  typeof project.category === 'string' &&
  project.category && (
                        <p className="font-mono text-[11px] mb-3" style={{ color: 'var(--accent-cyan)' }}>
                          {project.category}
                        </p>
                      )}

                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                        {project.shortDescription}
                      </p>

                      {/* Mini architecture summary strip */}
                      <div
                        className="rounded-lg border px-3.5 py-2.5 mb-5 font-mono text-[11px] leading-relaxed"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)' }}>flow: </span>
                        {project.architectureType === 'security-auditor'
                          ? 'Auditor CLI Ã¢â€ â€™ Boto3 Ã¢â€ â€™ AWS APIs (IAM / S3 / EC2) Ã¢â€ â€™ Rule Evaluator Ã¢â€ â€™ Report'
                          : project.architectureType === 'esxi-monitoring'
                          ? 'VMware ESXi 7.0 U3 Ã¢â€ â€™ vSphere API Ã¢â€ â€™ Telegraf Ã¢â€ â€™ InfluxDB 2.7 Ã¢â€ â€™ Grafana 11'
                          : 'HR Data Ã¢â€ â€™ Amazon S3 Ã¢â€ â€™ AWS Lambda (Python/Boto3) Ã¢â€ â€™ IAM Identity Center + DynamoDB'}
                      </div>

                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-7">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded border text-[11px] font-mono"
                            style={{
                              backgroundColor: 'var(--bg-primary)',
                              borderColor: 'var(--border-subtle)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div
                      className="pt-5 border-t flex flex-wrap items-center justify-between gap-3"
                      style={{ borderColor: 'var(--border-subtle)' }}
                    >
                      <button
                        type="button"
                        onClick={() => openProjectDetail(project.slug)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
                        style={{ color: 'var(--accent)' }}
                      >
                        <span>View Architecture &amp; Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{project.githubLabel || 'GitHub'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 5: CREATIVE CORNER
              ================================================================ */}
          <section
            id="creative"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <span
                  className="font-mono text-xs uppercase tracking-widest block mb-3"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  04 / Creative Corner
                </span>
                <h2
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Technology is logical. Creativity is limitless.
                </h2>
                <p className="text-sm sm:text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                  An interactive sandbox for generative patterns, visual explorations, and small technical experiments. Modular by design so new studies can be added anytime.
                </p>
              </div>

              {/* Experiment Selector Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                {siteConfig.experiments.map((exp) => {
                  const selected = exp.id === activeExp.id;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => handleSelectExperiment(exp)}
                      className="text-left p-4 rounded-xl border transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: selected ? 'var(--accent)' : 'var(--border-subtle)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="font-mono text-[11px]"
                          style={{ color: selected ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}
                        >
                          {exp.code}
                        </span>
                        <span
                          className="font-mono text-[10px] uppercase tracking-wider"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {exp.category}
                        </span>
                      </div>
                      <div
                        className="font-display text-sm sm:text-base font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {exp.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Canvas Stage */}
              <div
                className="rounded-xl border overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                {/* Controls Header */}
                <div
                  className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 border-b"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--accent-cyan)' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{activeExp.title}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {/* Parameter Slider */}
                    <label className="flex items-center gap-2.5 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                      <Sliders className="w-3.5 h-3.5" />
                      <span>{activeExp.paramLabel}:</span>
                      <input
                        type="range"
                        min={activeExp.paramMin}
                        max={activeExp.paramMax}
                        step={activeExp.paramMax <= 10 ? 0.5 : 5}
                        value={expParam}
                        onChange={(e) => setExpParam(Number(e.target.value))}
                        className="w-24 accent-blue-500 cursor-pointer"
                        aria-label={activeExp.paramLabel}
                      />
                    </label>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setExpPaused((p) => !p)}
                        disabled={reducedMotion}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-mono disabled:opacity-50"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {expPaused || reducedMotion ? (
                          <>
                            <Play className="w-3 h-3" />
                            <span>Play</span>
                          </>
                        ) : (
                          <>
                            <Pause className="w-3 h-3" />
                            <span>Pause</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setExpParam(activeExp.paramDefault);
                          setExpResetNonce((n) => n + 1);
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-mono"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                        aria-label="Reset experiment"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Canvas */}
                <CreativeLabCanvas
                  experimentId={activeExp.id}
                  paramValue={expParam}
                  isPaused={expPaused}
                  resetNonce={expResetNonce}
                  theme={theme}
                        reducedMotion={reducedMotion} />

                {/* Experiment Footer Description */}
                <div
                  className="px-5 py-3.5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <p className="max-w-2xl">{activeExp.description}</p>
                  <span className="font-mono shrink-0" style={{ color: 'var(--accent-cyan)' }}>
                    {activeExp.hint}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 6: EDUCATION & CERTIFICATIONS
              ================================================================ */}
          <section
            id="credentials"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <span
                  className="font-mono text-xs uppercase tracking-widest block mb-3"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  05 / Education &amp; Certifications
                </span>
                <h2
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Academic foundation &amp; cloud credentials.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education Card */}
                {siteConfig.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="surface-card rounded-xl border p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-5">
                        <span
                          className="p-2 rounded-lg border"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--accent)',
                          }}
                        >
                          <GraduationCap className="w-4 h-4" />
                        </span>
                        <span
                          className="font-mono text-xs uppercase tracking-wider"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Education
                        </span>
                      </div>

                      <h3
                        className="font-display text-xl font-semibold tracking-tight mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {edu.degree}
                      </h3>

                      <p className="text-sm sm:text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
                        Specialization: <span style={{ color: 'var(--text-primary)' }}>{edu.specialization}</span>
                      </p>
                    </div>

                    <div
                      className="rounded-lg border px-4 py-3 flex items-center justify-between"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                      }}
                    >
                      <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                        {edu.highlightLabel}
                      </span>
                      <span
                        className="text-sm font-mono font-semibold"
                        style={{ color: 'var(--accent-cyan)' }}
                      >
                        {edu.highlightValue}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Certification Card */}
                {siteConfig.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="surface-card rounded-xl border p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-5">
                        <span
                          className="p-2 rounded-lg border"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--accent-cyan)',
                          }}
                        >
                          <Award className="w-4 h-4" />
                        </span>
                        <span
                          className="font-mono text-xs uppercase tracking-wider"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Certification
                        </span>
                      </div>

                      <h3
                        className="font-display text-xl font-semibold tracking-tight mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {cert.name}
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {cert.focus}
                      </p>
                    </div>

                    <div
                      className="rounded-lg border px-4 py-3 flex items-center justify-between"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                      }}
                    >
                      <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                        Provider
                      </span>
                      <span className="text-xs font-mono font-medium" style={{ color: 'var(--text-primary)' }}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 7: CURRENTLY EXPLORING (LEARNING ROADMAP)
              ================================================================ */}
          <section
            id="exploring"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <span
                    className="font-mono text-xs uppercase tracking-widest block mb-3"
                    style={{ color: 'var(--accent-cyan)' }}
                  >
                    06 / Currently Exploring
                  </span>
                  <h2
                    className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Active learning roadmap.
                  </h2>
                </div>
                <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                  Continuous growth â€” not a claim of mastery
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {siteConfig.currentlyExploring.map((item, idx) => (
                  <div
                    key={item.topic}
                    className="surface-card rounded-xl border p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                          0{idx + 1}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono border"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border-subtle)',
                            color: item.status === 'In Progress' ? 'var(--accent)' : 'var(--accent-cyan)',
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                item.status === 'In Progress' ? 'var(--accent)' : 'var(--accent-cyan)',
                            }}
                          />
                          {item.status}
                        </span>
                      </div>

                      <h3
                        className="font-display text-base font-medium mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.topic}
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              SECTION 8: CONTACT SECTION
              ================================================================ */}
          <section
            id="contact"
            className="py-20 sm:py-24 px-5 sm:px-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Contact Info & Quick Links */}
              <div className="lg:col-span-5">
                <span
                  className="font-mono text-xs uppercase tracking-widest block mb-3"
                  style={{ color: 'var(--accent-cyan)' }}
                >
                  07 / Contact
                </span>
                <h2
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Have an interesting idea? Let&apos;s connect.
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  I&apos;m open to opportunities, internships, collaborations and conversations around cloud computing, infrastructure, automation and technology.
                </p>

                {/* Quick Action Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="surface-card flex items-center justify-between px-4 py-3 rounded-xl border text-sm"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ color: 'var(--text-primary)' }}>Mail</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                  </a>

                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex items-center justify-between px-4 py-3 rounded-xl border text-sm"
                  >
                    <span className="flex items-center gap-3">
                      <Github className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ color: 'var(--text-primary)' }}>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                  </a>

                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex items-center justify-between px-4 py-3 rounded-xl border text-sm"
                  >
                    <span className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ color: 'var(--text-primary)' }}>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                  </a>
                </div>
              </div>

              {/* Right Contact Form */}
              <div className="lg:col-span-7">
                {false && (
<form
                  onSubmit={handleFormSubmit}
                  noValidate
                  className="rounded-xl border p-6 sm:p-8 space-y-5"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase tracking-wider mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: formErrors.name ? '#EF4444' : 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      />
                      {formErrors.name && (
                        <p className="mt-1.5 text-xs text-red-400">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: formErrors.email ? '#EF4444' : 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      />
                      {formErrors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                      }}
                      placeholder="Job, collaboration, or cloud discussion"
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: formErrors.subject ? '#EF4444' : 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                    {formErrors.subject && (
                      <p className="mt-1.5 text-xs text-red-400">{formErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      placeholder="Share a bit about your idea, role, or question..."
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm resize-y"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: formErrors.message ? '#EF4444' : 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                    {formErrors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Status Feedback Banner */}
                  {formStatus === 'success' && (
                    <div
                      className="rounded-lg border p-4 text-xs sm:text-sm flex items-start gap-2.5"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'rgba(34, 197, 94, 0.35)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{formFeedback}</span>
                    </div>
                  )}

                  {(formStatus === 'unconfigured' || formStatus === 'error') && (
                    <div
                      className="rounded-lg border p-4 text-xs sm:text-sm space-y-3"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-strong)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: formStatus === 'error' ? '#EF4444' : 'var(--accent-cyan)' }}
                        />
                        <span>{formFeedback}</span>
                      </div>
                      <a
                        href={prefilledMailto}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: 'var(--accent)',
                          color: '#FFFFFF',
                        }}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email Client</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: '#FFFFFF',
                      }}
                    >
                      <Send className="w-4 h-4" />
                      <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    <span className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {siteConfig.contactFormEndpoint
                        ? 'Connected to form endpoint'
                        : 'Direct email fallback ready'}
                    </span>
                  </div>
                </form>
)}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ====================================================================
          MINIMAL FOOTER
          ==================================================================== */}
      <footer
        className="border-t py-10 px-5 sm:px-8"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-sm font-semibold tracking-wider mb-1" style={{ color: 'var(--text-primary)' }}>
              {siteConfig.brand}
            </div>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-colors"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-colors"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 rounded-lg border transition-colors"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="text-xs font-mono pl-2" style={{ color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()} {siteConfig.name}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

