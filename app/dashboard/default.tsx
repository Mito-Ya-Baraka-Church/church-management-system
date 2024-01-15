export default async function DefaultHome() {
  // this is so that if we are on the /dashboard/<path> page, we don't show the dashboard children
  // so that only the children of the /dashboard/<path> are shown
  return null;
}
