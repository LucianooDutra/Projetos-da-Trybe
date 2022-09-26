// genericErrorHandler
// essa função irei chamar pra lançar o meu error sempre que quiser na minha camada service.
// ex: ao invez de fazer :
//   const erro = { status: 404, message: 'Product not created' };
//   if (!product || product.length === 0) throw erro;

// fazer:
// if (!product || product.length === 0) throw errorGenerate(404,'Product not created');

const errorGenerate = (status, message, type) => ({ status, message, type });

module.exports = { errorGenerate };