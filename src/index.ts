export const run = () => {
  const data = 'Hello, World 🌎'

  const inflatedLog = {
    __VTEX_IO_LOG: true,
    account: 'vtex',
    workspace: 'davi',
    data,
  }

  console.log(JSON.stringify(inflatedLog))
}
