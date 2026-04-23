/**
 * Navegação da documentação: módulos na lateral, rotinas expansíveis, hash na URL.
 * Para incluir um novo módulo, adicione um objeto em MODULES.
 */
(function () {
  "use strict";

  /**
   * @type {Array<{ id: string, name: string, tagline: string, introHtml: string, path: string, routines: Array<{ id: string, label: string, file: string, code?: string }> }>}
   * Opcional em cada rotina: `code` — texto curto na lateral; se omitido, usa HUB / DADOS / id da rotina.
   */
  const MODULES = [
    {
      id: "pdv",
      name: "PDV",
      tagline: "Ponto de venda — caixas, sessões, vendas e pagamentos.",
      path: "pdv/",
      introHtml: `
        <p>O módulo <strong>PDV</strong> concentra a operação de balcão e o cadastro de caixas do SIN ERP. Ele grava movimentos nas tabelas <code>p01</code> a <code>p06</code>, integra com clientes (<code>c01</code>), produtos (<code>e01</code>) e, quando configurado, com o estoque (TES de venda).</p>
        <p><strong>Principais capacidades:</strong></p>
        <ul>
          <li><strong>Operação (pdv0001):</strong> abertura e fechamento de sessão, vendas com múltiplas formas de pagamento, sangria e resumos.</li>
          <li><strong>Cadastro (pdv0002):</strong> manutenção de caixas e consulta ao histórico de sessões.</li>
          <li><strong>Referência:</strong> dicionário de colunas, tipos de pagamento e dependências de banco.</li>
        </ul>
      `,
      routines: [
        { id: "hub", label: "Visão geral do módulo", file: "pdv.html" },
        { id: "pdv0001", label: "Operação do caixa", file: "pdv0001.html" },
        { id: "pdv0002", label: "Cadastro de caixas", file: "pdv0002.html" },
        { id: "dados", label: "Tabelas, colunas e dados", file: "pdv-dados.html" },
      ],
    },
    {
      id: "conf",
      name: "CONF",
      tagline: "Usuários, grupos e permissões de acesso ao sistema.",
      path: "conf/",
      introHtml: `
        <p>O módulo <strong>CONF</strong> (configuração) administra <strong>usuários</strong> (<code>usrsys</code>), <strong>grupos</strong> e a matriz de permissões por tela (<code>module_key</code> alinhada ao menu do front).</p>
        <p><strong>Principais capacidades:</strong></p>
        <ul>
          <li><strong>conf0001 — Usuários:</strong> criar, listar e atualizar contas (senha com hash).</li>
          <li><strong>conf0002 — Grupos:</strong> CRUD de grupos, permissões CRUD por módulo, vínculo usuário–grupo, endpoint <code>/me/permissions</code>.</li>
          <li><strong>Referência:</strong> dicionário das tabelas <code>usr_*</code> e regras de <code>require_permission</code>.</li>
        </ul>
      `,
      routines: [
        { id: "hub", label: "Visão geral do módulo", file: "conf.html" },
        { id: "conf0001", label: "Usuários", file: "conf0001.html" },
        { id: "conf0002", label: "Grupos e permissões", file: "conf0002.html" },
        { id: "dados", label: "Tabelas e colunas", file: "conf-dados.html" },
      ],
    },
    {
      id: "fina",
      name: "FINA",
      tagline: "Financeiro — cadastros, caixa e contas a pagar.",
      path: "fina/",
      introHtml: `
        <p>O módulo <strong>FINA</strong> cobre contas (<code>f01</code>), bancos (<code>f02</code>), categorias (<code>f03</code>), lançamentos de caixa (<code>f04</code>) e agenda de contas a pagar/receber (<code>f05</code>).</p>
        <ul>
          <li><strong>fina0001:</strong> cadastros auxiliares.</li>
          <li><strong>fina0002:</strong> transações e saldo por conta.</li>
          <li><strong>fina0003:</strong> CRUD de títulos na agenda.</li>
        </ul>
      `,
      routines: [
        { id: "hub", label: "Visão geral do módulo", file: "fina.html" },
        { id: "fina0001", label: "Cadastros (contas, bancos, categorias)", file: "fina0001.html" },
        { id: "fina0002", label: "Caixa e saldo", file: "fina0002.html" },
        { id: "fina0003", label: "Contas a pagar", file: "fina0003.html" },
        { id: "dados", label: "Tabelas f01–f05", file: "fina-dados.html" },
      ],
    },
    {
      id: "esto",
      name: "ESTO",
      tagline: "Estoque — produtos, saldo, movimentação e TES.",
      path: "esto/",
      introHtml: `
        <p>O módulo <strong>ESTO</strong> trata de categorias (<code>e02</code>), produtos (<code>e01</code>), posição (<code>e04</code>), movimentos (<code>e05</code>) e tipos de estoque (<code>e06</code>).</p>
        <ul>
          <li><strong>esto0001:</strong> CRUD categoria/produto, saldo, ajustes e listagem de movimentos nesta API.</li>
          <li><strong>esto0002:</strong> movimentação com usuário, filtros e inventário.</li>
          <li><strong>esto0003:</strong> cadastro de TES (inclui regra usada em vendas PDV).</li>
        </ul>
      `,
      routines: [
        { id: "hub", label: "Visão geral do módulo", file: "esto.html" },
        { id: "esto0001", label: "Categorias, produtos e saldo", file: "esto0001.html" },
        { id: "esto0002", label: "Movimentação (TES)", file: "esto0002.html" },
        { id: "esto0003", label: "Cadastro de TES", file: "esto0003.html" },
        { id: "dados", label: "Tabelas e fluxo", file: "esto-dados.html" },
      ],
    },
    {
      id: "come",
      name: "COME",
      tagline: "Comercial — cadastro de clientes (c01).",
      path: "come/",
      introHtml: `
        <p>O módulo <strong>COME</strong> centraliza o cadastro de <strong>clientes</strong> para uso no PDV (fiado), fiscal e relatórios.</p>
        <ul>
          <li><strong>come0001:</strong> API de clientes com busca, próximo código e CRUD.</li>
        </ul>
      `,
      routines: [
        { id: "hub", label: "Visão geral do módulo", file: "come.html" },
        { id: "come0001", label: "Clientes", file: "come0001.html" },
        { id: "dados", label: "Tabela c01", file: "come-dados.html" },
      ],
    },
    {
      id: "comp",
      name: "COMP",
      tagline: "Compras — fornecedores, pedidos e recebimento.",
      path: "comp/",
      introHtml: `
        <p>O módulo <strong>COMP</strong> cobre fornecedores (<code>c11</code>), pedidos de compra (<code>c12</code>) e recebimento de mercadoria (<code>comp0003</code>).</p>
        <ul>
          <li><strong>comp0001:</strong> fornecedores em <code>/comp/suppliers</code>.</li>
          <li><strong>comp0002:</strong> pedidos e itens.</li>
          <li><strong>comp0003:</strong> API de recebimento (tela no front pode ser adicionada ao menu).</li>
        </ul>
      `,
      routines: [
        { id: "hub", label: "Visão geral do módulo", file: "comp.html" },
        { id: "comp0001", label: "Fornecedores", file: "comp0001.html" },
        { id: "comp0002", label: "Pedidos de compra", file: "comp0002.html" },
        { id: "comp0003", label: "Recebimento", file: "comp0003.html" },
        { id: "dados", label: "Tabelas compras", file: "comp-dados.html" },
      ],
    },
  ];

  const els = {
    sidebarNav: document.getElementById("sidebar-nav"),
    backdrop: document.getElementById("docs-backdrop"),
    menuBtn: document.getElementById("menu-btn"),
    toolbarTitle: document.getElementById("toolbar-title"),
    viewHome: document.getElementById("view-home"),
    viewModule: document.getElementById("view-module"),
    viewDoc: document.getElementById("view-doc"),
    docFrame: document.getElementById("doc-frame"),
    moduleIntroTitle: document.getElementById("module-intro-title"),
    moduleIntroTagline: document.getElementById("module-intro-tagline"),
    moduleIntroBody: document.getElementById("module-intro-body"),
    moduleCards: document.getElementById("module-cards"),
  };

  let state = {
    moduleId: null,
    routineId: null,
  };

  function findModule(id) {
    return MODULES.find((m) => m.id === id) || null;
  }

  function findRoutine(mod, routineId) {
    if (!mod) return null;
    return mod.routines.find((r) => r.id === routineId) || null;
  }

  function setSidebarOpen(open) {
    document.body.classList.toggle("sidebar-open", open);
  }

  function parseHash() {
    const raw = (location.hash || "").replace(/^#/, "").trim();
    if (!raw) return { moduleId: null, routineId: null };
    const parts = raw.split("/").filter(Boolean);
    if (parts.length === 0) return { moduleId: null, routineId: null };
    const moduleId = parts[0];
    const routineId = parts[1] || null;
    return { moduleId, routineId };
  }

  function setHash(moduleId, routineId) {
    if (!moduleId) {
      history.replaceState(null, "", location.pathname + location.search);
      return;
    }
    const h = routineId ? `#${moduleId}/${routineId}` : `#${moduleId}`;
    if (location.hash !== h) {
      location.hash = h;
    }
  }

  /** Abre só o módulo indicado na lateral; null recolhe todos. */
  function expandSidebarForModule(moduleId) {
    if (!els.sidebarNav) return;
    if (!moduleId) {
      els.sidebarNav.querySelectorAll(".docs-mod").forEach((el) => el.classList.remove("is-open"));
      els.sidebarNav.querySelectorAll(".docs-mod__head").forEach((b) => b.setAttribute("aria-expanded", "false"));
      return;
    }
    MODULES.forEach((m) => {
      const el = els.sidebarNav.querySelector(`[data-module="${m.id}"]`);
      const b = el?.querySelector("[data-module-toggle]");
      const open = m.id === moduleId;
      el?.classList.toggle("is-open", open);
      b?.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderModuleCards() {
    if (!els.moduleCards) return;
    els.moduleCards.innerHTML = MODULES.map(
      (m) => `
      <a class="hub-card" href="#${m.id}" data-module-card="${m.id}">
        <h2>${escapeHtml(m.name)}</h2>
        <p>${escapeHtml(m.tagline)}</p>
        <p class="hub-cta">Abrir módulo →</p>
      </a>
    `
    ).join("");
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  /** Código exibido antes do nome da rotina na lateral. */
  function routineDisplayCode(r) {
    if (r.code) return String(r.code).toUpperCase();
    if (r.id === "hub") return "HUB";
    if (r.id === "dados") return "DADOS";
    return r.id;
  }

  function routineSearchBlob(m, r) {
    const code = routineDisplayCode(r);
    return `${m.id} ${m.name} ${code} ${r.id} ${r.label} ${r.file || ""}`.toLowerCase();
  }

  function applySidebarFilter() {
    const input = document.getElementById("sidebar-search");
    const q = (input?.value || "").trim().toLowerCase();
    if (!els.sidebarNav) return;

    if (!q) {
      els.sidebarNav.querySelectorAll(".docs-mod__list li").forEach((li) => {
        li.style.display = "";
      });
      els.sidebarNav.querySelectorAll(".docs-mod").forEach((modEl) => {
        modEl.style.display = "";
      });
      expandSidebarForModule(state.moduleId);
      return;
    }

    els.sidebarNav.querySelectorAll(".docs-mod").forEach((modEl) => {
      const modId = modEl.getAttribute("data-module") || "";
      const mod = findModule(modId);
      const modName = (mod?.name || "").toLowerCase();
      const mid = modId.toLowerCase();
      let anyLi = false;

      modEl.querySelectorAll(".docs-mod__list li").forEach((li) => {
        const a = li.querySelector("a");
        const hay = (a?.getAttribute("data-search") || "").toLowerCase();
        const match = hay.includes(q) || modName.includes(q) || mid.includes(q);
        li.style.display = match ? "" : "none";
        if (match) anyLi = true;
      });

      modEl.style.display = anyLi ? "" : "none";
      if (anyLi) {
        modEl.classList.add("is-open");
        modEl.querySelector(".docs-mod__head")?.setAttribute("aria-expanded", "true");
      } else {
        modEl.classList.remove("is-open");
        modEl.querySelector(".docs-mod__head")?.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderSidebar() {
    if (!els.sidebarNav) return;
    els.sidebarNav.innerHTML = MODULES.map(
      (m) => `
      <div class="docs-mod" data-module="${m.id}">
        <button type="button" class="docs-mod__head" data-module-toggle="${m.id}" aria-expanded="false">
          <span>${escapeHtml(m.name)}</span>
          <span class="docs-mod__chev" aria-hidden="true">▶</span>
        </button>
        <ul class="docs-mod__list" role="list">
          ${m.routines
            .map((r) => {
              const code = routineDisplayCode(r);
              const blob = routineSearchBlob(m, r);
              return `
            <li>
              <a href="#${m.id}/${r.id}" data-routine="${m.id}/${r.id}" data-search="${escapeAttr(blob)}">
                <span class="docs-routine-line">
                  <span class="docs-routine-code">${escapeHtml(code)}</span>
                  <span class="docs-routine-sep" aria-hidden="true">·</span>
                  <span class="docs-routine-label">${escapeHtml(r.label)}</span>
                </span>
              </a>
            </li>
          `;
            })
            .join("")}
        </ul>
      </div>
    `
    ).join("");

    els.sidebarNav.querySelectorAll("[data-module-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-module-toggle");
        const searchInput = document.getElementById("sidebar-search");
        if (searchInput?.value.trim()) searchInput.value = "";
        expandSidebarForModule(id);
        state.moduleId = id;
        state.routineId = null;
        setHash(id, null);
        applyState();
        setSidebarOpen(false);
      });
    });

    els.sidebarNav.querySelectorAll("[data-routine]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const key = a.getAttribute("data-routine");
        const [mid, rid] = key.split("/");
        state.moduleId = mid;
        state.routineId = rid;
        setHash(mid, rid);
        applyState();
        setSidebarOpen(false);
      });
    });

    els.moduleCards?.querySelectorAll("[data-module-card]").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-module-card");
        const searchInput = document.getElementById("sidebar-search");
        if (searchInput?.value.trim()) searchInput.value = "";
        state.moduleId = id;
        state.routineId = null;
        expandSidebarForModule(id);
        setHash(id, null);
        applyState();
      });
    });
  }

  function updateSidebarHighlight() {
    document.querySelectorAll(".docs-mod__head").forEach((h) => h.classList.remove("is-active"));
    document.querySelectorAll(".docs-mod__list a").forEach((a) => a.classList.remove("is-current"));

    if (state.moduleId) {
      const head = document.querySelector(`[data-module-toggle="${state.moduleId}"]`);
      head?.classList.add("is-active");
    }
    if (state.moduleId && state.routineId) {
      const link = document.querySelector(`[data-routine="${state.moduleId}/${state.routineId}"]`);
      link?.classList.add("is-current");
    }
  }

  function applyState() {
    const mod = findModule(state.moduleId);
    let routine = state.routineId ? findRoutine(mod, state.routineId) : null;
    if (state.routineId && mod && !routine) {
      state.routineId = null;
      history.replaceState(null, "", `${location.pathname}${location.search}#${state.moduleId}`);
    }

    updateSidebarHighlight();

    if (!state.moduleId) {
      els.viewHome?.classList.remove("docs-hidden");
      els.viewModule?.classList.add("docs-hidden");
      els.viewDoc?.classList.add("docs-hidden");
      if (els.toolbarTitle) els.toolbarTitle.textContent = "Documentação SIN ERP";
      document.title = "Documentação — SIN ERP";
      return;
    }

    els.viewHome?.classList.add("docs-hidden");

    if (!routine) {
      els.viewModule?.classList.remove("docs-hidden");
      els.viewDoc?.classList.add("docs-hidden");
      if (mod) {
        if (els.moduleIntroTitle) els.moduleIntroTitle.textContent = mod.name;
        if (els.moduleIntroTagline) els.moduleIntroTagline.textContent = mod.tagline;
        if (els.moduleIntroBody) els.moduleIntroBody.innerHTML = mod.introHtml;
        if (els.toolbarTitle) els.toolbarTitle.textContent = mod.name;
        document.title = `${mod.name} — Documentação SIN ERP`;
      }
      return;
    }

    els.viewModule?.classList.add("docs-hidden");
    els.viewDoc?.classList.remove("docs-hidden");

    const src = `${mod.path}${routine.file}`;
    if (els.docFrame && els.docFrame.getAttribute("src") !== src) {
      els.docFrame.setAttribute("src", src);
    }
    const rCode = routineDisplayCode(routine);
    if (els.toolbarTitle) els.toolbarTitle.textContent = `${mod.name} · ${rCode} · ${routine.label}`;
    document.title = `${rCode} · ${routine.label} — ${mod.name} — SIN ERP`;
  }

  function sidebarSyncExpansion() {
    const q = document.getElementById("sidebar-search")?.value?.trim();
    if (q) {
      applySidebarFilter();
    } else {
      expandSidebarForModule(state.moduleId);
    }
  }

  function syncFromHash() {
    let { moduleId, routineId } = parseHash();
    if (moduleId && !findModule(moduleId)) {
      moduleId = null;
      routineId = null;
      history.replaceState(null, "", location.pathname + location.search);
    }
    state.moduleId = moduleId;
    state.routineId = routineId;
    sidebarSyncExpansion();
    applyState();
  }

  function init() {
    renderModuleCards();
    renderSidebar();

    els.menuBtn?.addEventListener("click", () => {
      setSidebarOpen(!document.body.classList.contains("sidebar-open"));
    });
    els.backdrop?.addEventListener("click", () => setSidebarOpen(false));

    window.addEventListener("hashchange", () => {
      const { moduleId, routineId } = parseHash();
      state.moduleId = moduleId;
      state.routineId = routineId;
      sidebarSyncExpansion();
      applyState();
    });

    document.querySelector(".docs-sidebar__brand a")?.addEventListener("click", (e) => {
      e.preventDefault();
      state.moduleId = null;
      state.routineId = null;
      history.replaceState(null, "", location.pathname + location.search);
      const searchInput = document.getElementById("sidebar-search");
      if (searchInput) searchInput.value = "";
      expandSidebarForModule(null);
      applySidebarFilter();
      applyState();
      setSidebarOpen(false);
    });

    document.getElementById("sidebar-search")?.addEventListener("input", () => {
      applySidebarFilter();
    });

    syncFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
