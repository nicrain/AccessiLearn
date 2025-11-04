export const challengeData = {
  'html-basics': {
    zh: {
      initialCode: `<!-- 请在这里编写您的 HTML 代码 -->
<div>
  <!-- 您的代码 -->
</div>`,
      solutionCode: `<article>
  <h1>我的第一篇博客</h1>
  
  <section>
    <h2>什么是 Web 无障碍？</h2>
    <p>Web 无障碍是确保所有人都能访问网站的实践。</p>
  </section>
  
  <section>
    <h2>关键要点</h2>
    <ul>
      <li>使用语义化 HTML</li>
      <li>提供替代文本</li>
      <li>确保键盘可访问</li>
    </ul>
  </section>
</article>`,
      checkRules: [
        { type: 'h1', count: 1, message: '页面应有且仅有一个 <h1> 标题' },
        { type: 'h2', minCount: 2, message: '应至少有两个 <h2> 副标题' },
        { type: 'p', minCount: 2, message: '应至少有两个 <p> 段落' },
        { type: 'ul', count: 1, message: '应有一个 <ul> 无序列表' },
        { type: 'li', minCount: 3, message: '列表应至少有 3 个 <li> 项目' }
      ]
    },
    fr: {
      initialCode: `<!-- Écrivez votre code HTML ici -->
<div>
  <!-- Votre code -->
</div>`,
      solutionCode: `<article>
  <h1>Mon premier blog</h1>
  
  <section>
    <h2>Qu'est-ce que l'accessibilité Web ?</h2>
    <p>L'accessibilité Web est la pratique de garantir que tout le monde peut accéder aux sites Web.</p>
  </section>
  
  <section>
    <h2>Points clés</h2>
    <ul>
      <li>Utiliser du HTML sémantique</li>
      <li>Fournir du texte alternatif</li>
      <li>Assurer l'accessibilité au clavier</li>
    </ul>
  </section>
</article>`,
      checkRules: [
        { type: 'h1', count: 1, message: 'La page doit avoir un et un seul titre <h1>' },
        { type: 'h2', minCount: 2, message: 'Il devrait y avoir au moins deux sous-titres <h2>' },
        { type: 'p', minCount: 2, message: 'Il devrait y avoir au moins deux paragraphes <p>' },
        { type: 'ul', count: 1, message: 'Il devrait y avoir une liste non ordonnée <ul>' },
        { type: 'li', minCount: 3, message: 'La liste devrait avoir au moins 3 éléments <li>' }
      ]
    },
  },
  'keyboard-tab': {
    zh: {
      initialCode: `<!-- 请创建一个可访问的导航菜单 -->
`,
      solutionCode: `<nav aria-label="主导航">
  <ul>
    <li><a href="#home">首页</a></li>
    <li><a href="#about">关于</a></li>
    <li><a href="#contact">联系</a></li>
  </ul>
</nav>`,
      checkRules: [
        { type: 'nav', count: 1, message: '应使用 <nav> 元素包裹导航' },
        { type: 'ul', count: 1, message: '应使用 <ul> 元素创建列表' },
        { type: 'a', minCount: 3, message: '应至少有 3 个 <a> 链接' },
        { type: 'tabindex-positive', forbidden: true, message: '不应使用正数 tabindex' }
      ]
    },
    fr: {
      initialCode: `<!-- Créez un menu de navigation accessible -->
`,
      solutionCode: `<nav aria-label="Navigation principale">
  <ul>
    <li><a href="#home">Accueil</a></li>
    <li><a href="#about">À propos</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`,
      checkRules: [
        { type: 'nav', count: 1, message: 'Utiliser l\'élément <nav> pour envelopper la navigation' },
        { type: 'ul', count: 1, message: 'Utiliser l\'élément <ul> pour créer une liste' },
        { type: 'a', minCount: 3, message: 'Il devrait y avoir au moins 3 liens <a>' },
        { type: 'tabindex-positive', forbidden: true, message: 'Ne pas utiliser de tabindex positif' }
      ]
    },
  },
};
