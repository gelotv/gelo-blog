import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const targetFile = resolve(root, "deploy-target.txt");
const cnameFile = resolve(root, "public", "CNAME");

export function getDeployTarget() {
  const target = existsSync(targetFile)
    ? readFileSync(targetFile, "utf8").trim()
    : "github-pages";

  if (target !== "github-pages" && target !== "custom-domain") {
    throw new Error(
      `Invalid deploy-target.txt value "${target}". Use "github-pages" or "custom-domain".`,
    );
  }

  return target;
}

export function getDeployConfig() {
  const target = getDeployTarget();

  if (target === "custom-domain") {
    return {
      base: "/",
      site: "https://blog.gelo.tv",
      target,
    };
  }

  return {
    base: "/gelo-blog/",
    site: "https://gelotv.github.io",
    target,
  };
}

export function syncCname() {
  const target = getDeployTarget();

  if (target === "custom-domain") {
    writeFileSync(cnameFile, "blog.gelo.tv\n");
    return;
  }

  if (existsSync(cnameFile)) {
    rmSync(cnameFile);
  }
}
