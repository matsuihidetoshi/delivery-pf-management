import * as AmplifyModules from 'aws-amplify'
let languageDict = {
  ja:{
    'Sign in to your account': 'アカウントにサインイン',
    'Create a new account': '登録',
    'Enter your Username': 'メールアドレス',
    'Username': 'メールアドレス',
    'Enter your username': 'ユーザ名を入力してください',
    'Password': 'パスワード',
    'Enter your password': 'パスワードを入力してください',
    'Forget your password? ': 'パスワードの再設定は',
    'Enter new password': '新しいパスワードを入力してください',
    'Reset password': 'こちら',
    'No account? ': '未登録ですか？ ',
    'Create account': '登録',
    'Have an account? ': '登録済ですか？ ',
    'Sign in': 'サインイン',
    'Reset your password': 'パスワード再設定',
    'Back to Sign In': 'サインインに戻る',
    'Resend Code': '確認コードを再送する',
    'Confirmation Code': '確認コード',
    'Lost your code? ': '確認コードが見つかりませんか？ ',
    'Confirmation code cannot be empty': '確認コードを入力してください',
    'Code': '確認コード',
    'Invalid verification code provided, please try again.': '無効な確認コードです',
    'New Password': '新しいパスワード',
    'An account with the given email already exists.': 'このメールアドレスはすでに登録されています',
    'Username should be an email.': '正しい形式のメールアドレスを入力してください',
    'Username cannot be empty': 'メールアドレスを入力してください',
    'Custom auth lambda trigger is not configured for the user pool.': 'パスワードを入力してください',
    'User does not exist.': 'このメールアドレスは登録されていません',
    'The following fields must be completed: Username': 'メールアドレスを入力してください',
    'The following fields must be completed: Username, Password': 'メールアドレスとパスワードを入力してください',
    'The following fields must be completed: Password': 'パスワードを入力してください',
    "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6": 'パスワードは6文字以上にしてください',
    'Username/client id combination not found.': 'このメールアドレスは登録されていません',
    'Password cannot be empty': 'パスワードを入力してください',
    'Incorrect username or password.': 'メールアドレス、またはパスワードが間違っています',
    'Attempt limit exceeded, please try after some time.': '何度も確認コードを発行しています。少し待ってから再度試してください。'
  }
}
AmplifyModules.I18n.putVocabularies(languageDict)