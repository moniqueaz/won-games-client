import Auth from 'templates/Auth'

// ATENÇÃO:
// remover any e definir os types
const SingUp = () => (
  <Auth title="Sign Up">
    <div>sing up</div>
  </Auth>
)

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {}
  }
}

export default SingUp
