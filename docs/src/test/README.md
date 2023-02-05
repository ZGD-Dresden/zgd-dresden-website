# Test  

---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

# {{ $frontmatter.title }}

My blog post is written in {{ $frontmatter.lang }}.



  {{ $page }}

  ### Badge 
  <Badge text="beta" type="warning"/> <Badge text="default theme"/>



::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::


---