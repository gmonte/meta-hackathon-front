/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import isEmpty from 'lodash/isEmpty'
import forEach from 'lodash/forEach'
import * as HttpService from '@jqcode/s-http'
import { initSnackbarByType } from '@jqcode/c-snackbars/src/utils'

function getUrl(
  {
    endpoint,
    protocol = 'http'
  }
) {

  const host = 'ec2-18-229-18-115.sa-east-1.compute.amazonaws.com'
  let url = ''

  if (host.split('://').length > 1) {
    // host já tem protocolo concatenado
    url = host
  } else {
    url = `${ protocol }://${ host }`
  }

  return `${ url }/api/${ endpoint }`
}

function getHeaders({ headers = {} }) {
  return {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...headers
  }
}

async function request(
  service,
  {
    endpoint,
    data,
    headers,
    protocol,
    fetchOptions,
    serializeConfig,
    json,
    showSnackbarProcessing = false
  }
) {
  let snackbarProcessing = {}
  let snackbarProcessingInterval = null

  const stopSnack = () => {
    clearInterval(snackbarProcessingInterval)
    if (showSnackbarProcessing && !isEmpty(snackbarProcessing)) {
      setTimeout(snackbarProcessing.close, 200)
    }
  }

  try {
    const methodOptions = {
      endpoint: getUrl({
        endpoint,
        protocol
      }),
      headers: getHeaders({
        headers
      }),
      data,
      fetchOptions,
      serializeConfig,
      json
    }

    snackbarProcessingInterval = setTimeout(() => {
      if (showSnackbarProcessing) {
        snackbarProcessing = window.snackbar.info('Aguarde. Processando...', {
          closeOnClick: false,
          persist: true,
          preventDuplicate: true
        })
      }
    }, 500)

    const response = await service(methodOptions)
    stopSnack()

    if (response) {
      const { body } = response

      const { messages, success } = body

      if (success !== undefined) {
        // mostra snackbars de resposta se tiver pelo menos uma mensagem vinda da API
        if (!isEmpty(messages)) {
          const env = process.env.REACT_APP_CONTEXT
          if (env === 'web/enigma') {
            forEach(messages, (content) => {
              const {
                type,
                message
              } = content

              initSnackbarByType(type, message)
            })
          }
        }

        if (!success) {
          throw body
        }
      }
    }

    return response
  } catch (e) {
    stopSnack()
    throw e
  }
}

async function get(
  {
    endpoint,
    data,
    headers,
    protocol,
    fetchOptions,
    serializeConfig,
    json,
    showSnackbarProcessing
  }
) {
  return request(
    HttpService.get,
    {
      endpoint,
      data,
      headers,
      protocol,
      fetchOptions,
      serializeConfig,
      json,
      showSnackbarProcessing
    }
  )
}

async function post(
  {
    endpoint,
    data,
    headers,
    protocol,
    fetchOptions,
    json,
    showSnackbarProcessing
  }
) {
  return request(
    HttpService.post,
    {
      endpoint,
      data,
      headers,
      protocol,
      fetchOptions,
      json,
      showSnackbarProcessing
    }
  )
}

async function put(
  {
    endpoint,
    data,
    headers,
    protocol,
    fetchOptions,
    json,
    showSnackbarProcessing
  }
) {
  return request(
    HttpService.put,
    {
      endpoint,
      data,
      headers,
      protocol,
      fetchOptions,
      json,
      showSnackbarProcessing
    }
  )
}

async function del(
  {
    endpoint,
    data,
    headers,
    protocol,
    fetchOptions,
    json,
    showSnackbarProcessing
  }
) {
  return request(
    HttpService.del,
    {
      endpoint,
      data,
      headers,
      protocol,
      fetchOptions,
      json,
      showSnackbarProcessing
    }
  )
}

async function down(methodConfig, method = get) {
  return HttpService.down(methodConfig, method)
}

export {
  get,
  post,
  put,
  del,
  down
}
