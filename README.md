# sewing doc
sewing doc是sewing app (https://app.sewingapp.work/s/) 的SDK工具。

## 安装

```
npm i sewing-doc
```

## 使用

```javascript
// use as custom element
import { SewingDocElement } from 'sewing-doc';

customElements.define('sewing-doc', SewingDocElement);
```

```javascript
// use as Vue component
import { SewingDoc } from 'sewing-doc';

export default {
  components: {
    SewingDoc
  }
}
```
