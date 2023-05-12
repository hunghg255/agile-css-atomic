# React Atomic CSS with agile-css

# Install

```bash
npm install
```

# Run

```bash
npm run dev
```

# Install Extentions to support auto complete class

[Agile CSS Autocomplete](https://marketplace.visualstudio.com/items?itemName=AgileCssAutocomplete.agile-css-autocomplete)

## Watch file change at `src/styles/agile-css.css`

## Syntax

```
<property>:<value>|<pseudo>|<pseudo><important -> "!">...@<media>

Example:

Class Name               CSS
-----------------------------------------------------------------------------------------
c:red                 -> .c\:red { color: red }
bgc:blue!             -> .bgc\:blue\! { background-color: blue !important }
bd:1px_solid_yellow   -> .bd\:1px_solid_yellow { border: 1px solid yellow }
p:30px@md             -> @media (min-width:992px) { .p\:30px\@md { padding: 30px }
m:20px@+300px         -> @media (max-width:300px) { .m\:20px\@\+300px { margin: 20px } }
fz:20px|h             -> .fz\:20px\|h:hover { font-size: 20px }
cnt:(After_cnt)||af   -> .cnt\:\(After_cnt\)\|\|af::after { content: 'After ctn' }
cnt:(Before_cnt)|be   -> .cnt\:\(Before_cnt\)\|be:before { content: 'Before ctn' }
cnt:(Hover)|h||be     -> .cnt\:\(Hover\)\|be:hover:before { content: 'Hover' }
trf:scale(2)          -> .trf/:scale\(2\) { transform: scale(2) }
m:calc(20px_+_10px)   -> .m\:calc\(20px_+_10px\) { margin: calc(20px + 10px) }
```
