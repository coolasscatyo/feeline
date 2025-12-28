export default class Password
{
  constructor(Passed)
  {
    this.Passed = Passed;
  }
  changeState()
  {
    this.Passed = true
  }
}
