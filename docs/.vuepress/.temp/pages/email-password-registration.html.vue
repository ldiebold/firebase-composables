<template><h1 id="email-password-registration" tabindex="-1"><a class="header-anchor" href="#email-password-registration" aria-hidden="true">#</a> Email Password Registration</h1>
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
</code></pre></div><h2 id="creating-a-register-form" tabindex="-1"><a class="header-anchor" href="#creating-a-register-form" aria-hidden="true">#</a> Creating a register form</h2>
<p><code>useEmailSignIn</code> provides a form (<code>name</code>, <code>email</code>, <code>password</code>). The values in this form are used to register a new user when <code>signIn()</code> is called.</p>
<p>Here's a basic example of a firebase register form:</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailRegister<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token comment">// destructure form</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> form <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Name --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.name<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Email --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.email<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Password --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="the-register-function" tabindex="-1"><a class="header-anchor" href="#the-register-function" aria-hidden="true">#</a> The <code>register()</code> function</h2>
<p>When the form is filled, we use <code>register</code> to create a new account in firebase:</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailRegister<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> register <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    ...

    <span class="token comment">&lt;!-- Register Button --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>register<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Register
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="errors-and-loading" tabindex="-1"><a class="header-anchor" href="#errors-and-loading" aria-hidden="true">#</a> Errors and Loading</h2>
<p>We also have everything we need to handle errors, and loading state! Check it out...</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailRegister<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">,</span>
  register<span class="token punctuation">,</span>
  hasError<span class="token punctuation">,</span>
  error
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    ...

    <span class="token comment">&lt;!-- Register Button --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>register<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Register
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- loading --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      Registering...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasError<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      {{ error.message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="full-example" tabindex="-1"><a class="header-anchor" href="#full-example" aria-hidden="true">#</a> Full Example</h2>
<p>Here's a &quot;copy pastable&quot; example to help get you started 🙂</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailRegister<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  form<span class="token punctuation">,</span>
  loading<span class="token punctuation">,</span>
  register<span class="token punctuation">,</span>
  hasError<span class="token punctuation">,</span>
  error
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> authState <span class="token operator">=</span> <span class="token function">useAuthState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Name --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.name<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Email --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.email<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Password --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Register --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>register<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Register
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      Registering...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasError<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      {{ error.message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>{{ authState }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><p>And that's it!
Need to do somthing more advanced? Be sure to read through the <a href="https://firebase.google.com/docs/auth/web/password-auth" target="_blank" rel="noopener noreferrer">Password Authentication<OutboundLink/></a> page in the firebase docs.</p>
</template>
