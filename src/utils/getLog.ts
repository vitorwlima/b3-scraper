export const getLog = (showLogs?: boolean) => {
  return showLogs ? console.log : () => {}
}
