/**
 * Errors from next-auth https://next-auth.js.org/configuration/pages#sign-in-page
 */
export type TLoginError =  'OAuthSignin' 
  | 'OAuthCallback'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'OAuthAccountNotLinked'
  | 'EmailSignin'
  | 'CredentialsSignin'
  | 'SessionRequired'
  | 'Default'

export const getLoginErrorMessage = (error: TLoginError): string => {
  switch(error) {
    case 'OAuthSignin': // Default message: Try signing in with a different account.
    case 'OAuthCallback': // Default message: Try signing in with a different account.
    case 'OAuthCreateAccount': // Default message: Try signing in with a different account.
    case 'Callback': // Default message: Try signing in with a different account.
      return 'Please try signing in with a different account.'
    case 'OAuthAccountNotLinked': // Default message: To confirm your identity, sign in with the same account you used originally.
      return 'To confirm your identity, please sign in with the same account you used originally.' +
        ' You can link more login service providers to your account after in your account settings.'
    case 'EmailSignin': // Default message: The e-mail could not be sent.
      return 'The e-mail could not be sent.'
    case 'CredentialsSignin': // Default message: Sign in failed. Check the details you provided are correct
      return 'Sign in failed. Check the details you provided are correct.'
    case 'SessionRequired': // Default message: Please sign in to access this page.
      return 'Please sign in to access this page.'
    case 'Default': // Default message: Unable to sign in.
    default:
      return 'Unable to sign in.'
  }
}