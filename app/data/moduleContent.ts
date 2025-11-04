export const moduleContent = {
  'html-basics': {
    zh: {
      title: 'HTML 语义化基础',
      theory: `# HTML 语义化基础

## 什么是语义化 HTML？

语义化 HTML 是指使用正确的 HTML 元素来传达内容的**意义**，而不仅仅是外观。

### 为什么重要？

- **可访问性**：屏幕阅读器依赖语义化元素来理解页面结构
- **SEO**：搜索引擎更好地理解您的内容
- **维护性**：代码更易读、易维护

## 常用语义化元素

### 1. 标题元素 (h1-h6)

\`\`\`html
<h1>页面主标题</h1>
<h2>章节标题</h2>
<h3>子章节标题</h3>
\`\`\`

**规则**：
- 每页只有一个 \`<h1>\`
- 标题层级不能跳级（h1 → h2 → h3）

### 2. 段落和文本

\`\`\`html
<p>这是一个段落。</p>
<strong>重要内容</strong>
<em>强调内容</em>
\`\`\`

### 3. 列表

\`\`\`html
<!-- 无序列表 -->
<ul>
  <li>项目 1</li>
  <li>项目 2</li>
</ul>

<!-- 有序列表 -->
<ol>
  <li>步骤 1</li>
  <li>步骤 2</li>
</ol>
\`\`\`

## 反例：非语义化 HTML

❌ **错误示例**：
\`\`\`html
<div class="heading">页面标题</div>
<div class="paragraph">这是内容</div>
\`\`\`

✅ **正确示例**：
\`\`\`html
<h1>页面标题</h1>
<p>这是内容</p>
\`\`\`

## 实践挑战

现在轮到您了！请完成下面的挑战来巩固所学知识。`,
      challengeTitle: '创建一个语义化的博客文章',
      challengeInstructions: '请使用正确的语义化 HTML 元素来构建一篇博客文章，包括：\n1. 一个主标题（h1）\n2. 两个章节，每个章节有副标题（h2）和段落（p）\n3. 一个无序列表，列出至少 3 个要点',
    },
    fr: {
      title: 'Bases du HTML sémantique',
      theory: `# Bases du HTML sémantique

## Qu'est-ce que le HTML sémantique ?

Le HTML sémantique signifie utiliser les bons éléments HTML pour transmettre le **sens** du contenu, pas seulement son apparence.

### Pourquoi est-ce important ?

- **Accessibilité** : Les lecteurs d'écran s'appuient sur des éléments sémantiques pour comprendre la structure de la page
- **SEO** : Les moteurs de recherche comprennent mieux votre contenu
- **Maintenabilité** : Le code est plus lisible et facile à maintenir

## Éléments sémantiques courants

### 1. Éléments de titre (h1-h6)

\`\`\`html
<h1>Titre principal de la page</h1>
<h2>Titre de section</h2>
<h3>Titre de sous-section</h3>
\`\`\`

**Règles** :
- Une seule balise \`<h1>\` par page
- Ne pas sauter les niveaux de titre (h1 → h2 → h3)

### 2. Paragraphes et texte

\`\`\`html
<p>Ceci est un paragraphe.</p>
<strong>Contenu important</strong>
<em>Contenu accentué</em>
\`\`\`

### 3. Listes

\`\`\`html
<!-- Liste non ordonnée -->
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>

<!-- Liste ordonnée -->
<ol>
  <li>Étape 1</li>
  <li>Étape 2</li>
</ol>
\`\`\`

## Anti-exemple : HTML non sémantique

❌ **Mauvais exemple** :
\`\`\`html
<div class="heading">Titre de la page</div>
<div class="paragraph">Ceci est le contenu</div>
\`\`\`

✅ **Bon exemple** :
\`\`\`html
<h1>Titre de la page</h1>
<p>Ceci est le contenu</p>
\`\`\`

## Défi pratique

À vous de jouer ! Complétez le défi ci-dessous pour consolider vos connaissances.`,
      challengeTitle: 'Créer un article de blog sémantique',
      challengeInstructions: 'Utilisez les bons éléments HTML sémantiques pour créer un article de blog comprenant :\n1. Un titre principal (h1)\n2. Deux sections, chacune avec un sous-titre (h2) et un paragraphe (p)\n3. Une liste non ordonnée avec au moins 3 points',
    },
  },
  'keyboard-tab': {
    zh: {
      title: '键盘导航与焦点管理',
      theory: `# 键盘导航与焦点管理

## 为什么键盘导航重要？

许多用户依赖键盘来浏览网页，包括：
- 使用屏幕阅读器的视障用户
- 有运动障碍的用户
- 习惯使用键盘快捷键的高级用户

## Tab 键导航

### 基本概念

用户使用 **Tab** 键在页面上的可聚焦元素之间移动：
- **Tab**：移动到下一个元素
- **Shift + Tab**：移动到上一个元素

### 默认可聚焦元素

以下元素默认可聚焦：
- \`<a>\` 链接
- \`<button>\` 按钮
- \`<input>\`、\`<textarea>\`、\`<select>\` 表单元素

## tabindex 属性

### tabindex 的值

\`\`\`html
<!-- tabindex="0": 按自然顺序可聚焦 -->
<div tabindex="0">可聚焦的 div</div>

<!-- tabindex="-1": 可通过 JavaScript 聚焦，但不在 Tab 顺序中 -->
<div tabindex="-1">仅程序聚焦</div>

<!-- tabindex="1+" (避免使用): 指定 Tab 顺序 -->
<div tabindex="1">不推荐</div>
\`\`\`

### 最佳实践

✅ **推荐**：
- 使用原生可聚焦元素（button、a、input）
- 仅在必要时使用 \`tabindex="0"\`
- 使用 \`tabindex="-1"\` 用于程序化聚焦

❌ **避免**：
- 使用正数 tabindex（破坏自然顺序）
- 让所有元素都可聚焦

## 焦点可见性

确保焦点状态清晰可见：

\`\`\`css
/* 推荐：保留默认焦点样式 */
:focus {
  outline: 2px solid blue;
}

/* 或自定义焦点样式 */
button:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
\`\`\`

## 实践挑战

完成下面的挑战，掌握键盘导航技巧！`,
      challengeTitle: '创建可键盘访问的导航栏',
      challengeInstructions: '创建一个导航栏，确保：\n1. 所有链接都可以通过 Tab 键访问\n2. 使用正确的 HTML 元素（不使用 div）\n3. 焦点状态清晰可见',
    },
    fr: {
      title: 'Navigation clavier et gestion du focus',
      theory: `# Navigation clavier et gestion du focus

## Pourquoi la navigation au clavier est-elle importante ?

De nombreux utilisateurs comptent sur le clavier pour naviguer, notamment :
- Les utilisateurs malvoyants utilisant des lecteurs d'écran
- Les utilisateurs ayant des troubles moteurs
- Les utilisateurs avancés préférant les raccourcis clavier

## Navigation avec la touche Tab

### Concept de base

Les utilisateurs utilisent la touche **Tab** pour se déplacer entre les éléments focalisables :
- **Tab** : Passer à l'élément suivant
- **Maj + Tab** : Revenir à l'élément précédent

### Éléments focalisables par défaut

Les éléments suivants sont focalisables par défaut :
- Liens \`<a>\`
- Boutons \`<button>\`
- Éléments de formulaire \`<input>\`, \`<textarea>\`, \`<select>\`

## L'attribut tabindex

### Valeurs de tabindex

\`\`\`html
<!-- tabindex="0": Focalisable dans l'ordre naturel -->
<div tabindex="0">Div focalisable</div>

<!-- tabindex="-1": Focalisable uniquement via JavaScript -->
<div tabindex="-1">Focus programmatique uniquement</div>

<!-- tabindex="1+" (à éviter): Spécifie l'ordre de tabulation -->
<div tabindex="1">Non recommandé</div>
\`\`\`

### Bonnes pratiques

✅ **Recommandé** :
- Utiliser des éléments natifs focalisables (button, a, input)
- Utiliser \`tabindex="0"\` seulement si nécessaire
- Utiliser \`tabindex="-1"\` pour le focus programmatique

❌ **À éviter** :
- Utiliser des valeurs positives de tabindex (perturbe l'ordre naturel)
- Rendre tous les éléments focalisables

## Visibilité du focus

Assurez-vous que l'état de focus est clairement visible :

\`\`\`css
/* Recommandé : Conserver le style de focus par défaut */
:focus {
  outline: 2px solid blue;
}

/* Ou personnaliser le style de focus */
button:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
\`\`\`

## Défi pratique

Complétez le défi ci-dessous pour maîtriser la navigation au clavier !`,
      challengeTitle: 'Créer une barre de navigation accessible au clavier',
      challengeInstructions: 'Créez une barre de navigation en vous assurant que :\n1. Tous les liens sont accessibles via la touche Tab\n2. Utilisez les bons éléments HTML (pas de div)\n3. L\'état de focus est clairement visible',
    },
  },
};
