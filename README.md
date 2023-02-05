# ZDG Dresden

Dieses Repository enthält die ZDG Dresden Website, die mit Hilfe von `vuepress` erstellt wurde.

## Software-Anforderungen

This package requires:
- [nodejs](https://github.com/nodejs/node)
- [npm](https://github.com/npm/cli)

## Techstack

Dieses Paket verwendet:
- [vuepress](https://github.com/vuejs/vuepress)
- [vuepress-theme-book](https://github.com/cyrilf/vuepress-theme-book)
- [vuepress-deploy](https://github.com/jenkey2011/vuepress-deploy)

## Verwendung

So verwenden Sie dieses Paket

Clonen sie das Repro 

```
git clone https://github.com/ZGD-Dresden/zgd-dresden-website.git
```
```
cd zgd-dresden-website
cd docs
```

### Node Version

Auf Node Version 18 stellen.

```
nvm use
```

### Install
```
yarn install
```


### Build

Erstellen Sie die statischen Dateien der Website, die dann unter `docs/.vuepress/dist/` zu finden sind.

```
yarn build
```

### Dev

Rufen Sie eine Entwicklungsumgebung mit Hot Reloading auf, die Sie unter http://localhost:8080/ erreichen.

```
yarn dev
```

### Test

Führen Sie die Tests durch, um sicherzustellen, dass alles wie erwartet funktioniert.

```
yarn test
```

## Wie es funktioniert

Dieses Repository nutzt `vuepress-deploy`, um den aktuellen `master`-Zweig automatisch auf Github-Seiten zu verteilen.

![repo-architecture](./docs/images/docs/architecture.png)

A Pullrequest-Review-Workflow is applied to get changes into the `master`. From there on an automatic github workflow script utilizing `vuepress-deploy` is taking over. The vuepress page is built and force-pushed to the `gh-pages` branch, which in turn is then deployed on the github pages infrastructure and bound to the web address [ZDG Dresden](url).
