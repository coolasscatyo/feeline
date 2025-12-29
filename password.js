export default class Password
{
  let Passed;
  static setTrue()
  {
    let Passed = true;
  }
  static setFalse()
  {
    let Passed = false;
  }
  static checkState(arg)
  {
    if (arg == true)
    {
      return true
    } else if (arg == false)
    {
      return false
    } else
    {
      return undefined
    }
  }
}
