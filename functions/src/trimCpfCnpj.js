const trimCpfCnpj = str => str
  .split('.')
  .join('')
  .split('/')
  .join('')
  .split('-')
  .join('')

export default trimCpfCnpj
