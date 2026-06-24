# Geloblog

> [!WARNING]
> **Projeto interno da Gelo**
>
> Embora este repositório esteja público, ele é utilizado internamente pela equipe da Gelo e **não aceita contribuições externas**.
>
> * Issues provavelmente não serão respondidas.
> * Pull Requests provavelmente não serão revisados nem aceitos.
> * Não oferecemos suporte para instalação, customização ou uso deste código.
>
> O repositório está aberto apenas para fins de transparência e consulta.

Blog estatico em PT-BR para `blog.gelo.tv`, construido com Astro e conteudo em Markdown.

## Desenvolvimento

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```

Os posts ficam em `src/content/posts`. Cada arquivo Markdown precisa do frontmatter usado em `boas-vindas-ao-geloblog.md`.
