import{d as a,c as n,o as s,e as t}from"./app.c5b046e1.js";const b='{"title":"HTML Tag","description":"From HTML5","frontmatter":{"page":false,"title":"HTML Tag <object> and <embed>","description":"From HTML5","date":"2022-02-09T14:01:40.000Z","sidebar":true,"comment":true,"category":["Tech"],"tags":["HTML"]},"headers":[{"level":3,"title":"<object>","slug":"object"},{"level":3,"title":"<embed>","slug":"embed"},{"level":3,"title":"Combination","slug":"combination"}],"relativePath":"posts/tech/html-embed.md","lastUpdated":1644467348043}',e={},p=t(`<p>The two tags are both able to render media object such as audio, video, pdf and flash.<br> Due to the compatibility depending on different browsers, we should mainly use <code>&lt;object&gt;</code>.</p><h3 id="object" tabindex="-1"><code>&lt;object&gt;</code> <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><p>Supported by all major browsers</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data path<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    rendered when the tag is not being supported.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="embed" tabindex="-1"><code>&lt;embed&gt;</code> <a class="header-anchor" href="#embed" aria-hidden="true">#</a></h3><p>Supported by all major browsers(no longer recommended).</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>550<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data path<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="combination" tabindex="-1">Combination <a class="header-anchor" href="#combination" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data path<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Typically in IE --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>550<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data path<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,9),o=[p];function c(l,u,i,r,d,k){return s(),n("div",null,o)}var h=a(e,[["render",c]]);export{b as __pageData,h as default};
