/**
 * Shared LIVE-PREVIEW OAuth client (server-only — NEVER import from the client).
 *
 * The sandbox serves each live preview on a dynamic `https://*.grok-sandbox.com`
 * URL, which can't be pre-registered per app. The broker instead exposes ONE
 * shared "preview" client that accepts any
 * `https://*.grok-sandbox.com/api/auth/oauth2/callback/*`
 * (broker: `app-builder-deployer/auth/src/preview-oauth.ts`). When deployed the deployer injects a per-app
 * `GROK_AUTH_*` that overrides these (see `server.ts`).
 *
 * The preview client id is not a password. The matching secret is never stored
 * in this file. Set `GROK_PREVIEW_CLIENT_SECRET` or `GROK_AUTH_CLIENT_SECRET`
 * in the server environment when preview sign-in is required.
 */
export const PREVIEW_CLIENT_ID = "grok_preview";

export function previewClientSecret(): string | undefined {
  const value = process.env.GROK_PREVIEW_CLIENT_SECRET?.trim() || process.env.GROK_AUTH_CLIENT_SECRET?.trim();
  return value || undefined;
}

/** The shared auth broker issuer (OIDC discovery lives under it). */
export const GROK_ISSUER_DEFAULT = "https://auth.grok.me";

/**
 * Host patterns whose callbacks the preview client accepts. Better Auth derives
 * the live preview's real origin from the request host and validates it against
 * this list (wildcard-matched), so the OAuth `redirect_uri` becomes the concrete
 * `https://<preview-host>/api/auth/oauth2/callback/...` the broker allows.
 */
export const PREVIEW_ALLOWED_HOSTS = ["*.grok-sandbox.com"] as const;
