import{d as n,c as s,o as a,e as p}from"./app.c5b046e1.js";const d='{"title":"Implement A Clipboard Tool","description":"And without any plugin","frontmatter":{"page":false,"title":"Implement A Clipboard Tool","description":"And without any plugin","date":"2022-02-10T12:41:44.000Z","sidebar":true,"comment":true,"category":["Tech"],"tags":["Tools"]},"headers":[{"level":3,"title":"Definition","slug":"definition"},{"level":3,"title":"Instantation","slug":"instantation"}],"relativePath":"posts/tech/js-copy.md","lastUpdated":1650640467433}',t={},e=p(`<p>The copy plugin <code>clipboardjs</code> has been not working for me due to the migration. So I wrote a simple one.</p><h3 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CopyBoard</span> <span class="token punctuation">{</span>
    <span class="token comment">// which conainer the content in</span>
    <span class="token keyword">private</span> codeEles<span class="token operator">:</span> HTMLCollection <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;pre&#39;</span><span class="token punctuation">)</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> eleArr<span class="token operator">:</span> Element<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>codeEles<span class="token punctuation">)</span>
        eleArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>ele <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> btn<span class="token operator">:</span> HTMLButtonElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
            btn<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;copy&#39;</span>
            btn<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;btn-copy&#39;</span><span class="token punctuation">)</span>
            ele<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span>

            btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// textarea tag keep a from of the content</span>
                <span class="token keyword">const</span> input<span class="token operator">:</span> HTMLInputElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;textarea&#39;</span><span class="token punctuation">)</span> 
                <span class="token keyword">const</span> prev<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> btn<span class="token punctuation">.</span>previousElementSibling <span class="token keyword">as</span> HTMLElement
                input<span class="token punctuation">.</span>value <span class="token operator">=</span> prev<span class="token punctuation">.</span>innerText<span class="token punctuation">;</span>
                <span class="token comment">// add a input to body</span>
                document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
                <span class="token comment">// select input content</span>
                input<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// execute copy cmd</span>
                document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">&#39;copy&#39;</span><span class="token punctuation">)</span>
                <span class="token comment">// successful tip</span>
                btn<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;copied&#39;</span>
                <span class="token comment">// remove input from body</span>
                document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="instantation" tabindex="-1">Instantation <a class="header-anchor" href="#instantation" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyBoard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;copyboard.ts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
