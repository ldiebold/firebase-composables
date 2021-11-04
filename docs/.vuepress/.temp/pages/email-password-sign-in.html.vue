<template><h1 id="email-password-sign-in" tabindex="-1"><a class="header-anchor" href="#email-password-sign-in" aria-hidden="true">#</a> Email Password Sign In</h1>
<p>This is going to look very similar to the register form, and it should! Jump straight to</p>
<h2 id="enabling-password-signin-with-firebase" tabindex="-1"><a class="header-anchor" href="#enabling-password-signin-with-firebase" aria-hidden="true">#</a> Enabling Password SignIn with Firebase</h2>
<p>First, ensure that the &quot;Email/Password&quot; provider is enabled in firebase. Here's how you do it:</p>
<ol>
<li>Wack this link to go to the firebase console 👊<a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">firebase console<OutboundLink/></a></li>
<li>Select your project</li>
<li>Select <strong>Authentication</strong></li>
<li>Select <strong>Sign-in method</strong></li>
<li>Select <strong>Add new provider</strong></li>
<li>Ensure <strong>Email/Password</strong> has a tick ✔️, otherwise, set it up</li>
</ol>
<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  form<span class="token punctuation">,</span>
  signIn<span class="token punctuation">,</span>
  loading<span class="token punctuation">,</span>
  error<span class="token punctuation">,</span>
  hasError
<span class="token punctuation">}</span>
</code></pre></div><h2 id="creating-a-signin-form" tabindex="-1"><a class="header-anchor" href="#creating-a-signin-form" aria-hidden="true">#</a> Creating a SignIn form</h2>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> form <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.email<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="the-signin-function" tabindex="-1"><a class="header-anchor" href="#the-signin-function" aria-hidden="true">#</a> The <code>signIn()</code> function</h2>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>signIn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sign In<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="errors-and-loading" tabindex="-1"><a class="header-anchor" href="#errors-and-loading" aria-hidden="true">#</a> Errors and Loading</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Error handling will always look like this with firebase-composables. They use the <code>handlesErrors</code> composable behind the scenes!</p>
</div>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  signIn<span class="token punctuation">,</span>
  loading<span class="token punctuation">,</span>
  error<span class="token punctuation">,</span>
  hasError
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    ...
    <span class="token comment">&lt;!-- Sign In --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading<span class="token punctuation">"</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isAuthenticated<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>signIn<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Sign In
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      Signing In...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasError<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      {{ error.message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="full-example" tabindex="-1"><a class="header-anchor" href="#full-example" aria-hidden="true">#</a> Full Example</h2>
<p>Put it all together and what do you get?</p>
<p>Something like this:</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  form<span class="token punctuation">,</span>
  signIn<span class="token punctuation">,</span>
  loading<span class="token punctuation">,</span>
  error<span class="token punctuation">,</span>
  hasError
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> authState <span class="token operator">=</span> <span class="token function">useAuthState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  isAuthenticated
<span class="token punctuation">}</span> <span class="token operator">=</span> authState
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Email --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.email<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Password --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Sign In --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading<span class="token punctuation">"</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isAuthenticated<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>signIn<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Sign In
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      Signing In...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasError<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      {{ error.message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>{{ authState }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></template>
