<template><h1 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h1>
<p>It turns out composables can make dealing with authentication wonderful!</p>
<p><strong>firebase-composables</strong> (Supports Vue2 and Vue3 thanks to <a href="https://github.com/vueuse/vue-demi" target="_blank" rel="noopener noreferrer">vue-demi<OutboundLink/></a>) makes authenticating with firebase a joy, and also makes it easy to keep your firestore data in sync!</p>
<p>Here's an example of some signIn code...</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> form<span class="token punctuation">,</span> signIn <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>signIn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sign In<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>We'll first have to setup our credentials before the above code will work!</p>
</div>
<p>Pretty nice right? And this is just the beginning. It turns out there's other ways the composition api can make firebase an <strong>absolute joy</strong> to work with. <RouterLink to="/getting-started.html">Let's get started!</RouterLink></p>
</template>
