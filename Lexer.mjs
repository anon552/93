import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import Char from "./Char.mjs";
import Stack from "./Stack.mjs";
import Str from "./Str.mjs";
import Option from "./Option.mjs";
import Token from "./Token.mjs";
let Lexer1;
(class Lexer {
  static {
    Lexer1 = Lexer;
    this.Location = function Location(start1, end1) {
      return new Location.class(start1, end1);
    };
    this.Location.class = class Location {
      #start;
      #end;
      constructor(start, end) {
        this.#start = start;
        this.#end = end;
      }
      toString() { return "Location(" + "" + ")"; }
    };
    this.Message = function Message(description1, location1) {
      return new Message.class(description1, location1);
    };
    this.Message.class = class Message {
      #description;
      #location;
      constructor(description, location) {
        this.#description = description;
        this.#location = location;
      }
      toString() { return "Message(" + "" + ")"; }
    };
    this.Report = function Report(messages1) {
      return new Report.class(messages1);
    };
    this.Report.class = class Report {
      #messages;
      constructor(messages) {
        this.#messages = messages;
      }
      toString() { return "Report(" + "" + ")"; }
    };
    const IdentifierStart$class = class IdentifierStart {
      constructor() {}
      unapply(scrut) {
        let matchResult, selRes, tmp, curDepth, stackDelayRes, Cont$func$unapply$5;
        Cont$func$unapply$5 = function Cont$func$unapply$(pc1) {
          return new Cont$func$unapply$.class(pc1);
        };
        Cont$func$unapply$5.class = class Cont$func$unapply$ extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp1;
            tmp1 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 691) {
              stackDelayRes = value$;
            } else if (this.pc === 693) {
              matchResult = value$;
            } else if (this.pc === 692) {
              tmp = value$;
            }
            contLoop: while (true) {
              if (this.pc === 691) {
                selRes = Char.Letter;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
                  if (tmp instanceof runtime.EffectSig.class) {
                    this.pc = 692;
                    tmp.contTrace.last.next = this;
                    tmp.contTrace.last = this;
                    return tmp
                  }
                  this.pc = 692;
                  continue contLoop;
                }
                this.pc = 698;
                continue contLoop;
              } else if (this.pc === 698) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapply(scrut));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 693;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 693;
                continue contLoop;
              } else if (this.pc === 693) {
                matchResult = runtime.resetDepth(matchResult, curDepth);
                if (matchResult instanceof runtime.MatchResult.class) {
                  this.pc = 695;
                  continue contLoop;
                } else {
                  if (scrut === "_") {
                    this.pc = 696;
                    continue contLoop;
                  } else {
                    this.pc = 697;
                    continue contLoop;
                  }
                  this.pc = 694;
                  continue contLoop;
                }
                this.pc = 694;
                continue contLoop;
              } else if (this.pc === 694) {
                break contLoop;
              } else if (this.pc === 697) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 696) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 695) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 692) {
                tmp = runtime.resetDepth(tmp, curDepth);
                throw tmp;
              }
              break;
            }
          }
          toString() { return "Cont$func$unapply$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapply$5.class(691);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        selRes = Char.Letter;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
          if (tmp instanceof runtime.EffectSig.class) {
            tmp.contTrace.last.next = new Cont$func$unapply$5.class(692);
            tmp.contTrace.last = tmp.contTrace.last.next;
            return tmp
          }
          tmp = runtime.resetDepth(tmp, curDepth);
          throw tmp;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapply(scrut));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$unapply$5.class(693);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth);
        if (matchResult instanceof runtime.MatchResult.class) {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          if (scrut === "_") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchFailure())
          }
        }
      } 
      unapplyStringPrefix(topic) {
        let matchResult, arg, postfix, cond, sliced, selRes, tmp, curDepth, stackDelayRes, Cont$func$unapplyStringPrefix$5;
        Cont$func$unapplyStringPrefix$5 = function Cont$func$unapplyStringPrefix$(pc1) {
          return new Cont$func$unapplyStringPrefix$.class(pc1);
        };
        Cont$func$unapplyStringPrefix$5.class = class Cont$func$unapplyStringPrefix$ extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp1;
            tmp1 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 699) {
              stackDelayRes = value$;
            } else if (this.pc === 701) {
              matchResult = value$;
            } else if (this.pc === 703) {
              cond = value$;
            } else if (this.pc === 704) {
              sliced = value$;
            } else if (this.pc === 702) {
              postfix = value$;
            } else if (this.pc === 700) {
              tmp = value$;
            }
            contLoop: while (true) {
              if (this.pc === 699) {
                selRes = Char.Letter;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
                  if (tmp instanceof runtime.EffectSig.class) {
                    this.pc = 700;
                    tmp.contTrace.last.next = this;
                    tmp.contTrace.last = this;
                    return tmp
                  }
                  this.pc = 700;
                  continue contLoop;
                }
                this.pc = 712;
                continue contLoop;
              } else if (this.pc === 712) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapplyStringPrefix(topic));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 701;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 701;
                continue contLoop;
              } else if (this.pc === 701) {
                matchResult = runtime.resetDepth(matchResult, curDepth);
                if (matchResult instanceof runtime.MatchResult.class) {
                  arg = matchResult.captures;
                  this.pc = 707;
                  continue contLoop;
                } else {
                  this.pc = 711;
                  continue contLoop;
                }
                this.pc = 705;
                continue contLoop;
              } else if (this.pc === 705) {
                break contLoop;
              } else if (this.pc === 711) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond = runtime.Str.startsWith(topic, "_");
                if (cond instanceof runtime.EffectSig.class) {
                  this.pc = 703;
                  cond.contTrace.last.next = this;
                  cond.contTrace.last = this;
                  return cond
                }
                this.pc = 703;
                continue contLoop;
              } else if (this.pc === 703) {
                cond = runtime.resetDepth(cond, curDepth);
                if (cond === true) {
                  this.pc = 709;
                  continue contLoop;
                } else {
                  this.pc = 710;
                  continue contLoop;
                }
                this.pc = 705;
                continue contLoop;
              } else if (this.pc === 710) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 709) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced = runtime.Str.drop(topic, 1);
                if (sliced instanceof runtime.EffectSig.class) {
                  this.pc = 704;
                  sliced.contTrace.last.next = this;
                  sliced.contTrace.last = this;
                  return sliced
                }
                this.pc = 704;
                continue contLoop;
              } else if (this.pc === 704) {
                sliced = runtime.resetDepth(sliced, curDepth);
                this.pc = 708;
                continue contLoop;
              } else if (this.pc === 708) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced
                ]))
              } else if (this.pc === 707) {
                runtime.stackDepth = runtime.stackDepth + 1;
                postfix = runtime.Tuple.get(arg, 0);
                if (postfix instanceof runtime.EffectSig.class) {
                  this.pc = 702;
                  postfix.contTrace.last.next = this;
                  postfix.contTrace.last = this;
                  return postfix
                }
                this.pc = 702;
                continue contLoop;
              } else if (this.pc === 702) {
                postfix = runtime.resetDepth(postfix, curDepth);
                this.pc = 706;
                continue contLoop;
              } else if (this.pc === 706) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  postfix
                ]))
              } else if (this.pc === 700) {
                tmp = runtime.resetDepth(tmp, curDepth);
                throw tmp;
              }
              break;
            }
          }
          toString() { return "Cont$func$unapplyStringPrefix$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(699);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        selRes = Char.Letter;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
          if (tmp instanceof runtime.EffectSig.class) {
            tmp.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(700);
            tmp.contTrace.last = tmp.contTrace.last.next;
            return tmp
          }
          tmp = runtime.resetDepth(tmp, curDepth);
          throw tmp;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapplyStringPrefix(topic));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(701);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth);
        if (matchResult instanceof runtime.MatchResult.class) {
          arg = matchResult.captures;
          runtime.stackDepth = runtime.stackDepth + 1;
          postfix = runtime.Tuple.get(arg, 0);
          if (postfix instanceof runtime.EffectSig.class) {
            postfix.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(702);
            postfix.contTrace.last = postfix.contTrace.last.next;
            return postfix
          }
          postfix = runtime.resetDepth(postfix, curDepth);
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([
            postfix
          ]))
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          cond = runtime.Str.startsWith(topic, "_");
          if (cond instanceof runtime.EffectSig.class) {
            cond.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(703);
            cond.contTrace.last = cond.contTrace.last.next;
            return cond
          }
          cond = runtime.resetDepth(cond, curDepth);
          if (cond === true) {
            runtime.stackDepth = runtime.stackDepth + 1;
            sliced = runtime.Str.drop(topic, 1);
            if (sliced instanceof runtime.EffectSig.class) {
              sliced.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(704);
              sliced.contTrace.last = sliced.contTrace.last.next;
              return sliced
            }
            sliced = runtime.resetDepth(sliced, curDepth);
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([
              sliced
            ]))
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchFailure())
          }
        }
      }
      toString() { return "IdentifierStart"; }
    };
    this.IdentifierStart = new IdentifierStart$class;
    this.IdentifierStart.class = IdentifierStart$class;
    const IdentifierBody$class = class IdentifierBody {
      constructor() {}
      unapply(scrut) {
        let matchResult, matchResult1, selRes, selRes1, tmp, curDepth, tmp1, stackDelayRes, Cont$func$unapply$5;
        Cont$func$unapply$5 = function Cont$func$unapply$(pc1) {
          return new Cont$func$unapply$.class(pc1);
        };
        Cont$func$unapply$5.class = class Cont$func$unapply$1 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp2;
            tmp2 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 713) {
              stackDelayRes = value$;
            } else if (this.pc === 715) {
              matchResult = value$;
            } else if (this.pc === 717) {
              matchResult1 = value$;
            } else if (this.pc === 716) {
              tmp1 = value$;
            } else if (this.pc === 714) {
              tmp = value$;
            }
            contLoop: while (true) {
              if (this.pc === 713) {
                selRes = Char.Letter;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
                  if (tmp instanceof runtime.EffectSig.class) {
                    this.pc = 714;
                    tmp.contTrace.last.next = this;
                    tmp.contTrace.last = this;
                    return tmp
                  }
                  this.pc = 714;
                  continue contLoop;
                }
                this.pc = 725;
                continue contLoop;
              } else if (this.pc === 725) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapply(scrut));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 715;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 715;
                continue contLoop;
              } else if (this.pc === 715) {
                matchResult = runtime.resetDepth(matchResult, curDepth);
                if (matchResult instanceof runtime.MatchResult.class) {
                  this.pc = 719;
                  continue contLoop;
                } else {
                  selRes1 = Char.Digit;
                  if (selRes1 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp1 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
                    if (tmp1 instanceof runtime.EffectSig.class) {
                      this.pc = 716;
                      tmp1.contTrace.last.next = this;
                      tmp1.contTrace.last = this;
                      return tmp1
                    }
                    this.pc = 716;
                    continue contLoop;
                  }
                  this.pc = 724;
                  continue contLoop;
                }
                this.pc = 718;
                continue contLoop;
              } else if (this.pc === 718) {
                break contLoop;
              } else if (this.pc === 724) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult1 = runtime.safeCall(selRes1.unapply(scrut));
                if (matchResult1 instanceof runtime.EffectSig.class) {
                  this.pc = 717;
                  matchResult1.contTrace.last.next = this;
                  matchResult1.contTrace.last = this;
                  return matchResult1
                }
                this.pc = 717;
                continue contLoop;
              } else if (this.pc === 717) {
                matchResult1 = runtime.resetDepth(matchResult1, curDepth);
                if (matchResult1 instanceof runtime.MatchResult.class) {
                  this.pc = 720;
                  continue contLoop;
                } else {
                  if (scrut === "_") {
                    this.pc = 721;
                    continue contLoop;
                  } else if (scrut === "'") {
                    this.pc = 722;
                    continue contLoop;
                    this.pc = 718;
                    continue contLoop;
                  } else {
                    this.pc = 723;
                    continue contLoop;
                  }
                  this.pc = 718;
                  continue contLoop;
                }
                this.pc = 718;
                continue contLoop;
              } else if (this.pc === 723) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 722) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 721) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 720) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 716) {
                tmp1 = runtime.resetDepth(tmp1, curDepth);
                throw tmp1;
              } else if (this.pc === 719) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 714) {
                tmp = runtime.resetDepth(tmp, curDepth);
                throw tmp;
              }
              break;
            }
          }
          toString() { return "Cont$func$unapply$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapply$5.class(713);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        selRes = Char.Letter;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
          if (tmp instanceof runtime.EffectSig.class) {
            tmp.contTrace.last.next = new Cont$func$unapply$5.class(714);
            tmp.contTrace.last = tmp.contTrace.last.next;
            return tmp
          }
          tmp = runtime.resetDepth(tmp, curDepth);
          throw tmp;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapply(scrut));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$unapply$5.class(715);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth);
        if (matchResult instanceof runtime.MatchResult.class) {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          selRes1 = Char.Digit;
          if (selRes1 === undefined) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp1 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
            if (tmp1 instanceof runtime.EffectSig.class) {
              tmp1.contTrace.last.next = new Cont$func$unapply$5.class(716);
              tmp1.contTrace.last = tmp1.contTrace.last.next;
              return tmp1
            }
            tmp1 = runtime.resetDepth(tmp1, curDepth);
            throw tmp1;
          }
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult1 = runtime.safeCall(selRes1.unapply(scrut));
          if (matchResult1 instanceof runtime.EffectSig.class) {
            matchResult1.contTrace.last.next = new Cont$func$unapply$5.class(717);
            matchResult1.contTrace.last = matchResult1.contTrace.last.next;
            return matchResult1
          }
          matchResult1 = runtime.resetDepth(matchResult1, curDepth);
          if (matchResult1 instanceof runtime.MatchResult.class) {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else {
            if (scrut === "_") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "'") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchFailure())
            }
          }
        }
      } 
      unapplyStringPrefix(topic) {
        let matchResult, arg, postfix, matchResult1, arg1, postfix1, cond, sliced, cond1, sliced1, selRes, selRes1, tmp, curDepth, tmp1, stackDelayRes, Cont$func$unapplyStringPrefix$5;
        Cont$func$unapplyStringPrefix$5 = function Cont$func$unapplyStringPrefix$(pc1) {
          return new Cont$func$unapplyStringPrefix$.class(pc1);
        };
        Cont$func$unapplyStringPrefix$5.class = class Cont$func$unapplyStringPrefix$1 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp2;
            tmp2 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 726) {
              stackDelayRes = value$;
            } else if (this.pc === 728) {
              matchResult = value$;
            } else if (this.pc === 731) {
              matchResult1 = value$;
            } else if (this.pc === 733) {
              cond = value$;
            } else if (this.pc === 735) {
              cond1 = value$;
            } else if (this.pc === 736) {
              sliced1 = value$;
            } else if (this.pc === 734) {
              sliced = value$;
            } else if (this.pc === 732) {
              postfix1 = value$;
            } else if (this.pc === 730) {
              tmp1 = value$;
            } else if (this.pc === 729) {
              postfix = value$;
            } else if (this.pc === 727) {
              tmp = value$;
            }
            contLoop: while (true) {
              if (this.pc === 726) {
                selRes = Char.Letter;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
                  if (tmp instanceof runtime.EffectSig.class) {
                    this.pc = 727;
                    tmp.contTrace.last.next = this;
                    tmp.contTrace.last = this;
                    return tmp
                  }
                  this.pc = 727;
                  continue contLoop;
                }
                this.pc = 750;
                continue contLoop;
              } else if (this.pc === 750) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapplyStringPrefix(topic));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 728;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 728;
                continue contLoop;
              } else if (this.pc === 728) {
                matchResult = runtime.resetDepth(matchResult, curDepth);
                if (matchResult instanceof runtime.MatchResult.class) {
                  arg = matchResult.captures;
                  this.pc = 739;
                  continue contLoop;
                } else {
                  selRes1 = Char.Digit;
                  if (selRes1 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp1 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
                    if (tmp1 instanceof runtime.EffectSig.class) {
                      this.pc = 730;
                      tmp1.contTrace.last.next = this;
                      tmp1.contTrace.last = this;
                      return tmp1
                    }
                    this.pc = 730;
                    continue contLoop;
                  }
                  this.pc = 749;
                  continue contLoop;
                }
                this.pc = 737;
                continue contLoop;
              } else if (this.pc === 737) {
                break contLoop;
              } else if (this.pc === 749) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult1 = runtime.safeCall(selRes1.unapplyStringPrefix(topic));
                if (matchResult1 instanceof runtime.EffectSig.class) {
                  this.pc = 731;
                  matchResult1.contTrace.last.next = this;
                  matchResult1.contTrace.last = this;
                  return matchResult1
                }
                this.pc = 731;
                continue contLoop;
              } else if (this.pc === 731) {
                matchResult1 = runtime.resetDepth(matchResult1, curDepth);
                if (matchResult1 instanceof runtime.MatchResult.class) {
                  arg1 = matchResult1.captures;
                  this.pc = 741;
                  continue contLoop;
                } else {
                  this.pc = 748;
                  continue contLoop;
                }
                this.pc = 737;
                continue contLoop;
              } else if (this.pc === 748) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond = runtime.Str.startsWith(topic, "_");
                if (cond instanceof runtime.EffectSig.class) {
                  this.pc = 733;
                  cond.contTrace.last.next = this;
                  cond.contTrace.last = this;
                  return cond
                }
                this.pc = 733;
                continue contLoop;
              } else if (this.pc === 733) {
                cond = runtime.resetDepth(cond, curDepth);
                if (cond === true) {
                  this.pc = 743;
                  continue contLoop;
                } else {
                  this.pc = 747;
                  continue contLoop;
                }
                this.pc = 737;
                continue contLoop;
              } else if (this.pc === 747) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond1 = runtime.Str.startsWith(topic, "'");
                if (cond1 instanceof runtime.EffectSig.class) {
                  this.pc = 735;
                  cond1.contTrace.last.next = this;
                  cond1.contTrace.last = this;
                  return cond1
                }
                this.pc = 735;
                continue contLoop;
              } else if (this.pc === 735) {
                cond1 = runtime.resetDepth(cond1, curDepth);
                if (cond1 === true) {
                  this.pc = 745;
                  continue contLoop;
                } else {
                  this.pc = 746;
                  continue contLoop;
                }
                this.pc = 737;
                continue contLoop;
              } else if (this.pc === 746) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 745) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced1 = runtime.Str.drop(topic, 1);
                if (sliced1 instanceof runtime.EffectSig.class) {
                  this.pc = 736;
                  sliced1.contTrace.last.next = this;
                  sliced1.contTrace.last = this;
                  return sliced1
                }
                this.pc = 736;
                continue contLoop;
              } else if (this.pc === 736) {
                sliced1 = runtime.resetDepth(sliced1, curDepth);
                this.pc = 744;
                continue contLoop;
              } else if (this.pc === 744) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced1
                ]))
              } else if (this.pc === 743) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced = runtime.Str.drop(topic, 1);
                if (sliced instanceof runtime.EffectSig.class) {
                  this.pc = 734;
                  sliced.contTrace.last.next = this;
                  sliced.contTrace.last = this;
                  return sliced
                }
                this.pc = 734;
                continue contLoop;
              } else if (this.pc === 734) {
                sliced = runtime.resetDepth(sliced, curDepth);
                this.pc = 742;
                continue contLoop;
              } else if (this.pc === 742) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced
                ]))
              } else if (this.pc === 741) {
                runtime.stackDepth = runtime.stackDepth + 1;
                postfix1 = runtime.Tuple.get(arg1, 0);
                if (postfix1 instanceof runtime.EffectSig.class) {
                  this.pc = 732;
                  postfix1.contTrace.last.next = this;
                  postfix1.contTrace.last = this;
                  return postfix1
                }
                this.pc = 732;
                continue contLoop;
              } else if (this.pc === 732) {
                postfix1 = runtime.resetDepth(postfix1, curDepth);
                this.pc = 740;
                continue contLoop;
              } else if (this.pc === 740) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  postfix1
                ]))
              } else if (this.pc === 730) {
                tmp1 = runtime.resetDepth(tmp1, curDepth);
                throw tmp1;
              } else if (this.pc === 739) {
                runtime.stackDepth = runtime.stackDepth + 1;
                postfix = runtime.Tuple.get(arg, 0);
                if (postfix instanceof runtime.EffectSig.class) {
                  this.pc = 729;
                  postfix.contTrace.last.next = this;
                  postfix.contTrace.last = this;
                  return postfix
                }
                this.pc = 729;
                continue contLoop;
              } else if (this.pc === 729) {
                postfix = runtime.resetDepth(postfix, curDepth);
                this.pc = 738;
                continue contLoop;
              } else if (this.pc === 738) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  postfix
                ]))
              } else if (this.pc === 727) {
                tmp = runtime.resetDepth(tmp, curDepth);
                throw tmp;
              }
              break;
            }
          }
          toString() { return "Cont$func$unapplyStringPrefix$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(726);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        selRes = Char.Letter;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp = new globalThis.Error("Access to required field 'Letter' yielded 'undefined'");
          if (tmp instanceof runtime.EffectSig.class) {
            tmp.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(727);
            tmp.contTrace.last = tmp.contTrace.last.next;
            return tmp
          }
          tmp = runtime.resetDepth(tmp, curDepth);
          throw tmp;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapplyStringPrefix(topic));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(728);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth);
        if (matchResult instanceof runtime.MatchResult.class) {
          arg = matchResult.captures;
          runtime.stackDepth = runtime.stackDepth + 1;
          postfix = runtime.Tuple.get(arg, 0);
          if (postfix instanceof runtime.EffectSig.class) {
            postfix.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(729);
            postfix.contTrace.last = postfix.contTrace.last.next;
            return postfix
          }
          postfix = runtime.resetDepth(postfix, curDepth);
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([
            postfix
          ]))
        } else {
          selRes1 = Char.Digit;
          if (selRes1 === undefined) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp1 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
            if (tmp1 instanceof runtime.EffectSig.class) {
              tmp1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(730);
              tmp1.contTrace.last = tmp1.contTrace.last.next;
              return tmp1
            }
            tmp1 = runtime.resetDepth(tmp1, curDepth);
            throw tmp1;
          }
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult1 = runtime.safeCall(selRes1.unapplyStringPrefix(topic));
          if (matchResult1 instanceof runtime.EffectSig.class) {
            matchResult1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(731);
            matchResult1.contTrace.last = matchResult1.contTrace.last.next;
            return matchResult1
          }
          matchResult1 = runtime.resetDepth(matchResult1, curDepth);
          if (matchResult1 instanceof runtime.MatchResult.class) {
            arg1 = matchResult1.captures;
            runtime.stackDepth = runtime.stackDepth + 1;
            postfix1 = runtime.Tuple.get(arg1, 0);
            if (postfix1 instanceof runtime.EffectSig.class) {
              postfix1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(732);
              postfix1.contTrace.last = postfix1.contTrace.last.next;
              return postfix1
            }
            postfix1 = runtime.resetDepth(postfix1, curDepth);
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([
              postfix1
            ]))
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            cond = runtime.Str.startsWith(topic, "_");
            if (cond instanceof runtime.EffectSig.class) {
              cond.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(733);
              cond.contTrace.last = cond.contTrace.last.next;
              return cond
            }
            cond = runtime.resetDepth(cond, curDepth);
            if (cond === true) {
              runtime.stackDepth = runtime.stackDepth + 1;
              sliced = runtime.Str.drop(topic, 1);
              if (sliced instanceof runtime.EffectSig.class) {
                sliced.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(734);
                sliced.contTrace.last = sliced.contTrace.last.next;
                return sliced
              }
              sliced = runtime.resetDepth(sliced, curDepth);
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([
                sliced
              ]))
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              cond1 = runtime.Str.startsWith(topic, "'");
              if (cond1 instanceof runtime.EffectSig.class) {
                cond1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(735);
                cond1.contTrace.last = cond1.contTrace.last.next;
                return cond1
              }
              cond1 = runtime.resetDepth(cond1, curDepth);
              if (cond1 === true) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced1 = runtime.Str.drop(topic, 1);
                if (sliced1 instanceof runtime.EffectSig.class) {
                  sliced1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(736);
                  sliced1.contTrace.last = sliced1.contTrace.last.next;
                  return sliced1
                }
                sliced1 = runtime.resetDepth(sliced1, curDepth);
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced1
                ]))
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              }
            }
          }
        }
      }
      toString() { return "IdentifierBody"; }
    };
    this.IdentifierBody = new IdentifierBody$class;
    this.IdentifierBody.class = IdentifierBody$class;
    const Operator$class = class Operator {
      constructor() {}
      unapply(scrut) {
        let stackDelayRes, Cont$func$unapply$5;
        Cont$func$unapply$5 = function Cont$func$unapply$(pc1) {
          return new Cont$func$unapply$.class(pc1);
        };
        Cont$func$unapply$5.class = class Cont$func$unapply$2 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp;
            tmp = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 751) {
              stackDelayRes = value$;
            }
            contLoop: while (true) {
              if (this.pc === 751) {
                if (scrut === ",") {
                  this.pc = 753;
                  continue contLoop;
                } else {
                  if (scrut === ";") {
                    this.pc = 754;
                    continue contLoop;
                  } else if (scrut === "!") {
                    this.pc = 755;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                  } else if (scrut === "#") {
                    this.pc = 756;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                  } else if (scrut === "%") {
                    this.pc = 757;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                  } else if (scrut === "&") {
                    this.pc = 758;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                    this.pc = 752;
                    continue contLoop;
                  } else {
                    if (scrut === "*") {
                      this.pc = 759;
                      continue contLoop;
                    } else if (scrut === "+") {
                      this.pc = 760;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                    } else if (scrut === "-") {
                      this.pc = 761;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                    } else if (scrut === "/") {
                      this.pc = 762;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                    } else if (scrut === ":") {
                      this.pc = 763;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                      this.pc = 752;
                      continue contLoop;
                    } else {
                      if (scrut === "<") {
                        this.pc = 764;
                        continue contLoop;
                      } else if (scrut === "=") {
                        this.pc = 765;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                      } else if (scrut === ">") {
                        this.pc = 766;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                      } else if (scrut === "?") {
                        this.pc = 767;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                      } else if (scrut === "@") {
                        this.pc = 768;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                        this.pc = 752;
                        continue contLoop;
                      } else {
                        if (scrut === "\\") {
                          this.pc = 769;
                          continue contLoop;
                        } else if (scrut === "^") {
                          this.pc = 770;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                        } else if (scrut === "|") {
                          this.pc = 771;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                        } else if (scrut === "~") {
                          this.pc = 772;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                        } else if (scrut === ".") {
                          this.pc = 773;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                          this.pc = 752;
                          continue contLoop;
                        } else {
                          this.pc = 774;
                          continue contLoop;
                        }
                        this.pc = 752;
                        continue contLoop;
                      }
                      this.pc = 752;
                      continue contLoop;
                    }
                    this.pc = 752;
                    continue contLoop;
                  }
                  this.pc = 752;
                  continue contLoop;
                }
                this.pc = 752;
                continue contLoop;
              } else if (this.pc === 752) {
                break contLoop;
              } else if (this.pc === 774) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 773) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 772) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 771) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 770) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 769) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 768) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 767) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 766) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 765) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 764) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 763) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 762) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 761) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 760) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 759) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 758) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 757) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 756) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 755) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 754) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 753) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              }
              break;
            }
          }
          toString() { return "Cont$func$unapply$(" + runtime.render(this.pc) + ")"; }
        };
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapply$5.class(751);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        if (scrut === ",") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          if (scrut === ";") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "!") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "#") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "%") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "&") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "*") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "+") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "-") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === "/") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else if (scrut === ":") {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([]))
          } else {
            if (scrut === "<") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "=") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === ">") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "?") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "@") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "\\") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "^") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "|") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === "~") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else if (scrut === ".") {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([]))
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchFailure())
            }
          }
        }
      } 
      unapplyStringPrefix(topic) {
        let cond, sliced, cond1, sliced1, cond2, sliced2, cond3, sliced3, cond4, sliced4, cond5, sliced5, cond6, sliced6, cond7, sliced7, cond8, sliced8, cond9, sliced9, cond10, sliced10, cond11, sliced11, cond12, sliced12, cond13, sliced13, cond14, sliced14, cond15, sliced15, cond16, sliced16, cond17, sliced17, cond18, sliced18, cond19, sliced19, cond20, sliced20, curDepth, stackDelayRes, Cont$func$unapplyStringPrefix$5;
        Cont$func$unapplyStringPrefix$5 = function Cont$func$unapplyStringPrefix$(pc1) {
          return new Cont$func$unapplyStringPrefix$.class(pc1);
        };
        Cont$func$unapplyStringPrefix$5.class = class Cont$func$unapplyStringPrefix$2 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp;
            tmp = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 775) {
              stackDelayRes = value$;
            } else if (this.pc === 776) {
              cond = value$;
            } else if (this.pc === 778) {
              cond1 = value$;
            } else if (this.pc === 780) {
              cond2 = value$;
            } else if (this.pc === 782) {
              cond3 = value$;
            } else if (this.pc === 784) {
              cond4 = value$;
            } else if (this.pc === 786) {
              cond5 = value$;
            } else if (this.pc === 788) {
              cond6 = value$;
            } else if (this.pc === 790) {
              cond7 = value$;
            } else if (this.pc === 792) {
              cond8 = value$;
            } else if (this.pc === 794) {
              cond9 = value$;
            } else if (this.pc === 796) {
              cond10 = value$;
            } else if (this.pc === 798) {
              cond11 = value$;
            } else if (this.pc === 800) {
              cond12 = value$;
            } else if (this.pc === 802) {
              cond13 = value$;
            } else if (this.pc === 804) {
              cond14 = value$;
            } else if (this.pc === 806) {
              cond15 = value$;
            } else if (this.pc === 808) {
              cond16 = value$;
            } else if (this.pc === 810) {
              cond17 = value$;
            } else if (this.pc === 812) {
              cond18 = value$;
            } else if (this.pc === 814) {
              cond19 = value$;
            } else if (this.pc === 816) {
              cond20 = value$;
            } else if (this.pc === 817) {
              sliced20 = value$;
            } else if (this.pc === 815) {
              sliced19 = value$;
            } else if (this.pc === 813) {
              sliced18 = value$;
            } else if (this.pc === 811) {
              sliced17 = value$;
            } else if (this.pc === 809) {
              sliced16 = value$;
            } else if (this.pc === 807) {
              sliced15 = value$;
            } else if (this.pc === 805) {
              sliced14 = value$;
            } else if (this.pc === 803) {
              sliced13 = value$;
            } else if (this.pc === 801) {
              sliced12 = value$;
            } else if (this.pc === 799) {
              sliced11 = value$;
            } else if (this.pc === 797) {
              sliced10 = value$;
            } else if (this.pc === 795) {
              sliced9 = value$;
            } else if (this.pc === 793) {
              sliced8 = value$;
            } else if (this.pc === 791) {
              sliced7 = value$;
            } else if (this.pc === 789) {
              sliced6 = value$;
            } else if (this.pc === 787) {
              sliced5 = value$;
            } else if (this.pc === 785) {
              sliced4 = value$;
            } else if (this.pc === 783) {
              sliced3 = value$;
            } else if (this.pc === 781) {
              sliced2 = value$;
            } else if (this.pc === 779) {
              sliced1 = value$;
            } else if (this.pc === 777) {
              sliced = value$;
            }
            contLoop: while (true) {
              if (this.pc === 775) {
                this.pc = 882;
                continue contLoop;
              } else if (this.pc === 882) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond = runtime.Str.startsWith(topic, ",");
                if (cond instanceof runtime.EffectSig.class) {
                  this.pc = 776;
                  cond.contTrace.last.next = this;
                  cond.contTrace.last = this;
                  return cond
                }
                this.pc = 776;
                continue contLoop;
              } else if (this.pc === 776) {
                cond = runtime.resetDepth(cond, curDepth);
                if (cond === true) {
                  this.pc = 820;
                  continue contLoop;
                } else {
                  this.pc = 881;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 818) {
                break contLoop;
              } else if (this.pc === 881) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond1 = runtime.Str.startsWith(topic, ";");
                if (cond1 instanceof runtime.EffectSig.class) {
                  this.pc = 778;
                  cond1.contTrace.last.next = this;
                  cond1.contTrace.last = this;
                  return cond1
                }
                this.pc = 778;
                continue contLoop;
              } else if (this.pc === 778) {
                cond1 = runtime.resetDepth(cond1, curDepth);
                if (cond1 === true) {
                  this.pc = 822;
                  continue contLoop;
                } else {
                  this.pc = 880;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 880) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond2 = runtime.Str.startsWith(topic, "!");
                if (cond2 instanceof runtime.EffectSig.class) {
                  this.pc = 780;
                  cond2.contTrace.last.next = this;
                  cond2.contTrace.last = this;
                  return cond2
                }
                this.pc = 780;
                continue contLoop;
              } else if (this.pc === 780) {
                cond2 = runtime.resetDepth(cond2, curDepth);
                if (cond2 === true) {
                  this.pc = 824;
                  continue contLoop;
                } else {
                  this.pc = 879;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 879) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond3 = runtime.Str.startsWith(topic, "#");
                if (cond3 instanceof runtime.EffectSig.class) {
                  this.pc = 782;
                  cond3.contTrace.last.next = this;
                  cond3.contTrace.last = this;
                  return cond3
                }
                this.pc = 782;
                continue contLoop;
              } else if (this.pc === 782) {
                cond3 = runtime.resetDepth(cond3, curDepth);
                if (cond3 === true) {
                  this.pc = 826;
                  continue contLoop;
                } else {
                  this.pc = 878;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 878) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond4 = runtime.Str.startsWith(topic, "%");
                if (cond4 instanceof runtime.EffectSig.class) {
                  this.pc = 784;
                  cond4.contTrace.last.next = this;
                  cond4.contTrace.last = this;
                  return cond4
                }
                this.pc = 784;
                continue contLoop;
              } else if (this.pc === 784) {
                cond4 = runtime.resetDepth(cond4, curDepth);
                if (cond4 === true) {
                  this.pc = 828;
                  continue contLoop;
                } else {
                  this.pc = 877;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 877) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond5 = runtime.Str.startsWith(topic, "&");
                if (cond5 instanceof runtime.EffectSig.class) {
                  this.pc = 786;
                  cond5.contTrace.last.next = this;
                  cond5.contTrace.last = this;
                  return cond5
                }
                this.pc = 786;
                continue contLoop;
              } else if (this.pc === 786) {
                cond5 = runtime.resetDepth(cond5, curDepth);
                if (cond5 === true) {
                  this.pc = 830;
                  continue contLoop;
                } else {
                  this.pc = 876;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 876) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond6 = runtime.Str.startsWith(topic, "*");
                if (cond6 instanceof runtime.EffectSig.class) {
                  this.pc = 788;
                  cond6.contTrace.last.next = this;
                  cond6.contTrace.last = this;
                  return cond6
                }
                this.pc = 788;
                continue contLoop;
              } else if (this.pc === 788) {
                cond6 = runtime.resetDepth(cond6, curDepth);
                if (cond6 === true) {
                  this.pc = 832;
                  continue contLoop;
                } else {
                  this.pc = 875;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 875) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond7 = runtime.Str.startsWith(topic, "+");
                if (cond7 instanceof runtime.EffectSig.class) {
                  this.pc = 790;
                  cond7.contTrace.last.next = this;
                  cond7.contTrace.last = this;
                  return cond7
                }
                this.pc = 790;
                continue contLoop;
              } else if (this.pc === 790) {
                cond7 = runtime.resetDepth(cond7, curDepth);
                if (cond7 === true) {
                  this.pc = 834;
                  continue contLoop;
                } else {
                  this.pc = 874;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 874) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond8 = runtime.Str.startsWith(topic, "-");
                if (cond8 instanceof runtime.EffectSig.class) {
                  this.pc = 792;
                  cond8.contTrace.last.next = this;
                  cond8.contTrace.last = this;
                  return cond8
                }
                this.pc = 792;
                continue contLoop;
              } else if (this.pc === 792) {
                cond8 = runtime.resetDepth(cond8, curDepth);
                if (cond8 === true) {
                  this.pc = 836;
                  continue contLoop;
                } else {
                  this.pc = 873;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 873) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond9 = runtime.Str.startsWith(topic, "/");
                if (cond9 instanceof runtime.EffectSig.class) {
                  this.pc = 794;
                  cond9.contTrace.last.next = this;
                  cond9.contTrace.last = this;
                  return cond9
                }
                this.pc = 794;
                continue contLoop;
              } else if (this.pc === 794) {
                cond9 = runtime.resetDepth(cond9, curDepth);
                if (cond9 === true) {
                  this.pc = 838;
                  continue contLoop;
                } else {
                  this.pc = 872;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 872) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond10 = runtime.Str.startsWith(topic, ":");
                if (cond10 instanceof runtime.EffectSig.class) {
                  this.pc = 796;
                  cond10.contTrace.last.next = this;
                  cond10.contTrace.last = this;
                  return cond10
                }
                this.pc = 796;
                continue contLoop;
              } else if (this.pc === 796) {
                cond10 = runtime.resetDepth(cond10, curDepth);
                if (cond10 === true) {
                  this.pc = 840;
                  continue contLoop;
                } else {
                  this.pc = 871;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 871) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond11 = runtime.Str.startsWith(topic, "<");
                if (cond11 instanceof runtime.EffectSig.class) {
                  this.pc = 798;
                  cond11.contTrace.last.next = this;
                  cond11.contTrace.last = this;
                  return cond11
                }
                this.pc = 798;
                continue contLoop;
              } else if (this.pc === 798) {
                cond11 = runtime.resetDepth(cond11, curDepth);
                if (cond11 === true) {
                  this.pc = 842;
                  continue contLoop;
                } else {
                  this.pc = 870;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 870) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond12 = runtime.Str.startsWith(topic, "=");
                if (cond12 instanceof runtime.EffectSig.class) {
                  this.pc = 800;
                  cond12.contTrace.last.next = this;
                  cond12.contTrace.last = this;
                  return cond12
                }
                this.pc = 800;
                continue contLoop;
              } else if (this.pc === 800) {
                cond12 = runtime.resetDepth(cond12, curDepth);
                if (cond12 === true) {
                  this.pc = 844;
                  continue contLoop;
                } else {
                  this.pc = 869;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 869) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond13 = runtime.Str.startsWith(topic, ">");
                if (cond13 instanceof runtime.EffectSig.class) {
                  this.pc = 802;
                  cond13.contTrace.last.next = this;
                  cond13.contTrace.last = this;
                  return cond13
                }
                this.pc = 802;
                continue contLoop;
              } else if (this.pc === 802) {
                cond13 = runtime.resetDepth(cond13, curDepth);
                if (cond13 === true) {
                  this.pc = 846;
                  continue contLoop;
                } else {
                  this.pc = 868;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 868) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond14 = runtime.Str.startsWith(topic, "?");
                if (cond14 instanceof runtime.EffectSig.class) {
                  this.pc = 804;
                  cond14.contTrace.last.next = this;
                  cond14.contTrace.last = this;
                  return cond14
                }
                this.pc = 804;
                continue contLoop;
              } else if (this.pc === 804) {
                cond14 = runtime.resetDepth(cond14, curDepth);
                if (cond14 === true) {
                  this.pc = 848;
                  continue contLoop;
                } else {
                  this.pc = 867;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 867) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond15 = runtime.Str.startsWith(topic, "@");
                if (cond15 instanceof runtime.EffectSig.class) {
                  this.pc = 806;
                  cond15.contTrace.last.next = this;
                  cond15.contTrace.last = this;
                  return cond15
                }
                this.pc = 806;
                continue contLoop;
              } else if (this.pc === 806) {
                cond15 = runtime.resetDepth(cond15, curDepth);
                if (cond15 === true) {
                  this.pc = 850;
                  continue contLoop;
                } else {
                  this.pc = 866;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 866) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond16 = runtime.Str.startsWith(topic, "\\");
                if (cond16 instanceof runtime.EffectSig.class) {
                  this.pc = 808;
                  cond16.contTrace.last.next = this;
                  cond16.contTrace.last = this;
                  return cond16
                }
                this.pc = 808;
                continue contLoop;
              } else if (this.pc === 808) {
                cond16 = runtime.resetDepth(cond16, curDepth);
                if (cond16 === true) {
                  this.pc = 852;
                  continue contLoop;
                } else {
                  this.pc = 865;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 865) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond17 = runtime.Str.startsWith(topic, "^");
                if (cond17 instanceof runtime.EffectSig.class) {
                  this.pc = 810;
                  cond17.contTrace.last.next = this;
                  cond17.contTrace.last = this;
                  return cond17
                }
                this.pc = 810;
                continue contLoop;
              } else if (this.pc === 810) {
                cond17 = runtime.resetDepth(cond17, curDepth);
                if (cond17 === true) {
                  this.pc = 854;
                  continue contLoop;
                } else {
                  this.pc = 864;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 864) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond18 = runtime.Str.startsWith(topic, "|");
                if (cond18 instanceof runtime.EffectSig.class) {
                  this.pc = 812;
                  cond18.contTrace.last.next = this;
                  cond18.contTrace.last = this;
                  return cond18
                }
                this.pc = 812;
                continue contLoop;
              } else if (this.pc === 812) {
                cond18 = runtime.resetDepth(cond18, curDepth);
                if (cond18 === true) {
                  this.pc = 856;
                  continue contLoop;
                } else {
                  this.pc = 863;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 863) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond19 = runtime.Str.startsWith(topic, "~");
                if (cond19 instanceof runtime.EffectSig.class) {
                  this.pc = 814;
                  cond19.contTrace.last.next = this;
                  cond19.contTrace.last = this;
                  return cond19
                }
                this.pc = 814;
                continue contLoop;
              } else if (this.pc === 814) {
                cond19 = runtime.resetDepth(cond19, curDepth);
                if (cond19 === true) {
                  this.pc = 858;
                  continue contLoop;
                } else {
                  this.pc = 862;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 862) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond20 = runtime.Str.startsWith(topic, ".");
                if (cond20 instanceof runtime.EffectSig.class) {
                  this.pc = 816;
                  cond20.contTrace.last.next = this;
                  cond20.contTrace.last = this;
                  return cond20
                }
                this.pc = 816;
                continue contLoop;
              } else if (this.pc === 816) {
                cond20 = runtime.resetDepth(cond20, curDepth);
                if (cond20 === true) {
                  this.pc = 860;
                  continue contLoop;
                } else {
                  this.pc = 861;
                  continue contLoop;
                }
                this.pc = 818;
                continue contLoop;
              } else if (this.pc === 861) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 860) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced20 = runtime.Str.drop(topic, 1);
                if (sliced20 instanceof runtime.EffectSig.class) {
                  this.pc = 817;
                  sliced20.contTrace.last.next = this;
                  sliced20.contTrace.last = this;
                  return sliced20
                }
                this.pc = 817;
                continue contLoop;
              } else if (this.pc === 817) {
                sliced20 = runtime.resetDepth(sliced20, curDepth);
                this.pc = 859;
                continue contLoop;
              } else if (this.pc === 859) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced20
                ]))
              } else if (this.pc === 858) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced19 = runtime.Str.drop(topic, 1);
                if (sliced19 instanceof runtime.EffectSig.class) {
                  this.pc = 815;
                  sliced19.contTrace.last.next = this;
                  sliced19.contTrace.last = this;
                  return sliced19
                }
                this.pc = 815;
                continue contLoop;
              } else if (this.pc === 815) {
                sliced19 = runtime.resetDepth(sliced19, curDepth);
                this.pc = 857;
                continue contLoop;
              } else if (this.pc === 857) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced19
                ]))
              } else if (this.pc === 856) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced18 = runtime.Str.drop(topic, 1);
                if (sliced18 instanceof runtime.EffectSig.class) {
                  this.pc = 813;
                  sliced18.contTrace.last.next = this;
                  sliced18.contTrace.last = this;
                  return sliced18
                }
                this.pc = 813;
                continue contLoop;
              } else if (this.pc === 813) {
                sliced18 = runtime.resetDepth(sliced18, curDepth);
                this.pc = 855;
                continue contLoop;
              } else if (this.pc === 855) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced18
                ]))
              } else if (this.pc === 854) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced17 = runtime.Str.drop(topic, 1);
                if (sliced17 instanceof runtime.EffectSig.class) {
                  this.pc = 811;
                  sliced17.contTrace.last.next = this;
                  sliced17.contTrace.last = this;
                  return sliced17
                }
                this.pc = 811;
                continue contLoop;
              } else if (this.pc === 811) {
                sliced17 = runtime.resetDepth(sliced17, curDepth);
                this.pc = 853;
                continue contLoop;
              } else if (this.pc === 853) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced17
                ]))
              } else if (this.pc === 852) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced16 = runtime.Str.drop(topic, 1);
                if (sliced16 instanceof runtime.EffectSig.class) {
                  this.pc = 809;
                  sliced16.contTrace.last.next = this;
                  sliced16.contTrace.last = this;
                  return sliced16
                }
                this.pc = 809;
                continue contLoop;
              } else if (this.pc === 809) {
                sliced16 = runtime.resetDepth(sliced16, curDepth);
                this.pc = 851;
                continue contLoop;
              } else if (this.pc === 851) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced16
                ]))
              } else if (this.pc === 850) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced15 = runtime.Str.drop(topic, 1);
                if (sliced15 instanceof runtime.EffectSig.class) {
                  this.pc = 807;
                  sliced15.contTrace.last.next = this;
                  sliced15.contTrace.last = this;
                  return sliced15
                }
                this.pc = 807;
                continue contLoop;
              } else if (this.pc === 807) {
                sliced15 = runtime.resetDepth(sliced15, curDepth);
                this.pc = 849;
                continue contLoop;
              } else if (this.pc === 849) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced15
                ]))
              } else if (this.pc === 848) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced14 = runtime.Str.drop(topic, 1);
                if (sliced14 instanceof runtime.EffectSig.class) {
                  this.pc = 805;
                  sliced14.contTrace.last.next = this;
                  sliced14.contTrace.last = this;
                  return sliced14
                }
                this.pc = 805;
                continue contLoop;
              } else if (this.pc === 805) {
                sliced14 = runtime.resetDepth(sliced14, curDepth);
                this.pc = 847;
                continue contLoop;
              } else if (this.pc === 847) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced14
                ]))
              } else if (this.pc === 846) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced13 = runtime.Str.drop(topic, 1);
                if (sliced13 instanceof runtime.EffectSig.class) {
                  this.pc = 803;
                  sliced13.contTrace.last.next = this;
                  sliced13.contTrace.last = this;
                  return sliced13
                }
                this.pc = 803;
                continue contLoop;
              } else if (this.pc === 803) {
                sliced13 = runtime.resetDepth(sliced13, curDepth);
                this.pc = 845;
                continue contLoop;
              } else if (this.pc === 845) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced13
                ]))
              } else if (this.pc === 844) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced12 = runtime.Str.drop(topic, 1);
                if (sliced12 instanceof runtime.EffectSig.class) {
                  this.pc = 801;
                  sliced12.contTrace.last.next = this;
                  sliced12.contTrace.last = this;
                  return sliced12
                }
                this.pc = 801;
                continue contLoop;
              } else if (this.pc === 801) {
                sliced12 = runtime.resetDepth(sliced12, curDepth);
                this.pc = 843;
                continue contLoop;
              } else if (this.pc === 843) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced12
                ]))
              } else if (this.pc === 842) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced11 = runtime.Str.drop(topic, 1);
                if (sliced11 instanceof runtime.EffectSig.class) {
                  this.pc = 799;
                  sliced11.contTrace.last.next = this;
                  sliced11.contTrace.last = this;
                  return sliced11
                }
                this.pc = 799;
                continue contLoop;
              } else if (this.pc === 799) {
                sliced11 = runtime.resetDepth(sliced11, curDepth);
                this.pc = 841;
                continue contLoop;
              } else if (this.pc === 841) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced11
                ]))
              } else if (this.pc === 840) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced10 = runtime.Str.drop(topic, 1);
                if (sliced10 instanceof runtime.EffectSig.class) {
                  this.pc = 797;
                  sliced10.contTrace.last.next = this;
                  sliced10.contTrace.last = this;
                  return sliced10
                }
                this.pc = 797;
                continue contLoop;
              } else if (this.pc === 797) {
                sliced10 = runtime.resetDepth(sliced10, curDepth);
                this.pc = 839;
                continue contLoop;
              } else if (this.pc === 839) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced10
                ]))
              } else if (this.pc === 838) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced9 = runtime.Str.drop(topic, 1);
                if (sliced9 instanceof runtime.EffectSig.class) {
                  this.pc = 795;
                  sliced9.contTrace.last.next = this;
                  sliced9.contTrace.last = this;
                  return sliced9
                }
                this.pc = 795;
                continue contLoop;
              } else if (this.pc === 795) {
                sliced9 = runtime.resetDepth(sliced9, curDepth);
                this.pc = 837;
                continue contLoop;
              } else if (this.pc === 837) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced9
                ]))
              } else if (this.pc === 836) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced8 = runtime.Str.drop(topic, 1);
                if (sliced8 instanceof runtime.EffectSig.class) {
                  this.pc = 793;
                  sliced8.contTrace.last.next = this;
                  sliced8.contTrace.last = this;
                  return sliced8
                }
                this.pc = 793;
                continue contLoop;
              } else if (this.pc === 793) {
                sliced8 = runtime.resetDepth(sliced8, curDepth);
                this.pc = 835;
                continue contLoop;
              } else if (this.pc === 835) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced8
                ]))
              } else if (this.pc === 834) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced7 = runtime.Str.drop(topic, 1);
                if (sliced7 instanceof runtime.EffectSig.class) {
                  this.pc = 791;
                  sliced7.contTrace.last.next = this;
                  sliced7.contTrace.last = this;
                  return sliced7
                }
                this.pc = 791;
                continue contLoop;
              } else if (this.pc === 791) {
                sliced7 = runtime.resetDepth(sliced7, curDepth);
                this.pc = 833;
                continue contLoop;
              } else if (this.pc === 833) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced7
                ]))
              } else if (this.pc === 832) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced6 = runtime.Str.drop(topic, 1);
                if (sliced6 instanceof runtime.EffectSig.class) {
                  this.pc = 789;
                  sliced6.contTrace.last.next = this;
                  sliced6.contTrace.last = this;
                  return sliced6
                }
                this.pc = 789;
                continue contLoop;
              } else if (this.pc === 789) {
                sliced6 = runtime.resetDepth(sliced6, curDepth);
                this.pc = 831;
                continue contLoop;
              } else if (this.pc === 831) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced6
                ]))
              } else if (this.pc === 830) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced5 = runtime.Str.drop(topic, 1);
                if (sliced5 instanceof runtime.EffectSig.class) {
                  this.pc = 787;
                  sliced5.contTrace.last.next = this;
                  sliced5.contTrace.last = this;
                  return sliced5
                }
                this.pc = 787;
                continue contLoop;
              } else if (this.pc === 787) {
                sliced5 = runtime.resetDepth(sliced5, curDepth);
                this.pc = 829;
                continue contLoop;
              } else if (this.pc === 829) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced5
                ]))
              } else if (this.pc === 828) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced4 = runtime.Str.drop(topic, 1);
                if (sliced4 instanceof runtime.EffectSig.class) {
                  this.pc = 785;
                  sliced4.contTrace.last.next = this;
                  sliced4.contTrace.last = this;
                  return sliced4
                }
                this.pc = 785;
                continue contLoop;
              } else if (this.pc === 785) {
                sliced4 = runtime.resetDepth(sliced4, curDepth);
                this.pc = 827;
                continue contLoop;
              } else if (this.pc === 827) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced4
                ]))
              } else if (this.pc === 826) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced3 = runtime.Str.drop(topic, 1);
                if (sliced3 instanceof runtime.EffectSig.class) {
                  this.pc = 783;
                  sliced3.contTrace.last.next = this;
                  sliced3.contTrace.last = this;
                  return sliced3
                }
                this.pc = 783;
                continue contLoop;
              } else if (this.pc === 783) {
                sliced3 = runtime.resetDepth(sliced3, curDepth);
                this.pc = 825;
                continue contLoop;
              } else if (this.pc === 825) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced3
                ]))
              } else if (this.pc === 824) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced2 = runtime.Str.drop(topic, 1);
                if (sliced2 instanceof runtime.EffectSig.class) {
                  this.pc = 781;
                  sliced2.contTrace.last.next = this;
                  sliced2.contTrace.last = this;
                  return sliced2
                }
                this.pc = 781;
                continue contLoop;
              } else if (this.pc === 781) {
                sliced2 = runtime.resetDepth(sliced2, curDepth);
                this.pc = 823;
                continue contLoop;
              } else if (this.pc === 823) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced2
                ]))
              } else if (this.pc === 822) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced1 = runtime.Str.drop(topic, 1);
                if (sliced1 instanceof runtime.EffectSig.class) {
                  this.pc = 779;
                  sliced1.contTrace.last.next = this;
                  sliced1.contTrace.last = this;
                  return sliced1
                }
                this.pc = 779;
                continue contLoop;
              } else if (this.pc === 779) {
                sliced1 = runtime.resetDepth(sliced1, curDepth);
                this.pc = 821;
                continue contLoop;
              } else if (this.pc === 821) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced1
                ]))
              } else if (this.pc === 820) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced = runtime.Str.drop(topic, 1);
                if (sliced instanceof runtime.EffectSig.class) {
                  this.pc = 777;
                  sliced.contTrace.last.next = this;
                  sliced.contTrace.last = this;
                  return sliced
                }
                this.pc = 777;
                continue contLoop;
              } else if (this.pc === 777) {
                sliced = runtime.resetDepth(sliced, curDepth);
                this.pc = 819;
                continue contLoop;
              } else if (this.pc === 819) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced
                ]))
              }
              break;
            }
          }
          toString() { return "Cont$func$unapplyStringPrefix$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(775);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        cond = runtime.Str.startsWith(topic, ",");
        if (cond instanceof runtime.EffectSig.class) {
          cond.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(776);
          cond.contTrace.last = cond.contTrace.last.next;
          return cond
        }
        cond = runtime.resetDepth(cond, curDepth);
        if (cond === true) {
          runtime.stackDepth = runtime.stackDepth + 1;
          sliced = runtime.Str.drop(topic, 1);
          if (sliced instanceof runtime.EffectSig.class) {
            sliced.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(777);
            sliced.contTrace.last = sliced.contTrace.last.next;
            return sliced
          }
          sliced = runtime.resetDepth(sliced, curDepth);
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([
            sliced
          ]))
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          cond1 = runtime.Str.startsWith(topic, ";");
          if (cond1 instanceof runtime.EffectSig.class) {
            cond1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(778);
            cond1.contTrace.last = cond1.contTrace.last.next;
            return cond1
          }
          cond1 = runtime.resetDepth(cond1, curDepth);
          if (cond1 === true) {
            runtime.stackDepth = runtime.stackDepth + 1;
            sliced1 = runtime.Str.drop(topic, 1);
            if (sliced1 instanceof runtime.EffectSig.class) {
              sliced1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(779);
              sliced1.contTrace.last = sliced1.contTrace.last.next;
              return sliced1
            }
            sliced1 = runtime.resetDepth(sliced1, curDepth);
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([
              sliced1
            ]))
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            cond2 = runtime.Str.startsWith(topic, "!");
            if (cond2 instanceof runtime.EffectSig.class) {
              cond2.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(780);
              cond2.contTrace.last = cond2.contTrace.last.next;
              return cond2
            }
            cond2 = runtime.resetDepth(cond2, curDepth);
            if (cond2 === true) {
              runtime.stackDepth = runtime.stackDepth + 1;
              sliced2 = runtime.Str.drop(topic, 1);
              if (sliced2 instanceof runtime.EffectSig.class) {
                sliced2.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(781);
                sliced2.contTrace.last = sliced2.contTrace.last.next;
                return sliced2
              }
              sliced2 = runtime.resetDepth(sliced2, curDepth);
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([
                sliced2
              ]))
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              cond3 = runtime.Str.startsWith(topic, "#");
              if (cond3 instanceof runtime.EffectSig.class) {
                cond3.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(782);
                cond3.contTrace.last = cond3.contTrace.last.next;
                return cond3
              }
              cond3 = runtime.resetDepth(cond3, curDepth);
              if (cond3 === true) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced3 = runtime.Str.drop(topic, 1);
                if (sliced3 instanceof runtime.EffectSig.class) {
                  sliced3.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(783);
                  sliced3.contTrace.last = sliced3.contTrace.last.next;
                  return sliced3
                }
                sliced3 = runtime.resetDepth(sliced3, curDepth);
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced3
                ]))
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond4 = runtime.Str.startsWith(topic, "%");
                if (cond4 instanceof runtime.EffectSig.class) {
                  cond4.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(784);
                  cond4.contTrace.last = cond4.contTrace.last.next;
                  return cond4
                }
                cond4 = runtime.resetDepth(cond4, curDepth);
                if (cond4 === true) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  sliced4 = runtime.Str.drop(topic, 1);
                  if (sliced4 instanceof runtime.EffectSig.class) {
                    sliced4.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(785);
                    sliced4.contTrace.last = sliced4.contTrace.last.next;
                    return sliced4
                  }
                  sliced4 = runtime.resetDepth(sliced4, curDepth);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  return runtime.safeCall(runtime.MatchResult([
                    sliced4
                  ]))
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  cond5 = runtime.Str.startsWith(topic, "&");
                  if (cond5 instanceof runtime.EffectSig.class) {
                    cond5.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(786);
                    cond5.contTrace.last = cond5.contTrace.last.next;
                    return cond5
                  }
                  cond5 = runtime.resetDepth(cond5, curDepth);
                  if (cond5 === true) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    sliced5 = runtime.Str.drop(topic, 1);
                    if (sliced5 instanceof runtime.EffectSig.class) {
                      sliced5.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(787);
                      sliced5.contTrace.last = sliced5.contTrace.last.next;
                      return sliced5
                    }
                    sliced5 = runtime.resetDepth(sliced5, curDepth);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    return runtime.safeCall(runtime.MatchResult([
                      sliced5
                    ]))
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    cond6 = runtime.Str.startsWith(topic, "*");
                    if (cond6 instanceof runtime.EffectSig.class) {
                      cond6.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(788);
                      cond6.contTrace.last = cond6.contTrace.last.next;
                      return cond6
                    }
                    cond6 = runtime.resetDepth(cond6, curDepth);
                    if (cond6 === true) {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      sliced6 = runtime.Str.drop(topic, 1);
                      if (sliced6 instanceof runtime.EffectSig.class) {
                        sliced6.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(789);
                        sliced6.contTrace.last = sliced6.contTrace.last.next;
                        return sliced6
                      }
                      sliced6 = runtime.resetDepth(sliced6, curDepth);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      return runtime.safeCall(runtime.MatchResult([
                        sliced6
                      ]))
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      cond7 = runtime.Str.startsWith(topic, "+");
                      if (cond7 instanceof runtime.EffectSig.class) {
                        cond7.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(790);
                        cond7.contTrace.last = cond7.contTrace.last.next;
                        return cond7
                      }
                      cond7 = runtime.resetDepth(cond7, curDepth);
                      if (cond7 === true) {
                        runtime.stackDepth = runtime.stackDepth + 1;
                        sliced7 = runtime.Str.drop(topic, 1);
                        if (sliced7 instanceof runtime.EffectSig.class) {
                          sliced7.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(791);
                          sliced7.contTrace.last = sliced7.contTrace.last.next;
                          return sliced7
                        }
                        sliced7 = runtime.resetDepth(sliced7, curDepth);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        return runtime.safeCall(runtime.MatchResult([
                          sliced7
                        ]))
                      } else {
                        runtime.stackDepth = runtime.stackDepth + 1;
                        cond8 = runtime.Str.startsWith(topic, "-");
                        if (cond8 instanceof runtime.EffectSig.class) {
                          cond8.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(792);
                          cond8.contTrace.last = cond8.contTrace.last.next;
                          return cond8
                        }
                        cond8 = runtime.resetDepth(cond8, curDepth);
                        if (cond8 === true) {
                          runtime.stackDepth = runtime.stackDepth + 1;
                          sliced8 = runtime.Str.drop(topic, 1);
                          if (sliced8 instanceof runtime.EffectSig.class) {
                            sliced8.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(793);
                            sliced8.contTrace.last = sliced8.contTrace.last.next;
                            return sliced8
                          }
                          sliced8 = runtime.resetDepth(sliced8, curDepth);
                          runtime.stackDepth = runtime.stackDepth + 1;
                          return runtime.safeCall(runtime.MatchResult([
                            sliced8
                          ]))
                        } else {
                          runtime.stackDepth = runtime.stackDepth + 1;
                          cond9 = runtime.Str.startsWith(topic, "/");
                          if (cond9 instanceof runtime.EffectSig.class) {
                            cond9.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(794);
                            cond9.contTrace.last = cond9.contTrace.last.next;
                            return cond9
                          }
                          cond9 = runtime.resetDepth(cond9, curDepth);
                          if (cond9 === true) {
                            runtime.stackDepth = runtime.stackDepth + 1;
                            sliced9 = runtime.Str.drop(topic, 1);
                            if (sliced9 instanceof runtime.EffectSig.class) {
                              sliced9.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(795);
                              sliced9.contTrace.last = sliced9.contTrace.last.next;
                              return sliced9
                            }
                            sliced9 = runtime.resetDepth(sliced9, curDepth);
                            runtime.stackDepth = runtime.stackDepth + 1;
                            return runtime.safeCall(runtime.MatchResult([
                              sliced9
                            ]))
                          } else {
                            runtime.stackDepth = runtime.stackDepth + 1;
                            cond10 = runtime.Str.startsWith(topic, ":");
                            if (cond10 instanceof runtime.EffectSig.class) {
                              cond10.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(796);
                              cond10.contTrace.last = cond10.contTrace.last.next;
                              return cond10
                            }
                            cond10 = runtime.resetDepth(cond10, curDepth);
                            if (cond10 === true) {
                              runtime.stackDepth = runtime.stackDepth + 1;
                              sliced10 = runtime.Str.drop(topic, 1);
                              if (sliced10 instanceof runtime.EffectSig.class) {
                                sliced10.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(797);
                                sliced10.contTrace.last = sliced10.contTrace.last.next;
                                return sliced10
                              }
                              sliced10 = runtime.resetDepth(sliced10, curDepth);
                              runtime.stackDepth = runtime.stackDepth + 1;
                              return runtime.safeCall(runtime.MatchResult([
                                sliced10
                              ]))
                            } else {
                              runtime.stackDepth = runtime.stackDepth + 1;
                              cond11 = runtime.Str.startsWith(topic, "<");
                              if (cond11 instanceof runtime.EffectSig.class) {
                                cond11.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(798);
                                cond11.contTrace.last = cond11.contTrace.last.next;
                                return cond11
                              }
                              cond11 = runtime.resetDepth(cond11, curDepth);
                              if (cond11 === true) {
                                runtime.stackDepth = runtime.stackDepth + 1;
                                sliced11 = runtime.Str.drop(topic, 1);
                                if (sliced11 instanceof runtime.EffectSig.class) {
                                  sliced11.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(799);
                                  sliced11.contTrace.last = sliced11.contTrace.last.next;
                                  return sliced11
                                }
                                sliced11 = runtime.resetDepth(sliced11, curDepth);
                                runtime.stackDepth = runtime.stackDepth + 1;
                                return runtime.safeCall(runtime.MatchResult([
                                  sliced11
                                ]))
                              } else {
                                runtime.stackDepth = runtime.stackDepth + 1;
                                cond12 = runtime.Str.startsWith(topic, "=");
                                if (cond12 instanceof runtime.EffectSig.class) {
                                  cond12.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(800);
                                  cond12.contTrace.last = cond12.contTrace.last.next;
                                  return cond12
                                }
                                cond12 = runtime.resetDepth(cond12, curDepth);
                                if (cond12 === true) {
                                  runtime.stackDepth = runtime.stackDepth + 1;
                                  sliced12 = runtime.Str.drop(topic, 1);
                                  if (sliced12 instanceof runtime.EffectSig.class) {
                                    sliced12.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(801);
                                    sliced12.contTrace.last = sliced12.contTrace.last.next;
                                    return sliced12
                                  }
                                  sliced12 = runtime.resetDepth(sliced12, curDepth);
                                  runtime.stackDepth = runtime.stackDepth + 1;
                                  return runtime.safeCall(runtime.MatchResult([
                                    sliced12
                                  ]))
                                } else {
                                  runtime.stackDepth = runtime.stackDepth + 1;
                                  cond13 = runtime.Str.startsWith(topic, ">");
                                  if (cond13 instanceof runtime.EffectSig.class) {
                                    cond13.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(802);
                                    cond13.contTrace.last = cond13.contTrace.last.next;
                                    return cond13
                                  }
                                  cond13 = runtime.resetDepth(cond13, curDepth);
                                  if (cond13 === true) {
                                    runtime.stackDepth = runtime.stackDepth + 1;
                                    sliced13 = runtime.Str.drop(topic, 1);
                                    if (sliced13 instanceof runtime.EffectSig.class) {
                                      sliced13.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(803);
                                      sliced13.contTrace.last = sliced13.contTrace.last.next;
                                      return sliced13
                                    }
                                    sliced13 = runtime.resetDepth(sliced13, curDepth);
                                    runtime.stackDepth = runtime.stackDepth + 1;
                                    return runtime.safeCall(runtime.MatchResult([
                                      sliced13
                                    ]))
                                  } else {
                                    runtime.stackDepth = runtime.stackDepth + 1;
                                    cond14 = runtime.Str.startsWith(topic, "?");
                                    if (cond14 instanceof runtime.EffectSig.class) {
                                      cond14.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(804);
                                      cond14.contTrace.last = cond14.contTrace.last.next;
                                      return cond14
                                    }
                                    cond14 = runtime.resetDepth(cond14, curDepth);
                                    if (cond14 === true) {
                                      runtime.stackDepth = runtime.stackDepth + 1;
                                      sliced14 = runtime.Str.drop(topic, 1);
                                      if (sliced14 instanceof runtime.EffectSig.class) {
                                        sliced14.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(805);
                                        sliced14.contTrace.last = sliced14.contTrace.last.next;
                                        return sliced14
                                      }
                                      sliced14 = runtime.resetDepth(sliced14, curDepth);
                                      runtime.stackDepth = runtime.stackDepth + 1;
                                      return runtime.safeCall(runtime.MatchResult([
                                        sliced14
                                      ]))
                                    } else {
                                      runtime.stackDepth = runtime.stackDepth + 1;
                                      cond15 = runtime.Str.startsWith(topic, "@");
                                      if (cond15 instanceof runtime.EffectSig.class) {
                                        cond15.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(806);
                                        cond15.contTrace.last = cond15.contTrace.last.next;
                                        return cond15
                                      }
                                      cond15 = runtime.resetDepth(cond15, curDepth);
                                      if (cond15 === true) {
                                        runtime.stackDepth = runtime.stackDepth + 1;
                                        sliced15 = runtime.Str.drop(topic, 1);
                                        if (sliced15 instanceof runtime.EffectSig.class) {
                                          sliced15.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(807);
                                          sliced15.contTrace.last = sliced15.contTrace.last.next;
                                          return sliced15
                                        }
                                        sliced15 = runtime.resetDepth(sliced15, curDepth);
                                        runtime.stackDepth = runtime.stackDepth + 1;
                                        return runtime.safeCall(runtime.MatchResult([
                                          sliced15
                                        ]))
                                      } else {
                                        runtime.stackDepth = runtime.stackDepth + 1;
                                        cond16 = runtime.Str.startsWith(topic, "\\");
                                        if (cond16 instanceof runtime.EffectSig.class) {
                                          cond16.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(808);
                                          cond16.contTrace.last = cond16.contTrace.last.next;
                                          return cond16
                                        }
                                        cond16 = runtime.resetDepth(cond16, curDepth);
                                        if (cond16 === true) {
                                          runtime.stackDepth = runtime.stackDepth + 1;
                                          sliced16 = runtime.Str.drop(topic, 1);
                                          if (sliced16 instanceof runtime.EffectSig.class) {
                                            sliced16.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(809);
                                            sliced16.contTrace.last = sliced16.contTrace.last.next;
                                            return sliced16
                                          }
                                          sliced16 = runtime.resetDepth(sliced16, curDepth);
                                          runtime.stackDepth = runtime.stackDepth + 1;
                                          return runtime.safeCall(runtime.MatchResult([
                                            sliced16
                                          ]))
                                        } else {
                                          runtime.stackDepth = runtime.stackDepth + 1;
                                          cond17 = runtime.Str.startsWith(topic, "^");
                                          if (cond17 instanceof runtime.EffectSig.class) {
                                            cond17.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(810);
                                            cond17.contTrace.last = cond17.contTrace.last.next;
                                            return cond17
                                          }
                                          cond17 = runtime.resetDepth(cond17, curDepth);
                                          if (cond17 === true) {
                                            runtime.stackDepth = runtime.stackDepth + 1;
                                            sliced17 = runtime.Str.drop(topic, 1);
                                            if (sliced17 instanceof runtime.EffectSig.class) {
                                              sliced17.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(811);
                                              sliced17.contTrace.last = sliced17.contTrace.last.next;
                                              return sliced17
                                            }
                                            sliced17 = runtime.resetDepth(sliced17, curDepth);
                                            runtime.stackDepth = runtime.stackDepth + 1;
                                            return runtime.safeCall(runtime.MatchResult([
                                              sliced17
                                            ]))
                                          } else {
                                            runtime.stackDepth = runtime.stackDepth + 1;
                                            cond18 = runtime.Str.startsWith(topic, "|");
                                            if (cond18 instanceof runtime.EffectSig.class) {
                                              cond18.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(812);
                                              cond18.contTrace.last = cond18.contTrace.last.next;
                                              return cond18
                                            }
                                            cond18 = runtime.resetDepth(cond18, curDepth);
                                            if (cond18 === true) {
                                              runtime.stackDepth = runtime.stackDepth + 1;
                                              sliced18 = runtime.Str.drop(topic, 1);
                                              if (sliced18 instanceof runtime.EffectSig.class) {
                                                sliced18.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(813);
                                                sliced18.contTrace.last = sliced18.contTrace.last.next;
                                                return sliced18
                                              }
                                              sliced18 = runtime.resetDepth(sliced18, curDepth);
                                              runtime.stackDepth = runtime.stackDepth + 1;
                                              return runtime.safeCall(runtime.MatchResult([
                                                sliced18
                                              ]))
                                            } else {
                                              runtime.stackDepth = runtime.stackDepth + 1;
                                              cond19 = runtime.Str.startsWith(topic, "~");
                                              if (cond19 instanceof runtime.EffectSig.class) {
                                                cond19.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(814);
                                                cond19.contTrace.last = cond19.contTrace.last.next;
                                                return cond19
                                              }
                                              cond19 = runtime.resetDepth(cond19, curDepth);
                                              if (cond19 === true) {
                                                runtime.stackDepth = runtime.stackDepth + 1;
                                                sliced19 = runtime.Str.drop(topic, 1);
                                                if (sliced19 instanceof runtime.EffectSig.class) {
                                                  sliced19.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(815);
                                                  sliced19.contTrace.last = sliced19.contTrace.last.next;
                                                  return sliced19
                                                }
                                                sliced19 = runtime.resetDepth(sliced19, curDepth);
                                                runtime.stackDepth = runtime.stackDepth + 1;
                                                return runtime.safeCall(runtime.MatchResult([
                                                  sliced19
                                                ]))
                                              } else {
                                                runtime.stackDepth = runtime.stackDepth + 1;
                                                cond20 = runtime.Str.startsWith(topic, ".");
                                                if (cond20 instanceof runtime.EffectSig.class) {
                                                  cond20.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(816);
                                                  cond20.contTrace.last = cond20.contTrace.last.next;
                                                  return cond20
                                                }
                                                cond20 = runtime.resetDepth(cond20, curDepth);
                                                if (cond20 === true) {
                                                  runtime.stackDepth = runtime.stackDepth + 1;
                                                  sliced20 = runtime.Str.drop(topic, 1);
                                                  if (sliced20 instanceof runtime.EffectSig.class) {
                                                    sliced20.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(817);
                                                    sliced20.contTrace.last = sliced20.contTrace.last.next;
                                                    return sliced20
                                                  }
                                                  sliced20 = runtime.resetDepth(sliced20, curDepth);
                                                  runtime.stackDepth = runtime.stackDepth + 1;
                                                  return runtime.safeCall(runtime.MatchResult([
                                                    sliced20
                                                  ]))
                                                } else {
                                                  runtime.stackDepth = runtime.stackDepth + 1;
                                                  return runtime.safeCall(runtime.MatchFailure())
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      toString() { return "Operator"; }
    };
    this.Operator = new Operator$class;
    this.Operator.class = Operator$class;
    const Bracket$class = class Bracket {
      constructor() {}
      unapply(scrut) {
        let stackDelayRes, Cont$func$unapply$5;
        Cont$func$unapply$5 = function Cont$func$unapply$(pc1) {
          return new Cont$func$unapply$.class(pc1);
        };
        Cont$func$unapply$5.class = class Cont$func$unapply$3 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp;
            tmp = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 883) {
              stackDelayRes = value$;
            }
            contLoop: while (true) {
              if (this.pc === 883) {
                if (scrut === "(") {
                  this.pc = 885;
                  continue contLoop;
                } else {
                  if (scrut === ")") {
                    this.pc = 886;
                    continue contLoop;
                  } else if (scrut === "[") {
                    this.pc = 887;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                  } else if (scrut === "]") {
                    this.pc = 888;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                  } else if (scrut === "{") {
                    this.pc = 889;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                  } else if (scrut === "}") {
                    this.pc = 890;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                    this.pc = 884;
                    continue contLoop;
                  } else {
                    this.pc = 891;
                    continue contLoop;
                  }
                  this.pc = 884;
                  continue contLoop;
                }
                this.pc = 884;
                continue contLoop;
              } else if (this.pc === 884) {
                break contLoop;
              } else if (this.pc === 891) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 890) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 889) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 888) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 887) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 886) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 885) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              }
              break;
            }
          }
          toString() { return "Cont$func$unapply$(" + runtime.render(this.pc) + ")"; }
        };
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapply$5.class(883);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        if (scrut === "(") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === ")") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "[") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "]") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "{") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "}") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchFailure())
        }
      } 
      unapplyStringPrefix(topic) {
        let cond, sliced, cond1, sliced1, cond2, sliced2, cond3, sliced3, cond4, sliced4, cond5, sliced5, curDepth, stackDelayRes, Cont$func$unapplyStringPrefix$5;
        Cont$func$unapplyStringPrefix$5 = function Cont$func$unapplyStringPrefix$(pc1) {
          return new Cont$func$unapplyStringPrefix$.class(pc1);
        };
        Cont$func$unapplyStringPrefix$5.class = class Cont$func$unapplyStringPrefix$3 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp;
            tmp = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 892) {
              stackDelayRes = value$;
            } else if (this.pc === 893) {
              cond = value$;
            } else if (this.pc === 895) {
              cond1 = value$;
            } else if (this.pc === 897) {
              cond2 = value$;
            } else if (this.pc === 899) {
              cond3 = value$;
            } else if (this.pc === 901) {
              cond4 = value$;
            } else if (this.pc === 903) {
              cond5 = value$;
            } else if (this.pc === 904) {
              sliced5 = value$;
            } else if (this.pc === 902) {
              sliced4 = value$;
            } else if (this.pc === 900) {
              sliced3 = value$;
            } else if (this.pc === 898) {
              sliced2 = value$;
            } else if (this.pc === 896) {
              sliced1 = value$;
            } else if (this.pc === 894) {
              sliced = value$;
            }
            contLoop: while (true) {
              if (this.pc === 892) {
                this.pc = 924;
                continue contLoop;
              } else if (this.pc === 924) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond = runtime.Str.startsWith(topic, "(");
                if (cond instanceof runtime.EffectSig.class) {
                  this.pc = 893;
                  cond.contTrace.last.next = this;
                  cond.contTrace.last = this;
                  return cond
                }
                this.pc = 893;
                continue contLoop;
              } else if (this.pc === 893) {
                cond = runtime.resetDepth(cond, curDepth);
                if (cond === true) {
                  this.pc = 907;
                  continue contLoop;
                } else {
                  this.pc = 923;
                  continue contLoop;
                }
                this.pc = 905;
                continue contLoop;
              } else if (this.pc === 905) {
                break contLoop;
              } else if (this.pc === 923) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond1 = runtime.Str.startsWith(topic, ")");
                if (cond1 instanceof runtime.EffectSig.class) {
                  this.pc = 895;
                  cond1.contTrace.last.next = this;
                  cond1.contTrace.last = this;
                  return cond1
                }
                this.pc = 895;
                continue contLoop;
              } else if (this.pc === 895) {
                cond1 = runtime.resetDepth(cond1, curDepth);
                if (cond1 === true) {
                  this.pc = 909;
                  continue contLoop;
                } else {
                  this.pc = 922;
                  continue contLoop;
                }
                this.pc = 905;
                continue contLoop;
              } else if (this.pc === 922) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond2 = runtime.Str.startsWith(topic, "[");
                if (cond2 instanceof runtime.EffectSig.class) {
                  this.pc = 897;
                  cond2.contTrace.last.next = this;
                  cond2.contTrace.last = this;
                  return cond2
                }
                this.pc = 897;
                continue contLoop;
              } else if (this.pc === 897) {
                cond2 = runtime.resetDepth(cond2, curDepth);
                if (cond2 === true) {
                  this.pc = 911;
                  continue contLoop;
                } else {
                  this.pc = 921;
                  continue contLoop;
                }
                this.pc = 905;
                continue contLoop;
              } else if (this.pc === 921) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond3 = runtime.Str.startsWith(topic, "]");
                if (cond3 instanceof runtime.EffectSig.class) {
                  this.pc = 899;
                  cond3.contTrace.last.next = this;
                  cond3.contTrace.last = this;
                  return cond3
                }
                this.pc = 899;
                continue contLoop;
              } else if (this.pc === 899) {
                cond3 = runtime.resetDepth(cond3, curDepth);
                if (cond3 === true) {
                  this.pc = 913;
                  continue contLoop;
                } else {
                  this.pc = 920;
                  continue contLoop;
                }
                this.pc = 905;
                continue contLoop;
              } else if (this.pc === 920) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond4 = runtime.Str.startsWith(topic, "{");
                if (cond4 instanceof runtime.EffectSig.class) {
                  this.pc = 901;
                  cond4.contTrace.last.next = this;
                  cond4.contTrace.last = this;
                  return cond4
                }
                this.pc = 901;
                continue contLoop;
              } else if (this.pc === 901) {
                cond4 = runtime.resetDepth(cond4, curDepth);
                if (cond4 === true) {
                  this.pc = 915;
                  continue contLoop;
                } else {
                  this.pc = 919;
                  continue contLoop;
                }
                this.pc = 905;
                continue contLoop;
              } else if (this.pc === 919) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond5 = runtime.Str.startsWith(topic, "}");
                if (cond5 instanceof runtime.EffectSig.class) {
                  this.pc = 903;
                  cond5.contTrace.last.next = this;
                  cond5.contTrace.last = this;
                  return cond5
                }
                this.pc = 903;
                continue contLoop;
              } else if (this.pc === 903) {
                cond5 = runtime.resetDepth(cond5, curDepth);
                if (cond5 === true) {
                  this.pc = 917;
                  continue contLoop;
                } else {
                  this.pc = 918;
                  continue contLoop;
                }
                this.pc = 905;
                continue contLoop;
              } else if (this.pc === 918) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 917) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced5 = runtime.Str.drop(topic, 1);
                if (sliced5 instanceof runtime.EffectSig.class) {
                  this.pc = 904;
                  sliced5.contTrace.last.next = this;
                  sliced5.contTrace.last = this;
                  return sliced5
                }
                this.pc = 904;
                continue contLoop;
              } else if (this.pc === 904) {
                sliced5 = runtime.resetDepth(sliced5, curDepth);
                this.pc = 916;
                continue contLoop;
              } else if (this.pc === 916) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced5
                ]))
              } else if (this.pc === 915) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced4 = runtime.Str.drop(topic, 1);
                if (sliced4 instanceof runtime.EffectSig.class) {
                  this.pc = 902;
                  sliced4.contTrace.last.next = this;
                  sliced4.contTrace.last = this;
                  return sliced4
                }
                this.pc = 902;
                continue contLoop;
              } else if (this.pc === 902) {
                sliced4 = runtime.resetDepth(sliced4, curDepth);
                this.pc = 914;
                continue contLoop;
              } else if (this.pc === 914) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced4
                ]))
              } else if (this.pc === 913) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced3 = runtime.Str.drop(topic, 1);
                if (sliced3 instanceof runtime.EffectSig.class) {
                  this.pc = 900;
                  sliced3.contTrace.last.next = this;
                  sliced3.contTrace.last = this;
                  return sliced3
                }
                this.pc = 900;
                continue contLoop;
              } else if (this.pc === 900) {
                sliced3 = runtime.resetDepth(sliced3, curDepth);
                this.pc = 912;
                continue contLoop;
              } else if (this.pc === 912) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced3
                ]))
              } else if (this.pc === 911) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced2 = runtime.Str.drop(topic, 1);
                if (sliced2 instanceof runtime.EffectSig.class) {
                  this.pc = 898;
                  sliced2.contTrace.last.next = this;
                  sliced2.contTrace.last = this;
                  return sliced2
                }
                this.pc = 898;
                continue contLoop;
              } else if (this.pc === 898) {
                sliced2 = runtime.resetDepth(sliced2, curDepth);
                this.pc = 910;
                continue contLoop;
              } else if (this.pc === 910) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced2
                ]))
              } else if (this.pc === 909) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced1 = runtime.Str.drop(topic, 1);
                if (sliced1 instanceof runtime.EffectSig.class) {
                  this.pc = 896;
                  sliced1.contTrace.last.next = this;
                  sliced1.contTrace.last = this;
                  return sliced1
                }
                this.pc = 896;
                continue contLoop;
              } else if (this.pc === 896) {
                sliced1 = runtime.resetDepth(sliced1, curDepth);
                this.pc = 908;
                continue contLoop;
              } else if (this.pc === 908) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced1
                ]))
              } else if (this.pc === 907) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced = runtime.Str.drop(topic, 1);
                if (sliced instanceof runtime.EffectSig.class) {
                  this.pc = 894;
                  sliced.contTrace.last.next = this;
                  sliced.contTrace.last = this;
                  return sliced
                }
                this.pc = 894;
                continue contLoop;
              } else if (this.pc === 894) {
                sliced = runtime.resetDepth(sliced, curDepth);
                this.pc = 906;
                continue contLoop;
              } else if (this.pc === 906) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced
                ]))
              }
              break;
            }
          }
          toString() { return "Cont$func$unapplyStringPrefix$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(892);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        cond = runtime.Str.startsWith(topic, "(");
        if (cond instanceof runtime.EffectSig.class) {
          cond.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(893);
          cond.contTrace.last = cond.contTrace.last.next;
          return cond
        }
        cond = runtime.resetDepth(cond, curDepth);
        if (cond === true) {
          runtime.stackDepth = runtime.stackDepth + 1;
          sliced = runtime.Str.drop(topic, 1);
          if (sliced instanceof runtime.EffectSig.class) {
            sliced.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(894);
            sliced.contTrace.last = sliced.contTrace.last.next;
            return sliced
          }
          sliced = runtime.resetDepth(sliced, curDepth);
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([
            sliced
          ]))
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          cond1 = runtime.Str.startsWith(topic, ")");
          if (cond1 instanceof runtime.EffectSig.class) {
            cond1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(895);
            cond1.contTrace.last = cond1.contTrace.last.next;
            return cond1
          }
          cond1 = runtime.resetDepth(cond1, curDepth);
          if (cond1 === true) {
            runtime.stackDepth = runtime.stackDepth + 1;
            sliced1 = runtime.Str.drop(topic, 1);
            if (sliced1 instanceof runtime.EffectSig.class) {
              sliced1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(896);
              sliced1.contTrace.last = sliced1.contTrace.last.next;
              return sliced1
            }
            sliced1 = runtime.resetDepth(sliced1, curDepth);
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([
              sliced1
            ]))
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            cond2 = runtime.Str.startsWith(topic, "[");
            if (cond2 instanceof runtime.EffectSig.class) {
              cond2.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(897);
              cond2.contTrace.last = cond2.contTrace.last.next;
              return cond2
            }
            cond2 = runtime.resetDepth(cond2, curDepth);
            if (cond2 === true) {
              runtime.stackDepth = runtime.stackDepth + 1;
              sliced2 = runtime.Str.drop(topic, 1);
              if (sliced2 instanceof runtime.EffectSig.class) {
                sliced2.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(898);
                sliced2.contTrace.last = sliced2.contTrace.last.next;
                return sliced2
              }
              sliced2 = runtime.resetDepth(sliced2, curDepth);
              runtime.stackDepth = runtime.stackDepth + 1;
              return runtime.safeCall(runtime.MatchResult([
                sliced2
              ]))
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              cond3 = runtime.Str.startsWith(topic, "]");
              if (cond3 instanceof runtime.EffectSig.class) {
                cond3.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(899);
                cond3.contTrace.last = cond3.contTrace.last.next;
                return cond3
              }
              cond3 = runtime.resetDepth(cond3, curDepth);
              if (cond3 === true) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced3 = runtime.Str.drop(topic, 1);
                if (sliced3 instanceof runtime.EffectSig.class) {
                  sliced3.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(900);
                  sliced3.contTrace.last = sliced3.contTrace.last.next;
                  return sliced3
                }
                sliced3 = runtime.resetDepth(sliced3, curDepth);
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced3
                ]))
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond4 = runtime.Str.startsWith(topic, "{");
                if (cond4 instanceof runtime.EffectSig.class) {
                  cond4.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(901);
                  cond4.contTrace.last = cond4.contTrace.last.next;
                  return cond4
                }
                cond4 = runtime.resetDepth(cond4, curDepth);
                if (cond4 === true) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  sliced4 = runtime.Str.drop(topic, 1);
                  if (sliced4 instanceof runtime.EffectSig.class) {
                    sliced4.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(902);
                    sliced4.contTrace.last = sliced4.contTrace.last.next;
                    return sliced4
                  }
                  sliced4 = runtime.resetDepth(sliced4, curDepth);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  return runtime.safeCall(runtime.MatchResult([
                    sliced4
                  ]))
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  cond5 = runtime.Str.startsWith(topic, "}");
                  if (cond5 instanceof runtime.EffectSig.class) {
                    cond5.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(903);
                    cond5.contTrace.last = cond5.contTrace.last.next;
                    return cond5
                  }
                  cond5 = runtime.resetDepth(cond5, curDepth);
                  if (cond5 === true) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    sliced5 = runtime.Str.drop(topic, 1);
                    if (sliced5 instanceof runtime.EffectSig.class) {
                      sliced5.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(904);
                      sliced5.contTrace.last = sliced5.contTrace.last.next;
                      return sliced5
                    }
                    sliced5 = runtime.resetDepth(sliced5, curDepth);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    return runtime.safeCall(runtime.MatchResult([
                      sliced5
                    ]))
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    return runtime.safeCall(runtime.MatchFailure())
                  }
                }
              }
            }
          }
        }
      }
      toString() { return "Bracket"; }
    };
    this.Bracket = new Bracket$class;
    this.Bracket.class = Bracket$class;
    const IdentifierQuote$class = class IdentifierQuote {
      constructor() {}
      unapply(scrut) {
        let stackDelayRes, Cont$func$unapply$5;
        Cont$func$unapply$5 = function Cont$func$unapply$(pc1) {
          return new Cont$func$unapply$.class(pc1);
        };
        Cont$func$unapply$5.class = class Cont$func$unapply$4 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp;
            tmp = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 925) {
              stackDelayRes = value$;
            }
            contLoop: while (true) {
              if (this.pc === 925) {
                if (scrut === "'") {
                  this.pc = 927;
                  continue contLoop;
                } else if (scrut === "`") {
                  this.pc = 928;
                  continue contLoop;
                  this.pc = 926;
                  continue contLoop;
                } else {
                  this.pc = 929;
                  continue contLoop;
                }
                this.pc = 926;
                continue contLoop;
              } else if (this.pc === 926) {
                break contLoop;
              } else if (this.pc === 929) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 928) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              } else if (this.pc === 927) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([]))
              }
              break;
            }
          }
          toString() { return "Cont$func$unapply$(" + runtime.render(this.pc) + ")"; }
        };
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapply$5.class(925);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        if (scrut === "'") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "`") {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchFailure())
        }
      } 
      unapplyStringPrefix(topic) {
        let cond, sliced, cond1, sliced1, curDepth, stackDelayRes, Cont$func$unapplyStringPrefix$5;
        Cont$func$unapplyStringPrefix$5 = function Cont$func$unapplyStringPrefix$(pc1) {
          return new Cont$func$unapplyStringPrefix$.class(pc1);
        };
        Cont$func$unapplyStringPrefix$5.class = class Cont$func$unapplyStringPrefix$4 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp;
            tmp = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 930) {
              stackDelayRes = value$;
            } else if (this.pc === 931) {
              cond = value$;
            } else if (this.pc === 933) {
              cond1 = value$;
            } else if (this.pc === 934) {
              sliced1 = value$;
            } else if (this.pc === 932) {
              sliced = value$;
            }
            contLoop: while (true) {
              if (this.pc === 930) {
                this.pc = 942;
                continue contLoop;
              } else if (this.pc === 942) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond = runtime.Str.startsWith(topic, "'");
                if (cond instanceof runtime.EffectSig.class) {
                  this.pc = 931;
                  cond.contTrace.last.next = this;
                  cond.contTrace.last = this;
                  return cond
                }
                this.pc = 931;
                continue contLoop;
              } else if (this.pc === 931) {
                cond = runtime.resetDepth(cond, curDepth);
                if (cond === true) {
                  this.pc = 937;
                  continue contLoop;
                } else {
                  this.pc = 941;
                  continue contLoop;
                }
                this.pc = 935;
                continue contLoop;
              } else if (this.pc === 935) {
                break contLoop;
              } else if (this.pc === 941) {
                runtime.stackDepth = runtime.stackDepth + 1;
                cond1 = runtime.Str.startsWith(topic, "`");
                if (cond1 instanceof runtime.EffectSig.class) {
                  this.pc = 933;
                  cond1.contTrace.last.next = this;
                  cond1.contTrace.last = this;
                  return cond1
                }
                this.pc = 933;
                continue contLoop;
              } else if (this.pc === 933) {
                cond1 = runtime.resetDepth(cond1, curDepth);
                if (cond1 === true) {
                  this.pc = 939;
                  continue contLoop;
                } else {
                  this.pc = 940;
                  continue contLoop;
                }
                this.pc = 935;
                continue contLoop;
              } else if (this.pc === 940) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchFailure())
              } else if (this.pc === 939) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced1 = runtime.Str.drop(topic, 1);
                if (sliced1 instanceof runtime.EffectSig.class) {
                  this.pc = 934;
                  sliced1.contTrace.last.next = this;
                  sliced1.contTrace.last = this;
                  return sliced1
                }
                this.pc = 934;
                continue contLoop;
              } else if (this.pc === 934) {
                sliced1 = runtime.resetDepth(sliced1, curDepth);
                this.pc = 938;
                continue contLoop;
              } else if (this.pc === 938) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced1
                ]))
              } else if (this.pc === 937) {
                runtime.stackDepth = runtime.stackDepth + 1;
                sliced = runtime.Str.drop(topic, 1);
                if (sliced instanceof runtime.EffectSig.class) {
                  this.pc = 932;
                  sliced.contTrace.last.next = this;
                  sliced.contTrace.last = this;
                  return sliced
                }
                this.pc = 932;
                continue contLoop;
              } else if (this.pc === 932) {
                sliced = runtime.resetDepth(sliced, curDepth);
                this.pc = 936;
                continue contLoop;
              } else if (this.pc === 936) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return runtime.safeCall(runtime.MatchResult([
                  sliced
                ]))
              }
              break;
            }
          }
          toString() { return "Cont$func$unapplyStringPrefix$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth = runtime.stackDepth;
        stackDelayRes = runtime.checkDepth();
        if (stackDelayRes instanceof runtime.EffectSig.class) {
          stackDelayRes.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(930);
          stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
          return stackDelayRes
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        cond = runtime.Str.startsWith(topic, "'");
        if (cond instanceof runtime.EffectSig.class) {
          cond.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(931);
          cond.contTrace.last = cond.contTrace.last.next;
          return cond
        }
        cond = runtime.resetDepth(cond, curDepth);
        if (cond === true) {
          runtime.stackDepth = runtime.stackDepth + 1;
          sliced = runtime.Str.drop(topic, 1);
          if (sliced instanceof runtime.EffectSig.class) {
            sliced.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(932);
            sliced.contTrace.last = sliced.contTrace.last.next;
            return sliced
          }
          sliced = runtime.resetDepth(sliced, curDepth);
          runtime.stackDepth = runtime.stackDepth + 1;
          return runtime.safeCall(runtime.MatchResult([
            sliced
          ]))
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          cond1 = runtime.Str.startsWith(topic, "`");
          if (cond1 instanceof runtime.EffectSig.class) {
            cond1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(933);
            cond1.contTrace.last = cond1.contTrace.last.next;
            return cond1
          }
          cond1 = runtime.resetDepth(cond1, curDepth);
          if (cond1 === true) {
            runtime.stackDepth = runtime.stackDepth + 1;
            sliced1 = runtime.Str.drop(topic, 1);
            if (sliced1 instanceof runtime.EffectSig.class) {
              sliced1.contTrace.last.next = new Cont$func$unapplyStringPrefix$5.class(934);
              sliced1.contTrace.last = sliced1.contTrace.last.next;
              return sliced1
            }
            sliced1 = runtime.resetDepth(sliced1, curDepth);
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchResult([
              sliced1
            ]))
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            return runtime.safeCall(runtime.MatchFailure())
          }
        }
      }
      toString() { return "IdentifierQuote"; }
    };
    this.IdentifierQuote = new IdentifierQuote$class;
    this.IdentifierQuote.class = IdentifierQuote$class;
  }
  static makeLineLookupTable(text) {
    let i, n, ns, scrut, i$_, scrut1, selRes, discarded, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, curDepth, stackDelayRes, Cont$func$makeLineLookupTable$1;
    Cont$func$makeLineLookupTable$1 = function Cont$func$makeLineLookupTable$(pc1) {
      return new Cont$func$makeLineLookupTable$.class(pc1);
    };
    Cont$func$makeLineLookupTable$1.class = class Cont$func$makeLineLookupTable$ extends runtime.FunctionContFrame.class {
      constructor(pc) {
        let tmp6;
        tmp6 = super(null);
        this.pc = pc;
      }
      resume(value$) {
        if (this.pc === 0) {
          stackDelayRes = value$;
        } else if (this.pc === 2) {
          tmp = value$;
        } else if (this.pc === 4) {
          tmp2 = value$;
        } else if (this.pc === 3) {
          tmp2 = value$;
        } else if (this.pc === 1) {
          tmp5 = value$;
        }
        contLoop: while (true) {
          if (this.pc === 0) {
            i = 0;
            selRes = text.length;
            discarded = text.length$__checkNotMethod;
            if (selRes === undefined) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = new globalThis.Error("Access to required field 'length' yielded 'undefined'");
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 1;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 1;
              continue contLoop;
            }
            this.pc = 12;
            continue contLoop;
          } else if (this.pc === 12) {
            n = selRes;
            this.pc = 11;
            continue contLoop;
          } else if (this.pc === 11) {
            ns = [];
            this.pc = 6;
            continue contLoop;
          } else if (this.pc === 6) {
            scrut = i < n;
            if (scrut === true) {
              this.pc = 10;
              continue contLoop;
            } else {
              tmp4 = runtime.Unit;
              this.pc = 5;
              continue contLoop;
            }
            this.pc = 5;
            continue contLoop;
          } else if (this.pc === 10) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp = text.indexOf("\n", i);
            if (tmp instanceof runtime.EffectSig.class) {
              this.pc = 2;
              tmp.contTrace.last.next = this;
              tmp.contTrace.last = this;
              return tmp
            }
            this.pc = 2;
            continue contLoop;
          } else if (this.pc === 2) {
            tmp = runtime.resetDepth(tmp, curDepth);
            i$_ = tmp;
            tmp1 = - 1;
            scrut1 = i$_ == tmp1;
            if (scrut1 === true) {
              i = n;
              this.pc = 8;
              continue contLoop;
            } else {
              tmp3 = i$_ + 1;
              i = tmp3;
              this.pc = 9;
              continue contLoop;
            }
            this.pc = 7;
            continue contLoop;
          } else if (this.pc === 7) {
            tmp4 = tmp2;
            this.pc = 6;
            continue contLoop;
          } else if (this.pc === 9) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp2 = runtime.safeCall(ns.push(i$_));
            if (tmp2 instanceof runtime.EffectSig.class) {
              this.pc = 4;
              tmp2.contTrace.last.next = this;
              tmp2.contTrace.last = this;
              return tmp2
            }
            this.pc = 4;
            continue contLoop;
          } else if (this.pc === 4) {
            tmp2 = runtime.resetDepth(tmp2, curDepth);
            this.pc = 7;
            continue contLoop;
          } else if (this.pc === 8) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp2 = runtime.safeCall(ns.push(n));
            if (tmp2 instanceof runtime.EffectSig.class) {
              this.pc = 3;
              tmp2.contTrace.last.next = this;
              tmp2.contTrace.last = this;
              return tmp2
            }
            this.pc = 3;
            continue contLoop;
          } else if (this.pc === 3) {
            tmp2 = runtime.resetDepth(tmp2, curDepth);
            this.pc = 7;
            continue contLoop;
          } else if (this.pc === 5) {
            runtime.stackDepth = runtime.stackDepth + 1;
            return Token.LineLookupTable(ns)
          } else if (this.pc === 1) {
            tmp5 = runtime.resetDepth(tmp5, curDepth);
            throw tmp5;
          }
          break;
        }
      }
      toString() { return "Cont$func$makeLineLookupTable$(" + runtime.render(this.pc) + ")"; }
    };
    curDepth = runtime.stackDepth;
    stackDelayRes = runtime.checkDepth();
    if (stackDelayRes instanceof runtime.EffectSig.class) {
      stackDelayRes.contTrace.last.next = new Cont$func$makeLineLookupTable$1.class(0);
      stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
      return stackDelayRes
    }
    i = 0;
    selRes = text.length;
    discarded = text.length$__checkNotMethod;
    if (selRes === undefined) {
      runtime.stackDepth = runtime.stackDepth + 1;
      tmp5 = new globalThis.Error("Access to required field 'length' yielded 'undefined'");
      if (tmp5 instanceof runtime.EffectSig.class) {
        tmp5.contTrace.last.next = new Cont$func$makeLineLookupTable$1.class(1);
        tmp5.contTrace.last = tmp5.contTrace.last.next;
        return tmp5
      }
      tmp5 = runtime.resetDepth(tmp5, curDepth);
      throw tmp5;
    }
    n = selRes;
    ns = [];
    tmp6: while (true) {
      scrut = i < n;
      if (scrut === true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        tmp = text.indexOf("\n", i);
        if (tmp instanceof runtime.EffectSig.class) {
          tmp.contTrace.last.next = new Cont$func$makeLineLookupTable$1.class(2);
          tmp.contTrace.last = tmp.contTrace.last.next;
          return tmp
        }
        tmp = runtime.resetDepth(tmp, curDepth);
        i$_ = tmp;
        tmp1 = - 1;
        scrut1 = i$_ == tmp1;
        if (scrut1 === true) {
          i = n;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp2 = runtime.safeCall(ns.push(n));
          if (tmp2 instanceof runtime.EffectSig.class) {
            tmp2.contTrace.last.next = new Cont$func$makeLineLookupTable$1.class(3);
            tmp2.contTrace.last = tmp2.contTrace.last.next;
            return tmp2
          }
          tmp2 = runtime.resetDepth(tmp2, curDepth);
        } else {
          tmp3 = i$_ + 1;
          i = tmp3;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp2 = runtime.safeCall(ns.push(i$_));
          if (tmp2 instanceof runtime.EffectSig.class) {
            tmp2.contTrace.last.next = new Cont$func$makeLineLookupTable$1.class(4);
            tmp2.contTrace.last = tmp2.contTrace.last.next;
            return tmp2
          }
          tmp2 = runtime.resetDepth(tmp2, curDepth);
        }
        tmp4 = tmp2;
        continue tmp6;
      } else {
        tmp4 = runtime.Unit;
      }
      break;
    }
    runtime.stackDepth = runtime.stackDepth + 1;
    return Token.LineLookupTable(ns)
  } 
  static lex(str, options) {
    let number, hex, instance$Ident$_LineLookupTable$_, identifier, digits, char1, scanHexDigits, whitespace, scan, string, escape, take, operator, comment, tmp, curDepth, stackDelayRes, Cont$func$lex$1;
    Cont$func$lex$1 = function Cont$func$lex$(pc1) {
      return new Cont$func$lex$.class(pc1);
    };
    Cont$func$lex$1.class = class Cont$func$lex$ extends runtime.FunctionContFrame.class {
      constructor(pc) {
        let tmp1;
        tmp1 = super(null);
        this.pc = pc;
      }
      resume(value$) {
        if (this.pc === 13) {
          stackDelayRes = value$;
        } else if (this.pc === 688) {
          tmp = value$;
        }
        contLoop: while (true) {
          if (this.pc === 13) {
            this.pc = 690;
            continue contLoop;
          } else if (this.pc === 690) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp = Lexer.makeLineLookupTable(str);
            if (tmp instanceof runtime.EffectSig.class) {
              this.pc = 688;
              tmp.contTrace.last.next = this;
              tmp.contTrace.last = this;
              return tmp
            }
            this.pc = 688;
            continue contLoop;
          } else if (this.pc === 688) {
            tmp = runtime.resetDepth(tmp, curDepth);
            instance$Ident$_LineLookupTable$_ = tmp;
            this.pc = 689;
            continue contLoop;
          } else if (this.pc === 689) {
            runtime.stackDepth = runtime.stackDepth + 1;
            return scan(0, Stack.Nil)
          }
          break;
        }
      }
      toString() { return "Cont$func$lex$(" + runtime.render(this.pc) + ")"; }
    };
    char1 = function (idx) {
      let scrut, selRes, discarded, tmp1, tmp2, curDepth1, stackDelayRes1, Cont$func$char$1;
      Cont$func$char$1 = function Cont$func$char$(pc1) {
        return new Cont$func$char$.class(pc1);
      };
      Cont$func$char$1.class = class Cont$func$char$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp3;
          tmp3 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 14) {
            stackDelayRes1 = value$;
          } else if (this.pc === 16) {
            tmp1 = value$;
          } else if (this.pc === 15) {
            tmp2 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 14) {
              selRes = str.length;
              discarded = str.length$__checkNotMethod;
              if (selRes === undefined) {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp2 = new globalThis.Error("Access to required field 'length' yielded 'undefined'");
                if (tmp2 instanceof runtime.EffectSig.class) {
                  this.pc = 15;
                  tmp2.contTrace.last.next = this;
                  tmp2.contTrace.last = this;
                  return tmp2
                }
                this.pc = 15;
                continue contLoop;
              }
              this.pc = 20;
              continue contLoop;
            } else if (this.pc === 20) {
              scrut = idx < selRes;
              if (scrut === true) {
                this.pc = 19;
                continue contLoop;
              } else {
                return Option.None
              }
              this.pc = 17;
              continue contLoop;
            } else if (this.pc === 17) {
              break contLoop;
            } else if (this.pc === 18) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return Option.Some(tmp1)
            } else if (this.pc === 19) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp1 = runtime.safeCall(str.charAt(idx));
              if (tmp1 instanceof runtime.EffectSig.class) {
                this.pc = 16;
                tmp1.contTrace.last.next = this;
                tmp1.contTrace.last = this;
                return tmp1
              }
              this.pc = 16;
              continue contLoop;
            } else if (this.pc === 16) {
              tmp1 = runtime.resetDepth(tmp1, curDepth1);
              this.pc = 18;
              continue contLoop;
            } else if (this.pc === 15) {
              tmp2 = runtime.resetDepth(tmp2, curDepth1);
              throw tmp2;
            }
            break;
          }
        }
        toString() { return "Cont$func$char$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$char$1.class(14);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      selRes = str.length;
      discarded = str.length$__checkNotMethod;
      if (selRes === undefined) {
        runtime.stackDepth = runtime.stackDepth + 1;
        tmp2 = new globalThis.Error("Access to required field 'length' yielded 'undefined'");
        if (tmp2 instanceof runtime.EffectSig.class) {
          tmp2.contTrace.last.next = new Cont$func$char$1.class(15);
          tmp2.contTrace.last = tmp2.contTrace.last.next;
          return tmp2
        }
        tmp2 = runtime.resetDepth(tmp2, curDepth1);
        throw tmp2;
      }
      scrut = idx < selRes;
      if (scrut === true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        tmp1 = runtime.safeCall(str.charAt(idx));
        if (tmp1 instanceof runtime.EffectSig.class) {
          tmp1.contTrace.last.next = new Cont$func$char$1.class(16);
          tmp1.contTrace.last = tmp1.contTrace.last.next;
          return tmp1
        }
        tmp1 = runtime.resetDepth(tmp1, curDepth1);
        runtime.stackDepth = runtime.stackDepth + 1;
        return Option.Some(tmp1)
      } else {
        return Option.None
      }
    };
    take = function take(pred, idx, acc) {
      let scrut, param0, ch, scrut1, tmp1, tmp2, tmp3, curDepth1, stackDelayRes1, Cont$func$take$1;
      Cont$func$take$1 = function Cont$func$take$(pc1) {
        return new Cont$func$take$.class(pc1);
      };
      Cont$func$take$1.class = class Cont$func$take$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp4;
          tmp4 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 21) {
            stackDelayRes1 = value$;
          } else if (this.pc === 22) {
            scrut = value$;
          } else if (this.pc === 23) {
            scrut1 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 21) {
              this.pc = 25;
              continue contLoop;
            } else if (this.pc === 24) {
              return tmp3
            } else if (this.pc === 25) {
              this.pc = 29;
              continue contLoop;
            } else if (this.pc === 29) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 22;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 22;
              continue contLoop;
            } else if (this.pc === 22) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                ch = param0;
                this.pc = 27;
                continue contLoop;
              } else {
                this.pc = 28;
                continue contLoop;
              }
              this.pc = 24;
              continue contLoop;
            } else if (this.pc === 28) {
              tmp3 = [
                idx,
                acc
              ];
              this.pc = 24;
              continue contLoop;
            } else if (this.pc === 27) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = runtime.safeCall(pred(ch));
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 23;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 23;
              continue contLoop;
            } else if (this.pc === 23) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 === true) {
                tmp1 = idx + 1;
                idx = tmp1;
                tmp2 = acc + ch;
                acc = tmp2;
                tmp3 = runtime.Unit;
                this.pc = 25;
                continue contLoop;
              } else {
                this.pc = 26;
                continue contLoop;
              }
              this.pc = 24;
              continue contLoop;
            } else if (this.pc === 26) {
              tmp3 = [
                idx,
                acc
              ];
              this.pc = 24;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$take$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$take$1.class(21);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      tmp4: while (true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = char1(idx);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$take$1.class(22);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          ch = param0;
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut1 = runtime.safeCall(pred(ch));
          if (scrut1 instanceof runtime.EffectSig.class) {
            scrut1.contTrace.last.next = new Cont$func$take$1.class(23);
            scrut1.contTrace.last = scrut1.contTrace.last.next;
            return scrut1
          }
          scrut1 = runtime.resetDepth(scrut1, curDepth1);
          if (scrut1 === true) {
            tmp1 = idx + 1;
            idx = tmp1;
            tmp2 = acc + ch;
            acc = tmp2;
            tmp3 = runtime.Unit;
            continue tmp4;
          } else {
            tmp3 = [
              idx,
              acc
            ];
          }
        } else {
          tmp3 = [
            idx,
            acc
          ];
        }
        break;
      }
      return tmp3
    };
    whitespace = function whitespace(idx) {
      let scrut, param0, matchResult, selRes, tmp1, tmp2, curDepth1, tmp3, stackDelayRes1, Cont$func$whitespace$1;
      Cont$func$whitespace$1 = function Cont$func$whitespace$(pc1) {
        return new Cont$func$whitespace$.class(pc1);
      };
      Cont$func$whitespace$1.class = class Cont$func$whitespace$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp4;
          tmp4 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 30) {
            stackDelayRes1 = value$;
          } else if (this.pc === 31) {
            scrut = value$;
          } else if (this.pc === 33) {
            matchResult = value$;
          } else if (this.pc === 32) {
            tmp3 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 30) {
              this.pc = 35;
              continue contLoop;
            } else if (this.pc === 34) {
              return tmp2
            } else if (this.pc === 35) {
              this.pc = 37;
              continue contLoop;
            } else if (this.pc === 37) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 31;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 31;
              continue contLoop;
            } else if (this.pc === 31) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                selRes = Char.Whitespace;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp3 = new globalThis.Error("Access to required field 'Whitespace' yielded 'undefined'");
                  if (tmp3 instanceof runtime.EffectSig.class) {
                    this.pc = 32;
                    tmp3.contTrace.last.next = this;
                    tmp3.contTrace.last = this;
                    return tmp3
                  }
                  this.pc = 32;
                  continue contLoop;
                }
                this.pc = 36;
                continue contLoop;
              } else {
                tmp2 = idx;
                this.pc = 34;
                continue contLoop;
              }
              this.pc = 34;
              continue contLoop;
            } else if (this.pc === 36) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(selRes.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 33;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 33;
              continue contLoop;
            } else if (this.pc === 33) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                tmp1 = idx + 1;
                idx = tmp1;
                tmp2 = runtime.Unit;
                this.pc = 35;
                continue contLoop;
              } else {
                tmp2 = idx;
                this.pc = 34;
                continue contLoop;
              }
              this.pc = 34;
              continue contLoop;
            } else if (this.pc === 32) {
              tmp3 = runtime.resetDepth(tmp3, curDepth1);
              throw tmp3;
            }
            break;
          }
        }
        toString() { return "Cont$func$whitespace$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$whitespace$1.class(30);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      tmp4: while (true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = char1(idx);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$whitespace$1.class(31);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          selRes = Char.Whitespace;
          if (selRes === undefined) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp3 = new globalThis.Error("Access to required field 'Whitespace' yielded 'undefined'");
            if (tmp3 instanceof runtime.EffectSig.class) {
              tmp3.contTrace.last.next = new Cont$func$whitespace$1.class(32);
              tmp3.contTrace.last = tmp3.contTrace.last.next;
              return tmp3
            }
            tmp3 = runtime.resetDepth(tmp3, curDepth1);
            throw tmp3;
          }
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult = runtime.safeCall(selRes.unapply(param0));
          if (matchResult instanceof runtime.EffectSig.class) {
            matchResult.contTrace.last.next = new Cont$func$whitespace$1.class(33);
            matchResult.contTrace.last = matchResult.contTrace.last.next;
            return matchResult
          }
          matchResult = runtime.resetDepth(matchResult, curDepth1);
          if (matchResult instanceof runtime.MatchResult.class) {
            tmp1 = idx + 1;
            idx = tmp1;
            tmp2 = runtime.Unit;
            continue tmp4;
          } else {
            tmp2 = idx;
          }
        } else {
          tmp2 = idx;
        }
        break;
      }
      return tmp2
    };
    digits = function digits(idx, acc) {
      let scrut, param0, ch, matchResult, selRes, tmp1, tmp2, tmp3, curDepth1, tmp4, stackDelayRes1, Cont$func$digits$1;
      Cont$func$digits$1 = function Cont$func$digits$(pc1) {
        return new Cont$func$digits$.class(pc1);
      };
      Cont$func$digits$1.class = class Cont$func$digits$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp5;
          tmp5 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 38) {
            stackDelayRes1 = value$;
          } else if (this.pc === 39) {
            scrut = value$;
          } else if (this.pc === 41) {
            matchResult = value$;
          } else if (this.pc === 40) {
            tmp4 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 38) {
              this.pc = 43;
              continue contLoop;
            } else if (this.pc === 42) {
              return tmp3
            } else if (this.pc === 43) {
              this.pc = 47;
              continue contLoop;
            } else if (this.pc === 47) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 39;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 39;
              continue contLoop;
            } else if (this.pc === 39) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                selRes = Char.Digit;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp4 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
                  if (tmp4 instanceof runtime.EffectSig.class) {
                    this.pc = 40;
                    tmp4.contTrace.last.next = this;
                    tmp4.contTrace.last = this;
                    return tmp4
                  }
                  this.pc = 40;
                  continue contLoop;
                }
                this.pc = 45;
                continue contLoop;
              } else {
                this.pc = 46;
                continue contLoop;
              }
              this.pc = 42;
              continue contLoop;
            } else if (this.pc === 46) {
              tmp3 = [
                idx,
                acc
              ];
              this.pc = 42;
              continue contLoop;
            } else if (this.pc === 45) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(selRes.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 41;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 41;
              continue contLoop;
            } else if (this.pc === 41) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                ch = param0;
                tmp1 = idx + 1;
                idx = tmp1;
                tmp2 = acc + ch;
                acc = tmp2;
                tmp3 = runtime.Unit;
                this.pc = 43;
                continue contLoop;
              } else {
                this.pc = 44;
                continue contLoop;
              }
              this.pc = 42;
              continue contLoop;
            } else if (this.pc === 44) {
              tmp3 = [
                idx,
                acc
              ];
              this.pc = 42;
              continue contLoop;
            } else if (this.pc === 40) {
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              throw tmp4;
            }
            break;
          }
        }
        toString() { return "Cont$func$digits$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$digits$1.class(38);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      tmp5: while (true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = char1(idx);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$digits$1.class(39);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          selRes = Char.Digit;
          if (selRes === undefined) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp4 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
            if (tmp4 instanceof runtime.EffectSig.class) {
              tmp4.contTrace.last.next = new Cont$func$digits$1.class(40);
              tmp4.contTrace.last = tmp4.contTrace.last.next;
              return tmp4
            }
            tmp4 = runtime.resetDepth(tmp4, curDepth1);
            throw tmp4;
          }
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult = runtime.safeCall(selRes.unapply(param0));
          if (matchResult instanceof runtime.EffectSig.class) {
            matchResult.contTrace.last.next = new Cont$func$digits$1.class(41);
            matchResult.contTrace.last = matchResult.contTrace.last.next;
            return matchResult
          }
          matchResult = runtime.resetDepth(matchResult, curDepth1);
          if (matchResult instanceof runtime.MatchResult.class) {
            ch = param0;
            tmp1 = idx + 1;
            idx = tmp1;
            tmp2 = acc + ch;
            acc = tmp2;
            tmp3 = runtime.Unit;
            continue tmp5;
          } else {
            tmp3 = [
              idx,
              acc
            ];
          }
        } else {
          tmp3 = [
            idx,
            acc
          ];
        }
        break;
      }
      return tmp3
    };
    hex = function hex(idx, acc) {
      let scrut, param0, ch, matchResult, selRes, tmp1, tmp2, tmp3, curDepth1, tmp4, stackDelayRes1, Cont$func$hex$1;
      Cont$func$hex$1 = function Cont$func$hex$(pc1) {
        return new Cont$func$hex$.class(pc1);
      };
      Cont$func$hex$1.class = class Cont$func$hex$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp5;
          tmp5 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 48) {
            stackDelayRes1 = value$;
          } else if (this.pc === 49) {
            scrut = value$;
          } else if (this.pc === 51) {
            matchResult = value$;
          } else if (this.pc === 50) {
            tmp4 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 48) {
              this.pc = 53;
              continue contLoop;
            } else if (this.pc === 52) {
              return tmp3
            } else if (this.pc === 53) {
              this.pc = 57;
              continue contLoop;
            } else if (this.pc === 57) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 49;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 49;
              continue contLoop;
            } else if (this.pc === 49) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                selRes = Char.Digit;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp4 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
                  if (tmp4 instanceof runtime.EffectSig.class) {
                    this.pc = 50;
                    tmp4.contTrace.last.next = this;
                    tmp4.contTrace.last = this;
                    return tmp4
                  }
                  this.pc = 50;
                  continue contLoop;
                }
                this.pc = 55;
                continue contLoop;
              } else {
                this.pc = 56;
                continue contLoop;
              }
              this.pc = 52;
              continue contLoop;
            } else if (this.pc === 56) {
              tmp3 = [
                idx,
                acc
              ];
              this.pc = 52;
              continue contLoop;
            } else if (this.pc === 55) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(selRes.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 51;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 51;
              continue contLoop;
            } else if (this.pc === 51) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                ch = param0;
                tmp1 = idx + 1;
                idx = tmp1;
                tmp2 = acc + ch;
                acc = tmp2;
                tmp3 = runtime.Unit;
                this.pc = 53;
                continue contLoop;
              } else {
                this.pc = 54;
                continue contLoop;
              }
              this.pc = 52;
              continue contLoop;
            } else if (this.pc === 54) {
              tmp3 = [
                idx,
                acc
              ];
              this.pc = 52;
              continue contLoop;
            } else if (this.pc === 50) {
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              throw tmp4;
            }
            break;
          }
        }
        toString() { return "Cont$func$hex$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$hex$1.class(48);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      tmp5: while (true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = char1(idx);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$hex$1.class(49);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          selRes = Char.Digit;
          if (selRes === undefined) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp4 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
            if (tmp4 instanceof runtime.EffectSig.class) {
              tmp4.contTrace.last.next = new Cont$func$hex$1.class(50);
              tmp4.contTrace.last = tmp4.contTrace.last.next;
              return tmp4
            }
            tmp4 = runtime.resetDepth(tmp4, curDepth1);
            throw tmp4;
          }
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult = runtime.safeCall(selRes.unapply(param0));
          if (matchResult instanceof runtime.EffectSig.class) {
            matchResult.contTrace.last.next = new Cont$func$hex$1.class(51);
            matchResult.contTrace.last = matchResult.contTrace.last.next;
            return matchResult
          }
          matchResult = runtime.resetDepth(matchResult, curDepth1);
          if (matchResult instanceof runtime.MatchResult.class) {
            ch = param0;
            tmp1 = idx + 1;
            idx = tmp1;
            tmp2 = acc + ch;
            acc = tmp2;
            tmp3 = runtime.Unit;
            continue tmp5;
          } else {
            tmp3 = [
              idx,
              acc
            ];
          }
        } else {
          tmp3 = [
            idx,
            acc
          ];
        }
        break;
      }
      return tmp3
    };
    identifier = function identifier(idx, acc) {
      let scrut, param0, ch, matchResult, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, curDepth1, stackDelayRes1, Cont$func$identifier$1;
      Cont$func$identifier$1 = function Cont$func$identifier$(pc1) {
        return new Cont$func$identifier$.class(pc1);
      };
      Cont$func$identifier$1.class = class Cont$func$identifier$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp12;
          tmp12 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 58) {
            stackDelayRes1 = value$;
          } else if (this.pc === 59) {
            scrut = value$;
          } else if (this.pc === 72) {
            tmp11 = value$;
          } else if (this.pc === 73) {
            tmp9 = value$;
          } else if (this.pc === 70) {
            tmp10 = value$;
          } else if (this.pc === 71) {
            tmp9 = value$;
          } else if (this.pc === 68) {
            tmp8 = value$;
          } else if (this.pc === 69) {
            tmp9 = value$;
          } else if (this.pc === 74) {
            tmp3 = value$;
          } else if (this.pc === 60) {
            matchResult = value$;
          } else if (this.pc === 65) {
            tmp7 = value$;
          } else if (this.pc === 66) {
            tmp5 = value$;
          } else if (this.pc === 63) {
            tmp6 = value$;
          } else if (this.pc === 64) {
            tmp5 = value$;
          } else if (this.pc === 61) {
            tmp4 = value$;
          } else if (this.pc === 62) {
            tmp5 = value$;
          } else if (this.pc === 67) {
            tmp3 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 58) {
              this.pc = 76;
              continue contLoop;
            } else if (this.pc === 75) {
              return tmp3
            } else if (this.pc === 76) {
              this.pc = 92;
              continue contLoop;
            } else if (this.pc === 92) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 59;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 59;
              continue contLoop;
            } else if (this.pc === 59) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                this.pc = 84;
                continue contLoop;
              } else {
                if (acc === "true") {
                  this.pc = 87;
                  continue contLoop;
                } else if (acc === "false") {
                  this.pc = 89;
                  continue contLoop;
                  this.pc = 85;
                  continue contLoop;
                } else {
                  this.pc = 91;
                  continue contLoop;
                }
                this.pc = 85;
                continue contLoop;
              }
              this.pc = 75;
              continue contLoop;
            } else if (this.pc === 85) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp3 = Predef.tuple(idx, tmp9);
              if (tmp3 instanceof runtime.EffectSig.class) {
                this.pc = 74;
                tmp3.contTrace.last.next = this;
                tmp3.contTrace.last = this;
                return tmp3
              }
              this.pc = 74;
              continue contLoop;
            } else if (this.pc === 91) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp11 = Token.identifier(acc, idx);
              if (tmp11 instanceof runtime.EffectSig.class) {
                this.pc = 72;
                tmp11.contTrace.last.next = this;
                tmp11.contTrace.last = this;
                return tmp11
              }
              this.pc = 72;
              continue contLoop;
            } else if (this.pc === 72) {
              tmp11 = runtime.resetDepth(tmp11, curDepth1);
              this.pc = 90;
              continue contLoop;
            } else if (this.pc === 90) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp9 = runtime.safeCall(tmp11(instance$Ident$_LineLookupTable$_));
              if (tmp9 instanceof runtime.EffectSig.class) {
                this.pc = 73;
                tmp9.contTrace.last.next = this;
                tmp9.contTrace.last = this;
                return tmp9
              }
              this.pc = 73;
              continue contLoop;
            } else if (this.pc === 73) {
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              this.pc = 85;
              continue contLoop;
            } else if (this.pc === 89) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp10 = Token.boolean("false", idx);
              if (tmp10 instanceof runtime.EffectSig.class) {
                this.pc = 70;
                tmp10.contTrace.last.next = this;
                tmp10.contTrace.last = this;
                return tmp10
              }
              this.pc = 70;
              continue contLoop;
            } else if (this.pc === 70) {
              tmp10 = runtime.resetDepth(tmp10, curDepth1);
              this.pc = 88;
              continue contLoop;
            } else if (this.pc === 88) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp9 = runtime.safeCall(tmp10(instance$Ident$_LineLookupTable$_));
              if (tmp9 instanceof runtime.EffectSig.class) {
                this.pc = 71;
                tmp9.contTrace.last.next = this;
                tmp9.contTrace.last = this;
                return tmp9
              }
              this.pc = 71;
              continue contLoop;
            } else if (this.pc === 71) {
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              this.pc = 85;
              continue contLoop;
            } else if (this.pc === 87) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp8 = Token.boolean("true", idx);
              if (tmp8 instanceof runtime.EffectSig.class) {
                this.pc = 68;
                tmp8.contTrace.last.next = this;
                tmp8.contTrace.last = this;
                return tmp8
              }
              this.pc = 68;
              continue contLoop;
            } else if (this.pc === 68) {
              tmp8 = runtime.resetDepth(tmp8, curDepth1);
              this.pc = 86;
              continue contLoop;
            } else if (this.pc === 86) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp9 = runtime.safeCall(tmp8(instance$Ident$_LineLookupTable$_));
              if (tmp9 instanceof runtime.EffectSig.class) {
                this.pc = 69;
                tmp9.contTrace.last.next = this;
                tmp9.contTrace.last = this;
                return tmp9
              }
              this.pc = 69;
              continue contLoop;
            } else if (this.pc === 69) {
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              this.pc = 85;
              continue contLoop;
            } else if (this.pc === 74) {
              tmp3 = runtime.resetDepth(tmp3, curDepth1);
              this.pc = 75;
              continue contLoop;
            } else if (this.pc === 84) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(Lexer.IdentifierBody.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 60;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 60;
              continue contLoop;
            } else if (this.pc === 60) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                ch = param0;
                tmp1 = idx + 1;
                idx = tmp1;
                tmp2 = acc + ch;
                acc = tmp2;
                tmp3 = runtime.Unit;
                this.pc = 76;
                continue contLoop;
              } else {
                if (acc === "true") {
                  this.pc = 79;
                  continue contLoop;
                } else if (acc === "false") {
                  this.pc = 81;
                  continue contLoop;
                  this.pc = 77;
                  continue contLoop;
                } else {
                  this.pc = 83;
                  continue contLoop;
                }
                this.pc = 77;
                continue contLoop;
              }
              this.pc = 75;
              continue contLoop;
            } else if (this.pc === 77) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp3 = Predef.tuple(idx, tmp5);
              if (tmp3 instanceof runtime.EffectSig.class) {
                this.pc = 67;
                tmp3.contTrace.last.next = this;
                tmp3.contTrace.last = this;
                return tmp3
              }
              this.pc = 67;
              continue contLoop;
            } else if (this.pc === 83) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = Token.identifier(acc, idx);
              if (tmp7 instanceof runtime.EffectSig.class) {
                this.pc = 65;
                tmp7.contTrace.last.next = this;
                tmp7.contTrace.last = this;
                return tmp7
              }
              this.pc = 65;
              continue contLoop;
            } else if (this.pc === 65) {
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              this.pc = 82;
              continue contLoop;
            } else if (this.pc === 82) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp7(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 66;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 66;
              continue contLoop;
            } else if (this.pc === 66) {
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              this.pc = 77;
              continue contLoop;
            } else if (this.pc === 81) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.boolean("false", idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                this.pc = 63;
                tmp6.contTrace.last.next = this;
                tmp6.contTrace.last = this;
                return tmp6
              }
              this.pc = 63;
              continue contLoop;
            } else if (this.pc === 63) {
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              this.pc = 80;
              continue contLoop;
            } else if (this.pc === 80) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 64;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 64;
              continue contLoop;
            } else if (this.pc === 64) {
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              this.pc = 77;
              continue contLoop;
            } else if (this.pc === 79) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp4 = Token.boolean("true", idx);
              if (tmp4 instanceof runtime.EffectSig.class) {
                this.pc = 61;
                tmp4.contTrace.last.next = this;
                tmp4.contTrace.last = this;
                return tmp4
              }
              this.pc = 61;
              continue contLoop;
            } else if (this.pc === 61) {
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              this.pc = 78;
              continue contLoop;
            } else if (this.pc === 78) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp4(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 62;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 62;
              continue contLoop;
            } else if (this.pc === 62) {
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              this.pc = 77;
              continue contLoop;
            } else if (this.pc === 67) {
              tmp3 = runtime.resetDepth(tmp3, curDepth1);
              this.pc = 75;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$identifier$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$identifier$1.class(58);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      tmp12: while (true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = char1(idx);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$identifier$1.class(59);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult = runtime.safeCall(Lexer.IdentifierBody.unapply(param0));
          if (matchResult instanceof runtime.EffectSig.class) {
            matchResult.contTrace.last.next = new Cont$func$identifier$1.class(60);
            matchResult.contTrace.last = matchResult.contTrace.last.next;
            return matchResult
          }
          matchResult = runtime.resetDepth(matchResult, curDepth1);
          if (matchResult instanceof runtime.MatchResult.class) {
            ch = param0;
            tmp1 = idx + 1;
            idx = tmp1;
            tmp2 = acc + ch;
            acc = tmp2;
            tmp3 = runtime.Unit;
            continue tmp12;
          } else {
            if (acc === "true") {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp4 = Token.boolean("true", idx);
              if (tmp4 instanceof runtime.EffectSig.class) {
                tmp4.contTrace.last.next = new Cont$func$identifier$1.class(61);
                tmp4.contTrace.last = tmp4.contTrace.last.next;
                return tmp4
              }
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp4(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                tmp5.contTrace.last.next = new Cont$func$identifier$1.class(62);
                tmp5.contTrace.last = tmp5.contTrace.last.next;
                return tmp5
              }
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
            } else if (acc === "false") {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.boolean("false", idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                tmp6.contTrace.last.next = new Cont$func$identifier$1.class(63);
                tmp6.contTrace.last = tmp6.contTrace.last.next;
                return tmp6
              }
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                tmp5.contTrace.last.next = new Cont$func$identifier$1.class(64);
                tmp5.contTrace.last = tmp5.contTrace.last.next;
                return tmp5
              }
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = Token.identifier(acc, idx);
              if (tmp7 instanceof runtime.EffectSig.class) {
                tmp7.contTrace.last.next = new Cont$func$identifier$1.class(65);
                tmp7.contTrace.last = tmp7.contTrace.last.next;
                return tmp7
              }
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp7(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                tmp5.contTrace.last.next = new Cont$func$identifier$1.class(66);
                tmp5.contTrace.last = tmp5.contTrace.last.next;
                return tmp5
              }
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
            }
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp3 = Predef.tuple(idx, tmp5);
            if (tmp3 instanceof runtime.EffectSig.class) {
              tmp3.contTrace.last.next = new Cont$func$identifier$1.class(67);
              tmp3.contTrace.last = tmp3.contTrace.last.next;
              return tmp3
            }
            tmp3 = runtime.resetDepth(tmp3, curDepth1);
          }
        } else {
          if (acc === "true") {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp8 = Token.boolean("true", idx);
            if (tmp8 instanceof runtime.EffectSig.class) {
              tmp8.contTrace.last.next = new Cont$func$identifier$1.class(68);
              tmp8.contTrace.last = tmp8.contTrace.last.next;
              return tmp8
            }
            tmp8 = runtime.resetDepth(tmp8, curDepth1);
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp9 = runtime.safeCall(tmp8(instance$Ident$_LineLookupTable$_));
            if (tmp9 instanceof runtime.EffectSig.class) {
              tmp9.contTrace.last.next = new Cont$func$identifier$1.class(69);
              tmp9.contTrace.last = tmp9.contTrace.last.next;
              return tmp9
            }
            tmp9 = runtime.resetDepth(tmp9, curDepth1);
          } else if (acc === "false") {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp10 = Token.boolean("false", idx);
            if (tmp10 instanceof runtime.EffectSig.class) {
              tmp10.contTrace.last.next = new Cont$func$identifier$1.class(70);
              tmp10.contTrace.last = tmp10.contTrace.last.next;
              return tmp10
            }
            tmp10 = runtime.resetDepth(tmp10, curDepth1);
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp9 = runtime.safeCall(tmp10(instance$Ident$_LineLookupTable$_));
            if (tmp9 instanceof runtime.EffectSig.class) {
              tmp9.contTrace.last.next = new Cont$func$identifier$1.class(71);
              tmp9.contTrace.last = tmp9.contTrace.last.next;
              return tmp9
            }
            tmp9 = runtime.resetDepth(tmp9, curDepth1);
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp11 = Token.identifier(acc, idx);
            if (tmp11 instanceof runtime.EffectSig.class) {
              tmp11.contTrace.last.next = new Cont$func$identifier$1.class(72);
              tmp11.contTrace.last = tmp11.contTrace.last.next;
              return tmp11
            }
            tmp11 = runtime.resetDepth(tmp11, curDepth1);
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp9 = runtime.safeCall(tmp11(instance$Ident$_LineLookupTable$_));
            if (tmp9 instanceof runtime.EffectSig.class) {
              tmp9.contTrace.last.next = new Cont$func$identifier$1.class(73);
              tmp9.contTrace.last = tmp9.contTrace.last.next;
              return tmp9
            }
            tmp9 = runtime.resetDepth(tmp9, curDepth1);
          }
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp3 = Predef.tuple(idx, tmp9);
          if (tmp3 instanceof runtime.EffectSig.class) {
            tmp3.contTrace.last.next = new Cont$func$identifier$1.class(74);
            tmp3.contTrace.last = tmp3.contTrace.last.next;
            return tmp3
          }
          tmp3 = runtime.resetDepth(tmp3, curDepth1);
        }
        break;
      }
      return tmp3
    };
    operator = function operator(idx, acc) {
      let scrut, param0, ch, matchResult, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, curDepth1, stackDelayRes1, Cont$func$operator$1;
      Cont$func$operator$1 = function Cont$func$operator$(pc1) {
        return new Cont$func$operator$.class(pc1);
      };
      Cont$func$operator$1.class = class Cont$func$operator$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp8;
          tmp8 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 93) {
            stackDelayRes1 = value$;
          } else if (this.pc === 94) {
            scrut = value$;
          } else if (this.pc === 98) {
            tmp6 = value$;
          } else if (this.pc === 99) {
            tmp7 = value$;
          } else if (this.pc === 95) {
            matchResult = value$;
          } else if (this.pc === 96) {
            tmp4 = value$;
          } else if (this.pc === 97) {
            tmp5 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 93) {
              this.pc = 101;
              continue contLoop;
            } else if (this.pc === 100) {
              return tmp3
            } else if (this.pc === 101) {
              this.pc = 109;
              continue contLoop;
            } else if (this.pc === 109) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 94;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 94;
              continue contLoop;
            } else if (this.pc === 94) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                this.pc = 105;
                continue contLoop;
              } else {
                this.pc = 108;
                continue contLoop;
              }
              this.pc = 100;
              continue contLoop;
            } else if (this.pc === 106) {
              tmp3 = [
                idx,
                tmp7
              ];
              this.pc = 100;
              continue contLoop;
            } else if (this.pc === 108) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.symbol(acc, idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                this.pc = 98;
                tmp6.contTrace.last.next = this;
                tmp6.contTrace.last = this;
                return tmp6
              }
              this.pc = 98;
              continue contLoop;
            } else if (this.pc === 98) {
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              this.pc = 107;
              continue contLoop;
            } else if (this.pc === 107) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp7 instanceof runtime.EffectSig.class) {
                this.pc = 99;
                tmp7.contTrace.last.next = this;
                tmp7.contTrace.last = this;
                return tmp7
              }
              this.pc = 99;
              continue contLoop;
            } else if (this.pc === 99) {
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              this.pc = 106;
              continue contLoop;
            } else if (this.pc === 105) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(Lexer.Operator.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 95;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 95;
              continue contLoop;
            } else if (this.pc === 95) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                ch = param0;
                tmp1 = idx + 1;
                idx = tmp1;
                tmp2 = acc + ch;
                acc = tmp2;
                tmp3 = runtime.Unit;
                this.pc = 101;
                continue contLoop;
              } else {
                this.pc = 104;
                continue contLoop;
              }
              this.pc = 100;
              continue contLoop;
            } else if (this.pc === 102) {
              tmp3 = [
                idx,
                tmp5
              ];
              this.pc = 100;
              continue contLoop;
            } else if (this.pc === 104) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp4 = Token.symbol(acc, idx);
              if (tmp4 instanceof runtime.EffectSig.class) {
                this.pc = 96;
                tmp4.contTrace.last.next = this;
                tmp4.contTrace.last = this;
                return tmp4
              }
              this.pc = 96;
              continue contLoop;
            } else if (this.pc === 96) {
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              this.pc = 103;
              continue contLoop;
            } else if (this.pc === 103) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = runtime.safeCall(tmp4(instance$Ident$_LineLookupTable$_));
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 97;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 97;
              continue contLoop;
            } else if (this.pc === 97) {
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              this.pc = 102;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$operator$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$operator$1.class(93);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      tmp8: while (true) {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = char1(idx);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$operator$1.class(94);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          runtime.stackDepth = runtime.stackDepth + 1;
          matchResult = runtime.safeCall(Lexer.Operator.unapply(param0));
          if (matchResult instanceof runtime.EffectSig.class) {
            matchResult.contTrace.last.next = new Cont$func$operator$1.class(95);
            matchResult.contTrace.last = matchResult.contTrace.last.next;
            return matchResult
          }
          matchResult = runtime.resetDepth(matchResult, curDepth1);
          if (matchResult instanceof runtime.MatchResult.class) {
            ch = param0;
            tmp1 = idx + 1;
            idx = tmp1;
            tmp2 = acc + ch;
            acc = tmp2;
            tmp3 = runtime.Unit;
            continue tmp8;
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp4 = Token.symbol(acc, idx);
            if (tmp4 instanceof runtime.EffectSig.class) {
              tmp4.contTrace.last.next = new Cont$func$operator$1.class(96);
              tmp4.contTrace.last = tmp4.contTrace.last.next;
              return tmp4
            }
            tmp4 = runtime.resetDepth(tmp4, curDepth1);
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp5 = runtime.safeCall(tmp4(instance$Ident$_LineLookupTable$_));
            if (tmp5 instanceof runtime.EffectSig.class) {
              tmp5.contTrace.last.next = new Cont$func$operator$1.class(97);
              tmp5.contTrace.last = tmp5.contTrace.last.next;
              return tmp5
            }
            tmp5 = runtime.resetDepth(tmp5, curDepth1);
            tmp3 = [
              idx,
              tmp5
            ];
          }
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp6 = Token.symbol(acc, idx);
          if (tmp6 instanceof runtime.EffectSig.class) {
            tmp6.contTrace.last.next = new Cont$func$operator$1.class(98);
            tmp6.contTrace.last = tmp6.contTrace.last.next;
            return tmp6
          }
          tmp6 = runtime.resetDepth(tmp6, curDepth1);
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp7 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
          if (tmp7 instanceof runtime.EffectSig.class) {
            tmp7.contTrace.last.next = new Cont$func$operator$1.class(99);
            tmp7.contTrace.last = tmp7.contTrace.last.next;
            return tmp7
          }
          tmp7 = runtime.resetDepth(tmp7, curDepth1);
          tmp3 = [
            idx,
            tmp7
          ];
        }
        break;
      }
      return tmp3
    };
    comment = function comment(idx) {
      let start, content, scrut, param0, terminated, scrut1, param01, ch, scrut2, param02, scrut3, param03, ch1, scrut4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, curDepth1, tmp24, stackDelayRes1, Cont$func$comment$1;
      Cont$func$comment$1 = function Cont$func$comment$(pc1) {
        return new Cont$func$comment$.class(pc1);
      };
      Cont$func$comment$1.class = class Cont$func$comment$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp25;
          tmp25 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 110) {
            stackDelayRes1 = value$;
          } else if (this.pc === 111) {
            scrut = value$;
          } else if (this.pc === 123) {
            tmp24 = value$;
          } else if (this.pc === 117) {
            scrut1 = value$;
          } else if (this.pc === 121) {
            tmp22 = value$;
          } else if (this.pc === 122) {
            tmp23 = value$;
          } else if (this.pc === 119) {
            tmp19 = value$;
          } else if (this.pc === 120) {
            tmp20 = value$;
          } else if (this.pc === 118) {
            scrut2 = value$;
          } else if (this.pc === 112) {
            scrut3 = value$;
          } else if (this.pc === 115) {
            tmp7 = value$;
          } else if (this.pc === 116) {
            tmp8 = value$;
          } else if (this.pc === 113) {
            tmp5 = value$;
          } else if (this.pc === 114) {
            tmp6 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 110) {
              start = idx;
              content = "";
              this.pc = 147;
              continue contLoop;
            } else if (this.pc === 147) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 111;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 111;
              continue contLoop;
            } else if (this.pc === 111) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                if (param0 === "/") {
                  tmp1 = idx + 1;
                  idx = tmp1;
                  this.pc = 126;
                  continue contLoop;
                } else if (param0 === "*") {
                  terminated = false;
                  tmp9 = idx + 1;
                  idx = tmp9;
                  this.pc = 135;
                  continue contLoop;
                  this.pc = 124;
                  continue contLoop;
                } else {
                  this.pc = 145;
                  continue contLoop;
                }
                this.pc = 124;
                continue contLoop;
              } else {
                this.pc = 146;
                continue contLoop;
              }
              this.pc = 124;
              continue contLoop;
            } else if (this.pc === 124) {
              break contLoop;
            } else if (this.pc === 146) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return operator(idx, "/")
            } else if (this.pc === 145) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return operator(idx, "/")
            } else if (this.pc === 134) {
              return tmp12
            } else if (this.pc === 135) {
              if (terminated === false) {
                this.pc = 144;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp24 = new globalThis.Error("match error");
                if (tmp24 instanceof runtime.EffectSig.class) {
                  this.pc = 123;
                  tmp24.contTrace.last.next = this;
                  tmp24.contTrace.last = this;
                  return tmp24
                }
                this.pc = 123;
                continue contLoop;
              }
              this.pc = 134;
              continue contLoop;
            } else if (this.pc === 123) {
              tmp24 = runtime.resetDepth(tmp24, curDepth1);
              throw tmp24;
            } else if (this.pc === 144) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 117;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 117;
              continue contLoop;
            } else if (this.pc === 117) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param01 = scrut1.value;
                if (param01 === "*") {
                  tmp10 = idx + 1;
                  this.pc = 136;
                  continue contLoop;
                } else {
                  ch = param01;
                  tmp17 = idx + 1;
                  idx = tmp17;
                  tmp18 = content + ch;
                  content = tmp18;
                  tmp12 = runtime.Unit;
                  this.pc = 134;
                  continue contLoop;
                }
                this.pc = 134;
                continue contLoop;
              } else {
                if (terminated === true) {
                  this.pc = 140;
                  continue contLoop;
                } else {
                  this.pc = 143;
                  continue contLoop;
                }
                this.pc = 137;
                continue contLoop;
              }
              this.pc = 134;
              continue contLoop;
            } else if (this.pc === 137) {
              tmp12 = tmp21;
              this.pc = 134;
              continue contLoop;
            } else if (this.pc === 141) {
              tmp21 = [
                idx,
                tmp23
              ];
              this.pc = 137;
              continue contLoop;
            } else if (this.pc === 143) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp22 = Token.error(start, idx);
              if (tmp22 instanceof runtime.EffectSig.class) {
                this.pc = 121;
                tmp22.contTrace.last.next = this;
                tmp22.contTrace.last = this;
                return tmp22
              }
              this.pc = 121;
              continue contLoop;
            } else if (this.pc === 121) {
              tmp22 = runtime.resetDepth(tmp22, curDepth1);
              this.pc = 142;
              continue contLoop;
            } else if (this.pc === 142) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp23 = runtime.safeCall(tmp22(instance$Ident$_LineLookupTable$_));
              if (tmp23 instanceof runtime.EffectSig.class) {
                this.pc = 122;
                tmp23.contTrace.last.next = this;
                tmp23.contTrace.last = this;
                return tmp23
              }
              this.pc = 122;
              continue contLoop;
            } else if (this.pc === 122) {
              tmp23 = runtime.resetDepth(tmp23, curDepth1);
              this.pc = 141;
              continue contLoop;
            } else if (this.pc === 138) {
              tmp21 = [
                idx,
                tmp20
              ];
              this.pc = 137;
              continue contLoop;
            } else if (this.pc === 140) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp19 = Token.comment(content, start, idx);
              if (tmp19 instanceof runtime.EffectSig.class) {
                this.pc = 119;
                tmp19.contTrace.last.next = this;
                tmp19.contTrace.last = this;
                return tmp19
              }
              this.pc = 119;
              continue contLoop;
            } else if (this.pc === 119) {
              tmp19 = runtime.resetDepth(tmp19, curDepth1);
              this.pc = 139;
              continue contLoop;
            } else if (this.pc === 139) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp20 = runtime.safeCall(tmp19(instance$Ident$_LineLookupTable$_));
              if (tmp20 instanceof runtime.EffectSig.class) {
                this.pc = 120;
                tmp20.contTrace.last.next = this;
                tmp20.contTrace.last = this;
                return tmp20
              }
              this.pc = 120;
              continue contLoop;
            } else if (this.pc === 120) {
              tmp20 = runtime.resetDepth(tmp20, curDepth1);
              this.pc = 138;
              continue contLoop;
            } else if (this.pc === 136) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = char1(tmp10);
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 118;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 118;
              continue contLoop;
            } else if (this.pc === 118) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (scrut2 instanceof Option.Some.class) {
                param02 = scrut2.value;
                if (param02 === "/") {
                  tmp11 = idx + 2;
                  idx = tmp11;
                  terminated = true;
                  tmp12 = runtime.Unit;
                  this.pc = 135;
                  continue contLoop;
                } else {
                  ch = param01;
                  tmp13 = idx + 1;
                  idx = tmp13;
                  tmp14 = content + ch;
                  content = tmp14;
                  tmp12 = runtime.Unit;
                  this.pc = 134;
                  continue contLoop;
                }
                this.pc = 134;
                continue contLoop;
              } else {
                ch = param01;
                tmp15 = idx + 1;
                idx = tmp15;
                tmp16 = content + ch;
                content = tmp16;
                tmp12 = runtime.Unit;
                this.pc = 134;
                continue contLoop;
              }
              this.pc = 134;
              continue contLoop;
            } else if (this.pc === 125) {
              return tmp4
            } else if (this.pc === 126) {
              this.pc = 133;
              continue contLoop;
            } else if (this.pc === 133) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut3 = char1(idx);
              if (scrut3 instanceof runtime.EffectSig.class) {
                this.pc = 112;
                scrut3.contTrace.last.next = this;
                scrut3.contTrace.last = this;
                return scrut3
              }
              this.pc = 112;
              continue contLoop;
            } else if (this.pc === 112) {
              scrut3 = runtime.resetDepth(scrut3, curDepth1);
              if (scrut3 instanceof Option.Some.class) {
                param03 = scrut3.value;
                ch1 = param03;
                scrut4 = ch1 !== "\n";
                if (scrut4 === true) {
                  tmp2 = idx + 1;
                  idx = tmp2;
                  tmp3 = content + ch1;
                  content = tmp3;
                  tmp4 = runtime.Unit;
                  this.pc = 126;
                  continue contLoop;
                } else {
                  this.pc = 129;
                  continue contLoop;
                }
                this.pc = 125;
                continue contLoop;
              } else {
                this.pc = 132;
                continue contLoop;
              }
              this.pc = 125;
              continue contLoop;
            } else if (this.pc === 130) {
              tmp4 = [
                idx,
                tmp8
              ];
              this.pc = 125;
              continue contLoop;
            } else if (this.pc === 132) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = Token.comment(content, start, idx);
              if (tmp7 instanceof runtime.EffectSig.class) {
                this.pc = 115;
                tmp7.contTrace.last.next = this;
                tmp7.contTrace.last = this;
                return tmp7
              }
              this.pc = 115;
              continue contLoop;
            } else if (this.pc === 115) {
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              this.pc = 131;
              continue contLoop;
            } else if (this.pc === 131) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp8 = runtime.safeCall(tmp7(instance$Ident$_LineLookupTable$_));
              if (tmp8 instanceof runtime.EffectSig.class) {
                this.pc = 116;
                tmp8.contTrace.last.next = this;
                tmp8.contTrace.last = this;
                return tmp8
              }
              this.pc = 116;
              continue contLoop;
            } else if (this.pc === 116) {
              tmp8 = runtime.resetDepth(tmp8, curDepth1);
              this.pc = 130;
              continue contLoop;
            } else if (this.pc === 127) {
              tmp4 = [
                idx,
                tmp6
              ];
              this.pc = 125;
              continue contLoop;
            } else if (this.pc === 129) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = Token.comment(content, start, idx);
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 113;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 113;
              continue contLoop;
            } else if (this.pc === 113) {
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              this.pc = 128;
              continue contLoop;
            } else if (this.pc === 128) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = runtime.safeCall(tmp5(instance$Ident$_LineLookupTable$_));
              if (tmp6 instanceof runtime.EffectSig.class) {
                this.pc = 114;
                tmp6.contTrace.last.next = this;
                tmp6.contTrace.last = this;
                return tmp6
              }
              this.pc = 114;
              continue contLoop;
            } else if (this.pc === 114) {
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              this.pc = 127;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$comment$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$comment$1.class(110);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      start = idx;
      content = "";
      runtime.stackDepth = runtime.stackDepth + 1;
      scrut = char1(idx);
      if (scrut instanceof runtime.EffectSig.class) {
        scrut.contTrace.last.next = new Cont$func$comment$1.class(111);
        scrut.contTrace.last = scrut.contTrace.last.next;
        return scrut
      }
      scrut = runtime.resetDepth(scrut, curDepth1);
      if (scrut instanceof Option.Some.class) {
        param0 = scrut.value;
        if (param0 === "/") {
          tmp1 = idx + 1;
          idx = tmp1;
          tmp25: while (true) {
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut3 = char1(idx);
            if (scrut3 instanceof runtime.EffectSig.class) {
              scrut3.contTrace.last.next = new Cont$func$comment$1.class(112);
              scrut3.contTrace.last = scrut3.contTrace.last.next;
              return scrut3
            }
            scrut3 = runtime.resetDepth(scrut3, curDepth1);
            if (scrut3 instanceof Option.Some.class) {
              param03 = scrut3.value;
              ch1 = param03;
              scrut4 = ch1 !== "\n";
              if (scrut4 === true) {
                tmp2 = idx + 1;
                idx = tmp2;
                tmp3 = content + ch1;
                content = tmp3;
                tmp4 = runtime.Unit;
                continue tmp25;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp5 = Token.comment(content, start, idx);
                if (tmp5 instanceof runtime.EffectSig.class) {
                  tmp5.contTrace.last.next = new Cont$func$comment$1.class(113);
                  tmp5.contTrace.last = tmp5.contTrace.last.next;
                  return tmp5
                }
                tmp5 = runtime.resetDepth(tmp5, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp6 = runtime.safeCall(tmp5(instance$Ident$_LineLookupTable$_));
                if (tmp6 instanceof runtime.EffectSig.class) {
                  tmp6.contTrace.last.next = new Cont$func$comment$1.class(114);
                  tmp6.contTrace.last = tmp6.contTrace.last.next;
                  return tmp6
                }
                tmp6 = runtime.resetDepth(tmp6, curDepth1);
                tmp4 = [
                  idx,
                  tmp6
                ];
              }
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = Token.comment(content, start, idx);
              if (tmp7 instanceof runtime.EffectSig.class) {
                tmp7.contTrace.last.next = new Cont$func$comment$1.class(115);
                tmp7.contTrace.last = tmp7.contTrace.last.next;
                return tmp7
              }
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp8 = runtime.safeCall(tmp7(instance$Ident$_LineLookupTable$_));
              if (tmp8 instanceof runtime.EffectSig.class) {
                tmp8.contTrace.last.next = new Cont$func$comment$1.class(116);
                tmp8.contTrace.last = tmp8.contTrace.last.next;
                return tmp8
              }
              tmp8 = runtime.resetDepth(tmp8, curDepth1);
              tmp4 = [
                idx,
                tmp8
              ];
            }
            break;
          }
          return tmp4
        } else if (param0 === "*") {
          terminated = false;
          tmp9 = idx + 1;
          idx = tmp9;
          tmp26: while (true) {
            if (terminated === false) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx);
              if (scrut1 instanceof runtime.EffectSig.class) {
                scrut1.contTrace.last.next = new Cont$func$comment$1.class(117);
                scrut1.contTrace.last = scrut1.contTrace.last.next;
                return scrut1
              }
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param01 = scrut1.value;
                if (param01 === "*") {
                  tmp10 = idx + 1;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  scrut2 = char1(tmp10);
                  if (scrut2 instanceof runtime.EffectSig.class) {
                    scrut2.contTrace.last.next = new Cont$func$comment$1.class(118);
                    scrut2.contTrace.last = scrut2.contTrace.last.next;
                    return scrut2
                  }
                  scrut2 = runtime.resetDepth(scrut2, curDepth1);
                  if (scrut2 instanceof Option.Some.class) {
                    param02 = scrut2.value;
                    if (param02 === "/") {
                      tmp11 = idx + 2;
                      idx = tmp11;
                      terminated = true;
                      tmp12 = runtime.Unit;
                      continue tmp26;
                    } else {
                      ch = param01;
                      tmp13 = idx + 1;
                      idx = tmp13;
                      tmp14 = content + ch;
                      content = tmp14;
                      tmp12 = runtime.Unit;
                    }
                  } else {
                    ch = param01;
                    tmp15 = idx + 1;
                    idx = tmp15;
                    tmp16 = content + ch;
                    content = tmp16;
                    tmp12 = runtime.Unit;
                  }
                } else {
                  ch = param01;
                  tmp17 = idx + 1;
                  idx = tmp17;
                  tmp18 = content + ch;
                  content = tmp18;
                  tmp12 = runtime.Unit;
                }
              } else {
                if (terminated === true) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp19 = Token.comment(content, start, idx);
                  if (tmp19 instanceof runtime.EffectSig.class) {
                    tmp19.contTrace.last.next = new Cont$func$comment$1.class(119);
                    tmp19.contTrace.last = tmp19.contTrace.last.next;
                    return tmp19
                  }
                  tmp19 = runtime.resetDepth(tmp19, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp20 = runtime.safeCall(tmp19(instance$Ident$_LineLookupTable$_));
                  if (tmp20 instanceof runtime.EffectSig.class) {
                    tmp20.contTrace.last.next = new Cont$func$comment$1.class(120);
                    tmp20.contTrace.last = tmp20.contTrace.last.next;
                    return tmp20
                  }
                  tmp20 = runtime.resetDepth(tmp20, curDepth1);
                  tmp21 = [
                    idx,
                    tmp20
                  ];
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp22 = Token.error(start, idx);
                  if (tmp22 instanceof runtime.EffectSig.class) {
                    tmp22.contTrace.last.next = new Cont$func$comment$1.class(121);
                    tmp22.contTrace.last = tmp22.contTrace.last.next;
                    return tmp22
                  }
                  tmp22 = runtime.resetDepth(tmp22, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp23 = runtime.safeCall(tmp22(instance$Ident$_LineLookupTable$_));
                  if (tmp23 instanceof runtime.EffectSig.class) {
                    tmp23.contTrace.last.next = new Cont$func$comment$1.class(122);
                    tmp23.contTrace.last = tmp23.contTrace.last.next;
                    return tmp23
                  }
                  tmp23 = runtime.resetDepth(tmp23, curDepth1);
                  tmp21 = [
                    idx,
                    tmp23
                  ];
                }
                tmp12 = tmp21;
              }
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp24 = new globalThis.Error("match error");
              if (tmp24 instanceof runtime.EffectSig.class) {
                tmp24.contTrace.last.next = new Cont$func$comment$1.class(123);
                tmp24.contTrace.last = tmp24.contTrace.last.next;
                return tmp24
              }
              tmp24 = runtime.resetDepth(tmp24, curDepth1);
              throw tmp24;
            }
            break;
          }
          return tmp12
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          return operator(idx, "/")
        }
      } else {
        runtime.stackDepth = runtime.stackDepth + 1;
        return operator(idx, "/")
      }
    };
    scanHexDigits = function scanHexDigits(idx, lim, acc, cnt) {
      let scrut, param0, ch, matchResult, scrut1, selRes, tmp1, tmp2, selRes1, tmp3, tmp4, tmp5, tmp6, tmp7, curDepth1, tmp8, tmp9, stackDelayRes1, Cont$func$scanHexDigits$1;
      Cont$func$scanHexDigits$1 = function Cont$func$scanHexDigits$(pc1) {
        return new Cont$func$scanHexDigits$.class(pc1);
      };
      Cont$func$scanHexDigits$1.class = class Cont$func$scanHexDigits$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp10;
          tmp10 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 148) {
            stackDelayRes1 = value$;
          } else if (this.pc === 149) {
            scrut = value$;
          } else if (this.pc === 151) {
            matchResult = value$;
          } else if (this.pc === 153) {
            tmp3 = value$;
          } else if (this.pc === 152) {
            tmp9 = value$;
          } else if (this.pc === 150) {
            tmp8 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 148) {
              this.pc = 161;
              continue contLoop;
            } else if (this.pc === 161) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 149;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 149;
              continue contLoop;
            } else if (this.pc === 149) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                selRes = Char.HexDigit;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp8 = new globalThis.Error("Access to required field 'HexDigit' yielded 'undefined'");
                  if (tmp8 instanceof runtime.EffectSig.class) {
                    this.pc = 150;
                    tmp8.contTrace.last.next = this;
                    tmp8.contTrace.last = this;
                    return tmp8
                  }
                  this.pc = 150;
                  continue contLoop;
                }
                this.pc = 159;
                continue contLoop;
              } else {
                this.pc = 160;
                continue contLoop;
              }
              this.pc = 154;
              continue contLoop;
            } else if (this.pc === 154) {
              break contLoop;
            } else if (this.pc === 160) {
              return [
                idx,
                acc,
                cnt
              ]
            } else if (this.pc === 159) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(selRes.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 151;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 151;
              continue contLoop;
            } else if (this.pc === 151) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                ch = param0;
                scrut1 = cnt < lim;
                if (scrut1 === true) {
                  tmp1 = idx + 1;
                  tmp2 = acc * 16;
                  selRes1 = globalThis.parseInt;
                  if (selRes1 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp9 = new globalThis.Error("Access to required field 'parseInt' yielded 'undefined'");
                    if (tmp9 instanceof runtime.EffectSig.class) {
                      this.pc = 152;
                      tmp9.contTrace.last.next = this;
                      tmp9.contTrace.last = this;
                      return tmp9
                    }
                    this.pc = 152;
                    continue contLoop;
                  }
                  this.pc = 156;
                  continue contLoop;
                } else {
                  tmp6 = idx + 1;
                  tmp7 = cnt + 1;
                  this.pc = 157;
                  continue contLoop;
                }
                this.pc = 154;
                continue contLoop;
              } else {
                this.pc = 158;
                continue contLoop;
              }
              this.pc = 154;
              continue contLoop;
            } else if (this.pc === 158) {
              return [
                idx,
                acc,
                cnt
              ]
            } else if (this.pc === 157) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return scanHexDigits(tmp6, lim, acc, tmp7)
            } else if (this.pc === 155) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return scanHexDigits(tmp1, lim, tmp4, tmp5)
            } else if (this.pc === 156) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp3 = runtime.safeCall(selRes1(ch, 16));
              if (tmp3 instanceof runtime.EffectSig.class) {
                this.pc = 153;
                tmp3.contTrace.last.next = this;
                tmp3.contTrace.last = this;
                return tmp3
              }
              this.pc = 153;
              continue contLoop;
            } else if (this.pc === 153) {
              tmp3 = runtime.resetDepth(tmp3, curDepth1);
              tmp4 = tmp2 + tmp3;
              tmp5 = cnt + 1;
              this.pc = 155;
              continue contLoop;
            } else if (this.pc === 152) {
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              throw tmp9;
            } else if (this.pc === 150) {
              tmp8 = runtime.resetDepth(tmp8, curDepth1);
              throw tmp8;
            }
            break;
          }
        }
        toString() { return "Cont$func$scanHexDigits$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$scanHexDigits$1.class(148);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      runtime.stackDepth = runtime.stackDepth + 1;
      scrut = char1(idx);
      if (scrut instanceof runtime.EffectSig.class) {
        scrut.contTrace.last.next = new Cont$func$scanHexDigits$1.class(149);
        scrut.contTrace.last = scrut.contTrace.last.next;
        return scrut
      }
      scrut = runtime.resetDepth(scrut, curDepth1);
      if (scrut instanceof Option.Some.class) {
        param0 = scrut.value;
        selRes = Char.HexDigit;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp8 = new globalThis.Error("Access to required field 'HexDigit' yielded 'undefined'");
          if (tmp8 instanceof runtime.EffectSig.class) {
            tmp8.contTrace.last.next = new Cont$func$scanHexDigits$1.class(150);
            tmp8.contTrace.last = tmp8.contTrace.last.next;
            return tmp8
          }
          tmp8 = runtime.resetDepth(tmp8, curDepth1);
          throw tmp8;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapply(param0));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$scanHexDigits$1.class(151);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth1);
        if (matchResult instanceof runtime.MatchResult.class) {
          ch = param0;
          scrut1 = cnt < lim;
          if (scrut1 === true) {
            tmp1 = idx + 1;
            tmp2 = acc * 16;
            selRes1 = globalThis.parseInt;
            if (selRes1 === undefined) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp9 = new globalThis.Error("Access to required field 'parseInt' yielded 'undefined'");
              if (tmp9 instanceof runtime.EffectSig.class) {
                tmp9.contTrace.last.next = new Cont$func$scanHexDigits$1.class(152);
                tmp9.contTrace.last = tmp9.contTrace.last.next;
                return tmp9
              }
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              throw tmp9;
            }
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp3 = runtime.safeCall(selRes1(ch, 16));
            if (tmp3 instanceof runtime.EffectSig.class) {
              tmp3.contTrace.last.next = new Cont$func$scanHexDigits$1.class(153);
              tmp3.contTrace.last = tmp3.contTrace.last.next;
              return tmp3
            }
            tmp3 = runtime.resetDepth(tmp3, curDepth1);
            tmp4 = tmp2 + tmp3;
            tmp5 = cnt + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            return scanHexDigits(tmp1, lim, tmp4, tmp5)
          } else {
            tmp6 = idx + 1;
            tmp7 = cnt + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            return scanHexDigits(tmp6, lim, acc, tmp7)
          }
        } else {
          return [
            idx,
            acc,
            cnt
          ]
        }
      } else {
        return [
          idx,
          acc,
          cnt
        ]
      }
    };
    escape = function escape(idx) {
      let scrut, param0, ch, scrut1, first2, first1, first0, idx1, cp, cnt, scrut2, param01, scrut3, first21, first11, first01, idx2, cp1, cnt1, idx3, scrut4, param02, scrut5, first22, first12, first02, idx4, cp2, cnt2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, selRes, tmp19, tmp20, tmp21, tmp22, tmp23, selRes1, tmp24, tmp25, tmp26, selRes2, tmp27, tmp28, tmp29, selRes3, tmp30, tmp31, tmp32, curDepth1, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, stackDelayRes1, Cont$func$escape$1;
      Cont$func$escape$1 = function Cont$func$escape$(pc1) {
        return new Cont$func$escape$.class(pc1);
      };
      Cont$func$escape$1.class = class Cont$func$escape$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp42;
          tmp42 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 162) {
            stackDelayRes1 = value$;
          } else if (this.pc === 163) {
            scrut = value$;
          } else if (this.pc === 195) {
            tmp41 = value$;
          } else if (this.pc === 194) {
            tmp32 = value$;
          } else if (this.pc === 177) {
            scrut2 = value$;
          } else if (this.pc === 189) {
            scrut1 = value$;
          } else if (this.pc === 193) {
            tmp40 = value$;
          } else if (this.pc === 191) {
            tmp30 = value$;
          } else if (this.pc === 190) {
            tmp39 = value$;
          } else if (this.pc === 192) {
            tmp29 = value$;
          } else if (this.pc === 184) {
            scrut1 = value$;
          } else if (this.pc === 188) {
            tmp38 = value$;
          } else if (this.pc === 186) {
            tmp27 = value$;
          } else if (this.pc === 185) {
            tmp37 = value$;
          } else if (this.pc === 187) {
            tmp26 = value$;
          } else if (this.pc === 178) {
            scrut3 = value$;
          } else if (this.pc === 183) {
            tmp36 = value$;
          } else if (this.pc === 179) {
            scrut4 = value$;
          } else if (this.pc === 181) {
            tmp24 = value$;
          } else if (this.pc === 180) {
            tmp35 = value$;
          } else if (this.pc === 182) {
            tmp23 = value$;
          } else if (this.pc === 172) {
            scrut5 = value$;
          } else if (this.pc === 176) {
            tmp34 = value$;
          } else if (this.pc === 174) {
            tmp19 = value$;
          } else if (this.pc === 173) {
            tmp33 = value$;
          } else if (this.pc === 175) {
            tmp18 = value$;
          } else if (this.pc === 171) {
            tmp16 = value$;
          } else if (this.pc === 170) {
            tmp14 = value$;
          } else if (this.pc === 169) {
            tmp12 = value$;
          } else if (this.pc === 168) {
            tmp10 = value$;
          } else if (this.pc === 167) {
            tmp8 = value$;
          } else if (this.pc === 166) {
            tmp6 = value$;
          } else if (this.pc === 165) {
            tmp4 = value$;
          } else if (this.pc === 164) {
            tmp2 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 162) {
              this.pc = 235;
              continue contLoop;
            } else if (this.pc === 235) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 163;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 163;
              continue contLoop;
            } else if (this.pc === 163) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                if (param0 === "n") {
                  tmp1 = idx + 1;
                  this.pc = 198;
                  continue contLoop;
                } else if (param0 === "r") {
                  tmp3 = idx + 1;
                  this.pc = 200;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                } else if (param0 === "t") {
                  tmp5 = idx + 1;
                  this.pc = 202;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                } else if (param0 === "0") {
                  tmp7 = idx + 1;
                  this.pc = 204;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                } else if (param0 === "b") {
                  tmp9 = idx + 1;
                  this.pc = 206;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                  this.pc = 196;
                  continue contLoop;
                } else {
                  if (param0 === "f") {
                    tmp11 = idx + 1;
                    this.pc = 208;
                    continue contLoop;
                  } else if (param0 === "\"") {
                    tmp13 = idx + 1;
                    this.pc = 210;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                  } else if (param0 === "\\") {
                    tmp15 = idx + 1;
                    this.pc = 212;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                  } else if (param0 === "x") {
                    tmp17 = idx + 1;
                    this.pc = 216;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                  } else if (param0 === "u") {
                    tmp20 = idx + 1;
                    this.pc = 231;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                    this.pc = 196;
                    continue contLoop;
                  } else {
                    ch = param0;
                    tmp31 = idx + 1;
                    this.pc = 233;
                    continue contLoop;
                  }
                  this.pc = 196;
                  continue contLoop;
                }
                this.pc = 196;
                continue contLoop;
              } else if (scrut instanceof Option.None.class) {
                this.pc = 234;
                continue contLoop;
                this.pc = 196;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp41 = new globalThis.Error("match error");
                if (tmp41 instanceof runtime.EffectSig.class) {
                  this.pc = 195;
                  tmp41.contTrace.last.next = this;
                  tmp41.contTrace.last = this;
                  return tmp41
                }
                this.pc = 195;
                continue contLoop;
              }
              this.pc = 196;
              continue contLoop;
            } else if (this.pc === 196) {
              break contLoop;
            } else if (this.pc === 195) {
              tmp41 = runtime.resetDepth(tmp41, curDepth1);
              throw tmp41;
            } else if (this.pc === 234) {
              return [
                idx,
                Option.None
              ]
            } else if (this.pc === 232) {
              return [
                tmp31,
                tmp32
              ]
            } else if (this.pc === 233) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp32 = Option.Some(ch);
              if (tmp32 instanceof runtime.EffectSig.class) {
                this.pc = 194;
                tmp32.contTrace.last.next = this;
                tmp32.contTrace.last = this;
                return tmp32
              }
              this.pc = 194;
              continue contLoop;
            } else if (this.pc === 194) {
              tmp32 = runtime.resetDepth(tmp32, curDepth1);
              this.pc = 232;
              continue contLoop;
            } else if (this.pc === 231) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = char1(tmp20);
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 177;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 177;
              continue contLoop;
            } else if (this.pc === 177) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (scrut2 instanceof Option.Some.class) {
                param01 = scrut2.value;
                if (param01 === "{") {
                  tmp21 = idx + 2;
                  this.pc = 222;
                  continue contLoop;
                } else {
                  tmp25 = idx + 1;
                  this.pc = 226;
                  continue contLoop;
                }
                this.pc = 196;
                continue contLoop;
              } else {
                tmp28 = idx + 1;
                this.pc = 230;
                continue contLoop;
              }
              this.pc = 196;
              continue contLoop;
            } else if (this.pc === 230) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = scanHexDigits(tmp28, 4, 0, 0);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 189;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 189;
              continue contLoop;
            } else if (this.pc === 189) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (globalThis.Array.isArray(scrut1) && scrut1.length === 3) {
                first0 = scrut1[0];
                first1 = scrut1[1];
                first2 = scrut1[2];
                idx1 = first0;
                cp = first1;
                cnt = first2;
                if (cnt === 0) {
                  tmp29 = Option.None;
                  this.pc = 227;
                  continue contLoop;
                } else {
                  selRes3 = globalThis.String;
                  if (selRes3 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp39 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                    if (tmp39 instanceof runtime.EffectSig.class) {
                      this.pc = 190;
                      tmp39.contTrace.last.next = this;
                      tmp39.contTrace.last = this;
                      return tmp39
                    }
                    this.pc = 190;
                    continue contLoop;
                  }
                  this.pc = 229;
                  continue contLoop;
                }
                this.pc = 227;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp40 = new globalThis.Error("match error");
                if (tmp40 instanceof runtime.EffectSig.class) {
                  this.pc = 193;
                  tmp40.contTrace.last.next = this;
                  tmp40.contTrace.last = this;
                  return tmp40
                }
                this.pc = 193;
                continue contLoop;
              }
              this.pc = 196;
              continue contLoop;
            } else if (this.pc === 193) {
              tmp40 = runtime.resetDepth(tmp40, curDepth1);
              throw tmp40;
            } else if (this.pc === 227) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return Predef.tuple(idx1, tmp29)
            } else if (this.pc === 228) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp29 = Option.Some(tmp30);
              if (tmp29 instanceof runtime.EffectSig.class) {
                this.pc = 192;
                tmp29.contTrace.last.next = this;
                tmp29.contTrace.last = this;
                return tmp29
              }
              this.pc = 192;
              continue contLoop;
            } else if (this.pc === 229) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp30 = runtime.safeCall(selRes3.fromCodePoint(cp));
              if (tmp30 instanceof runtime.EffectSig.class) {
                this.pc = 191;
                tmp30.contTrace.last.next = this;
                tmp30.contTrace.last = this;
                return tmp30
              }
              this.pc = 191;
              continue contLoop;
            } else if (this.pc === 191) {
              tmp30 = runtime.resetDepth(tmp30, curDepth1);
              this.pc = 228;
              continue contLoop;
            } else if (this.pc === 190) {
              tmp39 = runtime.resetDepth(tmp39, curDepth1);
              throw tmp39;
            } else if (this.pc === 192) {
              tmp29 = runtime.resetDepth(tmp29, curDepth1);
              this.pc = 227;
              continue contLoop;
            } else if (this.pc === 226) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = scanHexDigits(tmp25, 4, 0, 0);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 184;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 184;
              continue contLoop;
            } else if (this.pc === 184) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (globalThis.Array.isArray(scrut1) && scrut1.length === 3) {
                first0 = scrut1[0];
                first1 = scrut1[1];
                first2 = scrut1[2];
                idx1 = first0;
                cp = first1;
                cnt = first2;
                if (cnt === 0) {
                  tmp26 = Option.None;
                  this.pc = 223;
                  continue contLoop;
                } else {
                  selRes2 = globalThis.String;
                  if (selRes2 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp37 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                    if (tmp37 instanceof runtime.EffectSig.class) {
                      this.pc = 185;
                      tmp37.contTrace.last.next = this;
                      tmp37.contTrace.last = this;
                      return tmp37
                    }
                    this.pc = 185;
                    continue contLoop;
                  }
                  this.pc = 225;
                  continue contLoop;
                }
                this.pc = 223;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp38 = new globalThis.Error("match error");
                if (tmp38 instanceof runtime.EffectSig.class) {
                  this.pc = 188;
                  tmp38.contTrace.last.next = this;
                  tmp38.contTrace.last = this;
                  return tmp38
                }
                this.pc = 188;
                continue contLoop;
              }
              this.pc = 196;
              continue contLoop;
            } else if (this.pc === 188) {
              tmp38 = runtime.resetDepth(tmp38, curDepth1);
              throw tmp38;
            } else if (this.pc === 223) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return Predef.tuple(idx1, tmp26)
            } else if (this.pc === 224) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp26 = Option.Some(tmp27);
              if (tmp26 instanceof runtime.EffectSig.class) {
                this.pc = 187;
                tmp26.contTrace.last.next = this;
                tmp26.contTrace.last = this;
                return tmp26
              }
              this.pc = 187;
              continue contLoop;
            } else if (this.pc === 225) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp27 = runtime.safeCall(selRes2.fromCodePoint(cp));
              if (tmp27 instanceof runtime.EffectSig.class) {
                this.pc = 186;
                tmp27.contTrace.last.next = this;
                tmp27.contTrace.last = this;
                return tmp27
              }
              this.pc = 186;
              continue contLoop;
            } else if (this.pc === 186) {
              tmp27 = runtime.resetDepth(tmp27, curDepth1);
              this.pc = 224;
              continue contLoop;
            } else if (this.pc === 185) {
              tmp37 = runtime.resetDepth(tmp37, curDepth1);
              throw tmp37;
            } else if (this.pc === 187) {
              tmp26 = runtime.resetDepth(tmp26, curDepth1);
              this.pc = 223;
              continue contLoop;
            } else if (this.pc === 222) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut3 = scanHexDigits(tmp21, 6, 0, 0);
              if (scrut3 instanceof runtime.EffectSig.class) {
                this.pc = 178;
                scrut3.contTrace.last.next = this;
                scrut3.contTrace.last = this;
                return scrut3
              }
              this.pc = 178;
              continue contLoop;
            } else if (this.pc === 178) {
              scrut3 = runtime.resetDepth(scrut3, curDepth1);
              if (globalThis.Array.isArray(scrut3) && scrut3.length === 3) {
                first01 = scrut3[0];
                first11 = scrut3[1];
                first21 = scrut3[2];
                idx2 = first01;
                cp1 = first11;
                cnt1 = first21;
                this.pc = 221;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp36 = new globalThis.Error("match error");
                if (tmp36 instanceof runtime.EffectSig.class) {
                  this.pc = 183;
                  tmp36.contTrace.last.next = this;
                  tmp36.contTrace.last = this;
                  return tmp36
                }
                this.pc = 183;
                continue contLoop;
              }
              this.pc = 196;
              continue contLoop;
            } else if (this.pc === 183) {
              tmp36 = runtime.resetDepth(tmp36, curDepth1);
              throw tmp36;
            } else if (this.pc === 220) {
              idx3 = tmp22;
              if (cnt1 === 0) {
                tmp23 = Option.None;
                this.pc = 217;
                continue contLoop;
              } else {
                selRes1 = globalThis.String;
                if (selRes1 === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp35 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                  if (tmp35 instanceof runtime.EffectSig.class) {
                    this.pc = 180;
                    tmp35.contTrace.last.next = this;
                    tmp35.contTrace.last = this;
                    return tmp35
                  }
                  this.pc = 180;
                  continue contLoop;
                }
                this.pc = 219;
                continue contLoop;
              }
              this.pc = 217;
              continue contLoop;
            } else if (this.pc === 221) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = char1(idx2);
              if (scrut4 instanceof runtime.EffectSig.class) {
                this.pc = 179;
                scrut4.contTrace.last.next = this;
                scrut4.contTrace.last = this;
                return scrut4
              }
              this.pc = 179;
              continue contLoop;
            } else if (this.pc === 179) {
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (scrut4 instanceof Option.Some.class) {
                param02 = scrut4.value;
                if (param02 === "}") {
                  tmp22 = idx2 + 1;
                  this.pc = 220;
                  continue contLoop;
                } else {
                  tmp22 = idx2;
                  this.pc = 220;
                  continue contLoop;
                }
                this.pc = 220;
                continue contLoop;
              } else {
                tmp22 = idx2;
                this.pc = 220;
                continue contLoop;
              }
              this.pc = 220;
              continue contLoop;
            } else if (this.pc === 217) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return Predef.tuple(idx3, tmp23)
            } else if (this.pc === 218) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp23 = Option.Some(tmp24);
              if (tmp23 instanceof runtime.EffectSig.class) {
                this.pc = 182;
                tmp23.contTrace.last.next = this;
                tmp23.contTrace.last = this;
                return tmp23
              }
              this.pc = 182;
              continue contLoop;
            } else if (this.pc === 219) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp24 = runtime.safeCall(selRes1.fromCodePoint(cp1));
              if (tmp24 instanceof runtime.EffectSig.class) {
                this.pc = 181;
                tmp24.contTrace.last.next = this;
                tmp24.contTrace.last = this;
                return tmp24
              }
              this.pc = 181;
              continue contLoop;
            } else if (this.pc === 181) {
              tmp24 = runtime.resetDepth(tmp24, curDepth1);
              this.pc = 218;
              continue contLoop;
            } else if (this.pc === 180) {
              tmp35 = runtime.resetDepth(tmp35, curDepth1);
              throw tmp35;
            } else if (this.pc === 182) {
              tmp23 = runtime.resetDepth(tmp23, curDepth1);
              this.pc = 217;
              continue contLoop;
            } else if (this.pc === 216) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut5 = scanHexDigits(tmp17, 2, 0, 0);
              if (scrut5 instanceof runtime.EffectSig.class) {
                this.pc = 172;
                scrut5.contTrace.last.next = this;
                scrut5.contTrace.last = this;
                return scrut5
              }
              this.pc = 172;
              continue contLoop;
            } else if (this.pc === 172) {
              scrut5 = runtime.resetDepth(scrut5, curDepth1);
              if (globalThis.Array.isArray(scrut5) && scrut5.length === 3) {
                first02 = scrut5[0];
                first12 = scrut5[1];
                first22 = scrut5[2];
                idx4 = first02;
                cp2 = first12;
                cnt2 = first22;
                if (cnt2 === 0) {
                  tmp18 = Option.None;
                  this.pc = 213;
                  continue contLoop;
                } else {
                  selRes = globalThis.String;
                  if (selRes === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp33 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                    if (tmp33 instanceof runtime.EffectSig.class) {
                      this.pc = 173;
                      tmp33.contTrace.last.next = this;
                      tmp33.contTrace.last = this;
                      return tmp33
                    }
                    this.pc = 173;
                    continue contLoop;
                  }
                  this.pc = 215;
                  continue contLoop;
                }
                this.pc = 213;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp34 = new globalThis.Error("match error");
                if (tmp34 instanceof runtime.EffectSig.class) {
                  this.pc = 176;
                  tmp34.contTrace.last.next = this;
                  tmp34.contTrace.last = this;
                  return tmp34
                }
                this.pc = 176;
                continue contLoop;
              }
              this.pc = 196;
              continue contLoop;
            } else if (this.pc === 176) {
              tmp34 = runtime.resetDepth(tmp34, curDepth1);
              throw tmp34;
            } else if (this.pc === 213) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return Predef.tuple(idx4, tmp18)
            } else if (this.pc === 214) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp18 = Option.Some(tmp19);
              if (tmp18 instanceof runtime.EffectSig.class) {
                this.pc = 175;
                tmp18.contTrace.last.next = this;
                tmp18.contTrace.last = this;
                return tmp18
              }
              this.pc = 175;
              continue contLoop;
            } else if (this.pc === 215) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp19 = runtime.safeCall(selRes.fromCodePoint(cp2));
              if (tmp19 instanceof runtime.EffectSig.class) {
                this.pc = 174;
                tmp19.contTrace.last.next = this;
                tmp19.contTrace.last = this;
                return tmp19
              }
              this.pc = 174;
              continue contLoop;
            } else if (this.pc === 174) {
              tmp19 = runtime.resetDepth(tmp19, curDepth1);
              this.pc = 214;
              continue contLoop;
            } else if (this.pc === 173) {
              tmp33 = runtime.resetDepth(tmp33, curDepth1);
              throw tmp33;
            } else if (this.pc === 175) {
              tmp18 = runtime.resetDepth(tmp18, curDepth1);
              this.pc = 213;
              continue contLoop;
            } else if (this.pc === 211) {
              return [
                tmp15,
                tmp16
              ]
            } else if (this.pc === 212) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp16 = Option.Some("\\");
              if (tmp16 instanceof runtime.EffectSig.class) {
                this.pc = 171;
                tmp16.contTrace.last.next = this;
                tmp16.contTrace.last = this;
                return tmp16
              }
              this.pc = 171;
              continue contLoop;
            } else if (this.pc === 171) {
              tmp16 = runtime.resetDepth(tmp16, curDepth1);
              this.pc = 211;
              continue contLoop;
            } else if (this.pc === 209) {
              return [
                tmp13,
                tmp14
              ]
            } else if (this.pc === 210) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp14 = Option.Some("\"");
              if (tmp14 instanceof runtime.EffectSig.class) {
                this.pc = 170;
                tmp14.contTrace.last.next = this;
                tmp14.contTrace.last = this;
                return tmp14
              }
              this.pc = 170;
              continue contLoop;
            } else if (this.pc === 170) {
              tmp14 = runtime.resetDepth(tmp14, curDepth1);
              this.pc = 209;
              continue contLoop;
            } else if (this.pc === 207) {
              return [
                tmp11,
                tmp12
              ]
            } else if (this.pc === 208) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp12 = Option.Some("\f");
              if (tmp12 instanceof runtime.EffectSig.class) {
                this.pc = 169;
                tmp12.contTrace.last.next = this;
                tmp12.contTrace.last = this;
                return tmp12
              }
              this.pc = 169;
              continue contLoop;
            } else if (this.pc === 169) {
              tmp12 = runtime.resetDepth(tmp12, curDepth1);
              this.pc = 207;
              continue contLoop;
            } else if (this.pc === 205) {
              return [
                tmp9,
                tmp10
              ]
            } else if (this.pc === 206) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp10 = Option.Some("\b");
              if (tmp10 instanceof runtime.EffectSig.class) {
                this.pc = 168;
                tmp10.contTrace.last.next = this;
                tmp10.contTrace.last = this;
                return tmp10
              }
              this.pc = 168;
              continue contLoop;
            } else if (this.pc === 168) {
              tmp10 = runtime.resetDepth(tmp10, curDepth1);
              this.pc = 205;
              continue contLoop;
            } else if (this.pc === 203) {
              return [
                tmp7,
                tmp8
              ]
            } else if (this.pc === 204) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp8 = Option.Some("\u0000");
              if (tmp8 instanceof runtime.EffectSig.class) {
                this.pc = 167;
                tmp8.contTrace.last.next = this;
                tmp8.contTrace.last = this;
                return tmp8
              }
              this.pc = 167;
              continue contLoop;
            } else if (this.pc === 167) {
              tmp8 = runtime.resetDepth(tmp8, curDepth1);
              this.pc = 203;
              continue contLoop;
            } else if (this.pc === 201) {
              return [
                tmp5,
                tmp6
              ]
            } else if (this.pc === 202) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Option.Some("\t");
              if (tmp6 instanceof runtime.EffectSig.class) {
                this.pc = 166;
                tmp6.contTrace.last.next = this;
                tmp6.contTrace.last = this;
                return tmp6
              }
              this.pc = 166;
              continue contLoop;
            } else if (this.pc === 166) {
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              this.pc = 201;
              continue contLoop;
            } else if (this.pc === 199) {
              return [
                tmp3,
                tmp4
              ]
            } else if (this.pc === 200) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp4 = Option.Some("\r");
              if (tmp4 instanceof runtime.EffectSig.class) {
                this.pc = 165;
                tmp4.contTrace.last.next = this;
                tmp4.contTrace.last = this;
                return tmp4
              }
              this.pc = 165;
              continue contLoop;
            } else if (this.pc === 165) {
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              this.pc = 199;
              continue contLoop;
            } else if (this.pc === 197) {
              return [
                tmp1,
                tmp2
              ]
            } else if (this.pc === 198) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp2 = Option.Some("\n");
              if (tmp2 instanceof runtime.EffectSig.class) {
                this.pc = 164;
                tmp2.contTrace.last.next = this;
                tmp2.contTrace.last = this;
                return tmp2
              }
              this.pc = 164;
              continue contLoop;
            } else if (this.pc === 164) {
              tmp2 = runtime.resetDepth(tmp2, curDepth1);
              this.pc = 197;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$escape$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$escape$1.class(162);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      runtime.stackDepth = runtime.stackDepth + 1;
      scrut = char1(idx);
      if (scrut instanceof runtime.EffectSig.class) {
        scrut.contTrace.last.next = new Cont$func$escape$1.class(163);
        scrut.contTrace.last = scrut.contTrace.last.next;
        return scrut
      }
      scrut = runtime.resetDepth(scrut, curDepth1);
      if (scrut instanceof Option.Some.class) {
        param0 = scrut.value;
        if (param0 === "n") {
          tmp1 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp2 = Option.Some("\n");
          if (tmp2 instanceof runtime.EffectSig.class) {
            tmp2.contTrace.last.next = new Cont$func$escape$1.class(164);
            tmp2.contTrace.last = tmp2.contTrace.last.next;
            return tmp2
          }
          tmp2 = runtime.resetDepth(tmp2, curDepth1);
          return [
            tmp1,
            tmp2
          ]
        } else if (param0 === "r") {
          tmp3 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp4 = Option.Some("\r");
          if (tmp4 instanceof runtime.EffectSig.class) {
            tmp4.contTrace.last.next = new Cont$func$escape$1.class(165);
            tmp4.contTrace.last = tmp4.contTrace.last.next;
            return tmp4
          }
          tmp4 = runtime.resetDepth(tmp4, curDepth1);
          return [
            tmp3,
            tmp4
          ]
        } else if (param0 === "t") {
          tmp5 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp6 = Option.Some("\t");
          if (tmp6 instanceof runtime.EffectSig.class) {
            tmp6.contTrace.last.next = new Cont$func$escape$1.class(166);
            tmp6.contTrace.last = tmp6.contTrace.last.next;
            return tmp6
          }
          tmp6 = runtime.resetDepth(tmp6, curDepth1);
          return [
            tmp5,
            tmp6
          ]
        } else if (param0 === "0") {
          tmp7 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp8 = Option.Some("\u0000");
          if (tmp8 instanceof runtime.EffectSig.class) {
            tmp8.contTrace.last.next = new Cont$func$escape$1.class(167);
            tmp8.contTrace.last = tmp8.contTrace.last.next;
            return tmp8
          }
          tmp8 = runtime.resetDepth(tmp8, curDepth1);
          return [
            tmp7,
            tmp8
          ]
        } else if (param0 === "b") {
          tmp9 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp10 = Option.Some("\b");
          if (tmp10 instanceof runtime.EffectSig.class) {
            tmp10.contTrace.last.next = new Cont$func$escape$1.class(168);
            tmp10.contTrace.last = tmp10.contTrace.last.next;
            return tmp10
          }
          tmp10 = runtime.resetDepth(tmp10, curDepth1);
          return [
            tmp9,
            tmp10
          ]
        } else if (param0 === "f") {
          tmp11 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp12 = Option.Some("\f");
          if (tmp12 instanceof runtime.EffectSig.class) {
            tmp12.contTrace.last.next = new Cont$func$escape$1.class(169);
            tmp12.contTrace.last = tmp12.contTrace.last.next;
            return tmp12
          }
          tmp12 = runtime.resetDepth(tmp12, curDepth1);
          return [
            tmp11,
            tmp12
          ]
        } else if (param0 === "\"") {
          tmp13 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp14 = Option.Some("\"");
          if (tmp14 instanceof runtime.EffectSig.class) {
            tmp14.contTrace.last.next = new Cont$func$escape$1.class(170);
            tmp14.contTrace.last = tmp14.contTrace.last.next;
            return tmp14
          }
          tmp14 = runtime.resetDepth(tmp14, curDepth1);
          return [
            tmp13,
            tmp14
          ]
        } else if (param0 === "\\") {
          tmp15 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp16 = Option.Some("\\");
          if (tmp16 instanceof runtime.EffectSig.class) {
            tmp16.contTrace.last.next = new Cont$func$escape$1.class(171);
            tmp16.contTrace.last = tmp16.contTrace.last.next;
            return tmp16
          }
          tmp16 = runtime.resetDepth(tmp16, curDepth1);
          return [
            tmp15,
            tmp16
          ]
        } else if (param0 === "x") {
          tmp17 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut5 = scanHexDigits(tmp17, 2, 0, 0);
          if (scrut5 instanceof runtime.EffectSig.class) {
            scrut5.contTrace.last.next = new Cont$func$escape$1.class(172);
            scrut5.contTrace.last = scrut5.contTrace.last.next;
            return scrut5
          }
          scrut5 = runtime.resetDepth(scrut5, curDepth1);
          if (globalThis.Array.isArray(scrut5) && scrut5.length === 3) {
            first02 = scrut5[0];
            first12 = scrut5[1];
            first22 = scrut5[2];
            idx4 = first02;
            cp2 = first12;
            cnt2 = first22;
            if (cnt2 === 0) {
              tmp18 = Option.None;
            } else {
              selRes = globalThis.String;
              if (selRes === undefined) {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp33 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                if (tmp33 instanceof runtime.EffectSig.class) {
                  tmp33.contTrace.last.next = new Cont$func$escape$1.class(173);
                  tmp33.contTrace.last = tmp33.contTrace.last.next;
                  return tmp33
                }
                tmp33 = runtime.resetDepth(tmp33, curDepth1);
                throw tmp33;
              }
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp19 = runtime.safeCall(selRes.fromCodePoint(cp2));
              if (tmp19 instanceof runtime.EffectSig.class) {
                tmp19.contTrace.last.next = new Cont$func$escape$1.class(174);
                tmp19.contTrace.last = tmp19.contTrace.last.next;
                return tmp19
              }
              tmp19 = runtime.resetDepth(tmp19, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp18 = Option.Some(tmp19);
              if (tmp18 instanceof runtime.EffectSig.class) {
                tmp18.contTrace.last.next = new Cont$func$escape$1.class(175);
                tmp18.contTrace.last = tmp18.contTrace.last.next;
                return tmp18
              }
              tmp18 = runtime.resetDepth(tmp18, curDepth1);
            }
            runtime.stackDepth = runtime.stackDepth + 1;
            return Predef.tuple(idx4, tmp18)
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp34 = new globalThis.Error("match error");
            if (tmp34 instanceof runtime.EffectSig.class) {
              tmp34.contTrace.last.next = new Cont$func$escape$1.class(176);
              tmp34.contTrace.last = tmp34.contTrace.last.next;
              return tmp34
            }
            tmp34 = runtime.resetDepth(tmp34, curDepth1);
            throw tmp34;
          }
        } else if (param0 === "u") {
          tmp20 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut2 = char1(tmp20);
          if (scrut2 instanceof runtime.EffectSig.class) {
            scrut2.contTrace.last.next = new Cont$func$escape$1.class(177);
            scrut2.contTrace.last = scrut2.contTrace.last.next;
            return scrut2
          }
          scrut2 = runtime.resetDepth(scrut2, curDepth1);
          if (scrut2 instanceof Option.Some.class) {
            param01 = scrut2.value;
            if (param01 === "{") {
              tmp21 = idx + 2;
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut3 = scanHexDigits(tmp21, 6, 0, 0);
              if (scrut3 instanceof runtime.EffectSig.class) {
                scrut3.contTrace.last.next = new Cont$func$escape$1.class(178);
                scrut3.contTrace.last = scrut3.contTrace.last.next;
                return scrut3
              }
              scrut3 = runtime.resetDepth(scrut3, curDepth1);
              if (globalThis.Array.isArray(scrut3) && scrut3.length === 3) {
                first01 = scrut3[0];
                first11 = scrut3[1];
                first21 = scrut3[2];
                idx2 = first01;
                cp1 = first11;
                cnt1 = first21;
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut4 = char1(idx2);
                if (scrut4 instanceof runtime.EffectSig.class) {
                  scrut4.contTrace.last.next = new Cont$func$escape$1.class(179);
                  scrut4.contTrace.last = scrut4.contTrace.last.next;
                  return scrut4
                }
                scrut4 = runtime.resetDepth(scrut4, curDepth1);
                if (scrut4 instanceof Option.Some.class) {
                  param02 = scrut4.value;
                  if (param02 === "}") {
                    tmp22 = idx2 + 1;
                  } else {
                    tmp22 = idx2;
                  }
                } else {
                  tmp22 = idx2;
                }
                idx3 = tmp22;
                if (cnt1 === 0) {
                  tmp23 = Option.None;
                } else {
                  selRes1 = globalThis.String;
                  if (selRes1 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp35 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                    if (tmp35 instanceof runtime.EffectSig.class) {
                      tmp35.contTrace.last.next = new Cont$func$escape$1.class(180);
                      tmp35.contTrace.last = tmp35.contTrace.last.next;
                      return tmp35
                    }
                    tmp35 = runtime.resetDepth(tmp35, curDepth1);
                    throw tmp35;
                  }
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp24 = runtime.safeCall(selRes1.fromCodePoint(cp1));
                  if (tmp24 instanceof runtime.EffectSig.class) {
                    tmp24.contTrace.last.next = new Cont$func$escape$1.class(181);
                    tmp24.contTrace.last = tmp24.contTrace.last.next;
                    return tmp24
                  }
                  tmp24 = runtime.resetDepth(tmp24, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp23 = Option.Some(tmp24);
                  if (tmp23 instanceof runtime.EffectSig.class) {
                    tmp23.contTrace.last.next = new Cont$func$escape$1.class(182);
                    tmp23.contTrace.last = tmp23.contTrace.last.next;
                    return tmp23
                  }
                  tmp23 = runtime.resetDepth(tmp23, curDepth1);
                }
                runtime.stackDepth = runtime.stackDepth + 1;
                return Predef.tuple(idx3, tmp23)
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp36 = new globalThis.Error("match error");
                if (tmp36 instanceof runtime.EffectSig.class) {
                  tmp36.contTrace.last.next = new Cont$func$escape$1.class(183);
                  tmp36.contTrace.last = tmp36.contTrace.last.next;
                  return tmp36
                }
                tmp36 = runtime.resetDepth(tmp36, curDepth1);
                throw tmp36;
              }
            } else {
              tmp25 = idx + 1;
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = scanHexDigits(tmp25, 4, 0, 0);
              if (scrut1 instanceof runtime.EffectSig.class) {
                scrut1.contTrace.last.next = new Cont$func$escape$1.class(184);
                scrut1.contTrace.last = scrut1.contTrace.last.next;
                return scrut1
              }
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (globalThis.Array.isArray(scrut1) && scrut1.length === 3) {
                first0 = scrut1[0];
                first1 = scrut1[1];
                first2 = scrut1[2];
                idx1 = first0;
                cp = first1;
                cnt = first2;
                if (cnt === 0) {
                  tmp26 = Option.None;
                } else {
                  selRes2 = globalThis.String;
                  if (selRes2 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp37 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                    if (tmp37 instanceof runtime.EffectSig.class) {
                      tmp37.contTrace.last.next = new Cont$func$escape$1.class(185);
                      tmp37.contTrace.last = tmp37.contTrace.last.next;
                      return tmp37
                    }
                    tmp37 = runtime.resetDepth(tmp37, curDepth1);
                    throw tmp37;
                  }
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp27 = runtime.safeCall(selRes2.fromCodePoint(cp));
                  if (tmp27 instanceof runtime.EffectSig.class) {
                    tmp27.contTrace.last.next = new Cont$func$escape$1.class(186);
                    tmp27.contTrace.last = tmp27.contTrace.last.next;
                    return tmp27
                  }
                  tmp27 = runtime.resetDepth(tmp27, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp26 = Option.Some(tmp27);
                  if (tmp26 instanceof runtime.EffectSig.class) {
                    tmp26.contTrace.last.next = new Cont$func$escape$1.class(187);
                    tmp26.contTrace.last = tmp26.contTrace.last.next;
                    return tmp26
                  }
                  tmp26 = runtime.resetDepth(tmp26, curDepth1);
                }
                runtime.stackDepth = runtime.stackDepth + 1;
                return Predef.tuple(idx1, tmp26)
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp38 = new globalThis.Error("match error");
                if (tmp38 instanceof runtime.EffectSig.class) {
                  tmp38.contTrace.last.next = new Cont$func$escape$1.class(188);
                  tmp38.contTrace.last = tmp38.contTrace.last.next;
                  return tmp38
                }
                tmp38 = runtime.resetDepth(tmp38, curDepth1);
                throw tmp38;
              }
            }
          } else {
            tmp28 = idx + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut1 = scanHexDigits(tmp28, 4, 0, 0);
            if (scrut1 instanceof runtime.EffectSig.class) {
              scrut1.contTrace.last.next = new Cont$func$escape$1.class(189);
              scrut1.contTrace.last = scrut1.contTrace.last.next;
              return scrut1
            }
            scrut1 = runtime.resetDepth(scrut1, curDepth1);
            if (globalThis.Array.isArray(scrut1) && scrut1.length === 3) {
              first0 = scrut1[0];
              first1 = scrut1[1];
              first2 = scrut1[2];
              idx1 = first0;
              cp = first1;
              cnt = first2;
              if (cnt === 0) {
                tmp29 = Option.None;
              } else {
                selRes3 = globalThis.String;
                if (selRes3 === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp39 = new globalThis.Error("Access to required field 'String' yielded 'undefined'");
                  if (tmp39 instanceof runtime.EffectSig.class) {
                    tmp39.contTrace.last.next = new Cont$func$escape$1.class(190);
                    tmp39.contTrace.last = tmp39.contTrace.last.next;
                    return tmp39
                  }
                  tmp39 = runtime.resetDepth(tmp39, curDepth1);
                  throw tmp39;
                }
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp30 = runtime.safeCall(selRes3.fromCodePoint(cp));
                if (tmp30 instanceof runtime.EffectSig.class) {
                  tmp30.contTrace.last.next = new Cont$func$escape$1.class(191);
                  tmp30.contTrace.last = tmp30.contTrace.last.next;
                  return tmp30
                }
                tmp30 = runtime.resetDepth(tmp30, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp29 = Option.Some(tmp30);
                if (tmp29 instanceof runtime.EffectSig.class) {
                  tmp29.contTrace.last.next = new Cont$func$escape$1.class(192);
                  tmp29.contTrace.last = tmp29.contTrace.last.next;
                  return tmp29
                }
                tmp29 = runtime.resetDepth(tmp29, curDepth1);
              }
              runtime.stackDepth = runtime.stackDepth + 1;
              return Predef.tuple(idx1, tmp29)
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp40 = new globalThis.Error("match error");
              if (tmp40 instanceof runtime.EffectSig.class) {
                tmp40.contTrace.last.next = new Cont$func$escape$1.class(193);
                tmp40.contTrace.last = tmp40.contTrace.last.next;
                return tmp40
              }
              tmp40 = runtime.resetDepth(tmp40, curDepth1);
              throw tmp40;
            }
          }
        } else {
          ch = param0;
          tmp31 = idx + 1;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp32 = Option.Some(ch);
          if (tmp32 instanceof runtime.EffectSig.class) {
            tmp32.contTrace.last.next = new Cont$func$escape$1.class(194);
            tmp32.contTrace.last = tmp32.contTrace.last.next;
            return tmp32
          }
          tmp32 = runtime.resetDepth(tmp32, curDepth1);
          return [
            tmp31,
            tmp32
          ]
        }
      } else if (scrut instanceof Option.None.class) {
        return [
          idx,
          Option.None
        ]
      } else {
        runtime.stackDepth = runtime.stackDepth + 1;
        tmp41 = new globalThis.Error("match error");
        if (tmp41 instanceof runtime.EffectSig.class) {
          tmp41.contTrace.last.next = new Cont$func$escape$1.class(195);
          tmp41.contTrace.last = tmp41.contTrace.last.next;
          return tmp41
        }
        tmp41 = runtime.resetDepth(tmp41, curDepth1);
        throw tmp41;
      }
    };
    string = function string(idx) {
      let startIndex, content, terminated, scrut, param0, ch, scrut1, first1, first0, idx$_, chOpt, param01, ch1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, curDepth1, tmp12, stackDelayRes1, Cont$func$string$1;
      Cont$func$string$1 = function Cont$func$string$(pc1) {
        return new Cont$func$string$.class(pc1);
      };
      Cont$func$string$1.class = class Cont$func$string$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp13;
          tmp13 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 236) {
            stackDelayRes1 = value$;
          } else if (this.pc === 237) {
            scrut = value$;
          } else if (this.pc === 238) {
            scrut1 = value$;
          } else if (this.pc === 239) {
            tmp12 = value$;
          } else if (this.pc === 240) {
            tmp10 = value$;
          } else if (this.pc === 241) {
            tmp11 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 236) {
              startIndex = idx;
              content = "";
              terminated = false;
              this.pc = 245;
              continue contLoop;
            } else if (this.pc === 245) {
              if (terminated === false) {
                this.pc = 250;
                continue contLoop;
              } else {
                tmp9 = runtime.Unit;
                this.pc = 244;
                continue contLoop;
              }
              this.pc = 244;
              continue contLoop;
            } else if (this.pc === 246) {
              tmp9 = tmp2;
              this.pc = 245;
              continue contLoop;
            } else if (this.pc === 250) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 237;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 237;
              continue contLoop;
            } else if (this.pc === 237) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                if (param0 === "\"") {
                  terminated = true;
                  tmp1 = idx + 1;
                  idx = tmp1;
                  tmp2 = runtime.Unit;
                  this.pc = 246;
                  continue contLoop;
                } else if (param0 === "\\") {
                  tmp3 = idx + 1;
                  this.pc = 249;
                  continue contLoop;
                  this.pc = 246;
                  continue contLoop;
                } else {
                  ch = param0;
                  tmp7 = idx + 1;
                  idx = tmp7;
                  tmp8 = content + ch;
                  content = tmp8;
                  tmp2 = runtime.Unit;
                  this.pc = 246;
                  continue contLoop;
                }
                this.pc = 246;
                continue contLoop;
              } else if (scrut instanceof Option.None.class) {
                terminated = true;
                tmp2 = runtime.Unit;
                this.pc = 246;
                continue contLoop;
                this.pc = 246;
                continue contLoop;
              } else {
                tmp2 = runtime.Unit;
                this.pc = 246;
                continue contLoop;
              }
              this.pc = 246;
              continue contLoop;
            } else if (this.pc === 247) {
              tmp2 = tmp6;
              this.pc = 246;
              continue contLoop;
            } else if (this.pc === 249) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = escape(tmp3);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 238;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 238;
              continue contLoop;
            } else if (this.pc === 238) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
                first0 = scrut1[0];
                first1 = scrut1[1];
                idx$_ = first0;
                chOpt = first1;
                idx = idx$_;
                if (chOpt instanceof Option.Some.class) {
                  param01 = chOpt.value;
                  ch1 = param01;
                  tmp4 = content + ch1;
                  content = tmp4;
                  tmp5 = runtime.Unit;
                  this.pc = 248;
                  continue contLoop;
                } else {
                  tmp5 = runtime.Unit;
                  this.pc = 248;
                  continue contLoop;
                }
                this.pc = 248;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp12 = new globalThis.Error("match error");
                if (tmp12 instanceof runtime.EffectSig.class) {
                  this.pc = 239;
                  tmp12.contTrace.last.next = this;
                  tmp12.contTrace.last = this;
                  return tmp12
                }
                this.pc = 239;
                continue contLoop;
              }
              this.pc = 247;
              continue contLoop;
            } else if (this.pc === 239) {
              tmp12 = runtime.resetDepth(tmp12, curDepth1);
              throw tmp12;
            } else if (this.pc === 248) {
              tmp6 = tmp5;
              this.pc = 247;
              continue contLoop;
            } else if (this.pc === 242) {
              return [
                idx,
                tmp11
              ]
            } else if (this.pc === 244) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp10 = Token.string(content, startIndex, idx);
              if (tmp10 instanceof runtime.EffectSig.class) {
                this.pc = 240;
                tmp10.contTrace.last.next = this;
                tmp10.contTrace.last = this;
                return tmp10
              }
              this.pc = 240;
              continue contLoop;
            } else if (this.pc === 240) {
              tmp10 = runtime.resetDepth(tmp10, curDepth1);
              this.pc = 243;
              continue contLoop;
            } else if (this.pc === 243) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp11 = runtime.safeCall(tmp10(instance$Ident$_LineLookupTable$_));
              if (tmp11 instanceof runtime.EffectSig.class) {
                this.pc = 241;
                tmp11.contTrace.last.next = this;
                tmp11.contTrace.last = this;
                return tmp11
              }
              this.pc = 241;
              continue contLoop;
            } else if (this.pc === 241) {
              tmp11 = runtime.resetDepth(tmp11, curDepth1);
              this.pc = 242;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$string$(" + runtime.render(this.pc) + ")"; }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$string$1.class(236);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      startIndex = idx;
      content = "";
      terminated = false;
      tmp13: while (true) {
        if (terminated === false) {
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut = char1(idx);
          if (scrut instanceof runtime.EffectSig.class) {
            scrut.contTrace.last.next = new Cont$func$string$1.class(237);
            scrut.contTrace.last = scrut.contTrace.last.next;
            return scrut
          }
          scrut = runtime.resetDepth(scrut, curDepth1);
          if (scrut instanceof Option.Some.class) {
            param0 = scrut.value;
            if (param0 === "\"") {
              terminated = true;
              tmp1 = idx + 1;
              idx = tmp1;
              tmp2 = runtime.Unit;
            } else if (param0 === "\\") {
              tmp3 = idx + 1;
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = escape(tmp3);
              if (scrut1 instanceof runtime.EffectSig.class) {
                scrut1.contTrace.last.next = new Cont$func$string$1.class(238);
                scrut1.contTrace.last = scrut1.contTrace.last.next;
                return scrut1
              }
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
                first0 = scrut1[0];
                first1 = scrut1[1];
                idx$_ = first0;
                chOpt = first1;
                idx = idx$_;
                if (chOpt instanceof Option.Some.class) {
                  param01 = chOpt.value;
                  ch1 = param01;
                  tmp4 = content + ch1;
                  content = tmp4;
                  tmp5 = runtime.Unit;
                } else {
                  tmp5 = runtime.Unit;
                }
                tmp6 = tmp5;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp12 = new globalThis.Error("match error");
                if (tmp12 instanceof runtime.EffectSig.class) {
                  tmp12.contTrace.last.next = new Cont$func$string$1.class(239);
                  tmp12.contTrace.last = tmp12.contTrace.last.next;
                  return tmp12
                }
                tmp12 = runtime.resetDepth(tmp12, curDepth1);
                throw tmp12;
              }
              tmp2 = tmp6;
            } else {
              ch = param0;
              tmp7 = idx + 1;
              idx = tmp7;
              tmp8 = content + ch;
              content = tmp8;
              tmp2 = runtime.Unit;
            }
          } else if (scrut instanceof Option.None.class) {
            terminated = true;
            tmp2 = runtime.Unit;
          } else {
            tmp2 = runtime.Unit;
          }
          tmp9 = tmp2;
          continue tmp13;
        } else {
          tmp9 = runtime.Unit;
        }
        break;
      }
      runtime.stackDepth = runtime.stackDepth + 1;
      tmp10 = Token.string(content, startIndex, idx);
      if (tmp10 instanceof runtime.EffectSig.class) {
        tmp10.contTrace.last.next = new Cont$func$string$1.class(240);
        tmp10.contTrace.last = tmp10.contTrace.last.next;
        return tmp10
      }
      tmp10 = runtime.resetDepth(tmp10, curDepth1);
      runtime.stackDepth = runtime.stackDepth + 1;
      tmp11 = runtime.safeCall(tmp10(instance$Ident$_LineLookupTable$_));
      if (tmp11 instanceof runtime.EffectSig.class) {
        tmp11.contTrace.last.next = new Cont$func$string$1.class(241);
        tmp11.contTrace.last = tmp11.contTrace.last.next;
        return tmp11
      }
      tmp11 = runtime.resetDepth(tmp11, curDepth1);
      return [
        idx,
        tmp11
      ]
    };
    number = function number(idx, head) {
      let scrut, first1, first0, idx$_, integer, scrut1, param0, scrut2, first11, first01, idx$_$_, fraction, scrut3, param01, scrut4, first12, first02, idx$_1, integer1, scrut5, first13, first03, idx$_2, ds, scrut6, first14, first04, idx$_3, xs, scrut7, first15, first05, idx$_4, os, scrut8, first16, first06, idx$_5, bs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, lambda, lambda1, lambda2, curDepth1, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, stackDelayRes1, Cont$func$number$1;
      Cont$func$number$1 = function Cont$func$number$(pc1) {
        return new Cont$func$number$.class(pc1);
      };
      Cont$func$number$1.class = class Cont$func$number$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp116;
          tmp116 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 251) {
            stackDelayRes1 = value$;
          } else if (this.pc === 385) {
            scrut = value$;
          } else if (this.pc === 398) {
            tmp115 = value$;
          } else if (this.pc === 386) {
            scrut1 = value$;
          } else if (this.pc === 396) {
            tmp107 = value$;
          } else if (this.pc === 397) {
            tmp108 = value$;
          } else if (this.pc === 394) {
            tmp105 = value$;
          } else if (this.pc === 395) {
            tmp106 = value$;
          } else if (this.pc === 387) {
            scrut2 = value$;
          } else if (this.pc === 392) {
            tmp103 = value$;
          } else if (this.pc === 393) {
            tmp104 = value$;
          } else if (this.pc === 388) {
            tmp99 = value$;
          } else if (this.pc === 389) {
            tmp100 = value$;
          } else if (this.pc === 390) {
            tmp101 = value$;
          } else if (this.pc === 391) {
            tmp102 = value$;
          } else if (this.pc === 252) {
            scrut3 = value$;
          } else if (this.pc === 371) {
            scrut = value$;
          } else if (this.pc === 384) {
            tmp114 = value$;
          } else if (this.pc === 372) {
            scrut1 = value$;
          } else if (this.pc === 382) {
            tmp96 = value$;
          } else if (this.pc === 383) {
            tmp97 = value$;
          } else if (this.pc === 380) {
            tmp94 = value$;
          } else if (this.pc === 381) {
            tmp95 = value$;
          } else if (this.pc === 373) {
            scrut2 = value$;
          } else if (this.pc === 378) {
            tmp92 = value$;
          } else if (this.pc === 379) {
            tmp93 = value$;
          } else if (this.pc === 374) {
            tmp88 = value$;
          } else if (this.pc === 375) {
            tmp89 = value$;
          } else if (this.pc === 376) {
            tmp90 = value$;
          } else if (this.pc === 377) {
            tmp91 = value$;
          } else if (this.pc === 354) {
            scrut4 = value$;
          } else if (this.pc === 357) {
            scrut = value$;
          } else if (this.pc === 370) {
            tmp113 = value$;
          } else if (this.pc === 358) {
            scrut1 = value$;
          } else if (this.pc === 368) {
            tmp85 = value$;
          } else if (this.pc === 369) {
            tmp86 = value$;
          } else if (this.pc === 366) {
            tmp83 = value$;
          } else if (this.pc === 367) {
            tmp84 = value$;
          } else if (this.pc === 359) {
            scrut2 = value$;
          } else if (this.pc === 364) {
            tmp81 = value$;
          } else if (this.pc === 365) {
            tmp82 = value$;
          } else if (this.pc === 360) {
            tmp77 = value$;
          } else if (this.pc === 361) {
            tmp78 = value$;
          } else if (this.pc === 362) {
            tmp79 = value$;
          } else if (this.pc === 363) {
            tmp80 = value$;
          } else if (this.pc === 355) {
            tmp74 = value$;
          } else if (this.pc === 356) {
            tmp75 = value$;
          } else if (this.pc === 333) {
            scrut5 = value$;
          } else if (this.pc === 337) {
            scrut4 = value$;
          } else if (this.pc === 340) {
            scrut = value$;
          } else if (this.pc === 353) {
            tmp112 = value$;
          } else if (this.pc === 341) {
            scrut1 = value$;
          } else if (this.pc === 351) {
            tmp72 = value$;
          } else if (this.pc === 352) {
            tmp73 = value$;
          } else if (this.pc === 349) {
            tmp70 = value$;
          } else if (this.pc === 350) {
            tmp71 = value$;
          } else if (this.pc === 342) {
            scrut2 = value$;
          } else if (this.pc === 347) {
            tmp68 = value$;
          } else if (this.pc === 348) {
            tmp69 = value$;
          } else if (this.pc === 343) {
            tmp64 = value$;
          } else if (this.pc === 344) {
            tmp65 = value$;
          } else if (this.pc === 345) {
            tmp66 = value$;
          } else if (this.pc === 346) {
            tmp67 = value$;
          } else if (this.pc === 338) {
            tmp61 = value$;
          } else if (this.pc === 339) {
            tmp62 = value$;
          } else if (this.pc === 334) {
            tmp58 = value$;
          } else if (this.pc === 335) {
            tmp59 = value$;
          } else if (this.pc === 336) {
            tmp60 = value$;
          } else if (this.pc === 312) {
            scrut6 = value$;
          } else if (this.pc === 316) {
            scrut4 = value$;
          } else if (this.pc === 319) {
            scrut = value$;
          } else if (this.pc === 332) {
            tmp111 = value$;
          } else if (this.pc === 320) {
            scrut1 = value$;
          } else if (this.pc === 330) {
            tmp55 = value$;
          } else if (this.pc === 331) {
            tmp56 = value$;
          } else if (this.pc === 328) {
            tmp53 = value$;
          } else if (this.pc === 329) {
            tmp54 = value$;
          } else if (this.pc === 321) {
            scrut2 = value$;
          } else if (this.pc === 326) {
            tmp51 = value$;
          } else if (this.pc === 327) {
            tmp52 = value$;
          } else if (this.pc === 322) {
            tmp47 = value$;
          } else if (this.pc === 323) {
            tmp48 = value$;
          } else if (this.pc === 324) {
            tmp49 = value$;
          } else if (this.pc === 325) {
            tmp50 = value$;
          } else if (this.pc === 317) {
            tmp44 = value$;
          } else if (this.pc === 318) {
            tmp45 = value$;
          } else if (this.pc === 313) {
            tmp41 = value$;
          } else if (this.pc === 314) {
            tmp42 = value$;
          } else if (this.pc === 315) {
            tmp43 = value$;
          } else if (this.pc === 286) {
            scrut7 = value$;
          } else if (this.pc === 290) {
            scrut4 = value$;
          } else if (this.pc === 293) {
            scrut = value$;
          } else if (this.pc === 306) {
            tmp110 = value$;
          } else if (this.pc === 294) {
            scrut1 = value$;
          } else if (this.pc === 304) {
            tmp37 = value$;
          } else if (this.pc === 305) {
            tmp38 = value$;
          } else if (this.pc === 302) {
            tmp35 = value$;
          } else if (this.pc === 303) {
            tmp36 = value$;
          } else if (this.pc === 295) {
            scrut2 = value$;
          } else if (this.pc === 300) {
            tmp33 = value$;
          } else if (this.pc === 301) {
            tmp34 = value$;
          } else if (this.pc === 296) {
            tmp29 = value$;
          } else if (this.pc === 297) {
            tmp30 = value$;
          } else if (this.pc === 298) {
            tmp31 = value$;
          } else if (this.pc === 299) {
            tmp32 = value$;
          } else if (this.pc === 291) {
            tmp26 = value$;
          } else if (this.pc === 292) {
            tmp27 = value$;
          } else if (this.pc === 287) {
            tmp23 = value$;
          } else if (this.pc === 288) {
            tmp24 = value$;
          } else if (this.pc === 289) {
            tmp25 = value$;
          } else if (this.pc === 260) {
            scrut8 = value$;
          } else if (this.pc === 264) {
            scrut4 = value$;
          } else if (this.pc === 267) {
            scrut = value$;
          } else if (this.pc === 280) {
            tmp109 = value$;
          } else if (this.pc === 268) {
            scrut1 = value$;
          } else if (this.pc === 278) {
            tmp19 = value$;
          } else if (this.pc === 279) {
            tmp20 = value$;
          } else if (this.pc === 276) {
            tmp17 = value$;
          } else if (this.pc === 277) {
            tmp18 = value$;
          } else if (this.pc === 269) {
            scrut2 = value$;
          } else if (this.pc === 274) {
            tmp15 = value$;
          } else if (this.pc === 275) {
            tmp16 = value$;
          } else if (this.pc === 270) {
            tmp11 = value$;
          } else if (this.pc === 271) {
            tmp12 = value$;
          } else if (this.pc === 272) {
            tmp13 = value$;
          } else if (this.pc === 273) {
            tmp14 = value$;
          } else if (this.pc === 265) {
            tmp8 = value$;
          } else if (this.pc === 266) {
            tmp9 = value$;
          } else if (this.pc === 261) {
            tmp5 = value$;
          } else if (this.pc === 262) {
            tmp6 = value$;
          } else if (this.pc === 263) {
            tmp7 = value$;
          } else if (this.pc === 253) {
            tmp1 = value$;
          } else if (this.pc === 254) {
            tmp2 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 251) {
              if (head === "0") {
                this.pc = 545;
                continue contLoop;
              } else {
                this.pc = 562;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 399) {
              break contLoop;
            } else if (this.pc === 562) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 385;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 385;
              continue contLoop;
            } else if (this.pc === 385) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 561;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp115 = new globalThis.Error("match error");
                if (tmp115 instanceof runtime.EffectSig.class) {
                  this.pc = 398;
                  tmp115.contTrace.last.next = this;
                  tmp115.contTrace.last = this;
                  return tmp115
                }
                this.pc = 398;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 398) {
              tmp115 = runtime.resetDepth(tmp115, curDepth1);
              throw tmp115;
            } else if (this.pc === 561) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 386;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 386;
              continue contLoop;
            } else if (this.pc === 386) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp98 = idx$_ + 1;
                  this.pc = 554;
                  continue contLoop;
                } else {
                  this.pc = 557;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 560;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 558) {
              return [
                idx$_,
                tmp108
              ]
            } else if (this.pc === 560) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp107 = Token.integer(integer, idx);
              if (tmp107 instanceof runtime.EffectSig.class) {
                this.pc = 396;
                tmp107.contTrace.last.next = this;
                tmp107.contTrace.last = this;
                return tmp107
              }
              this.pc = 396;
              continue contLoop;
            } else if (this.pc === 396) {
              tmp107 = runtime.resetDepth(tmp107, curDepth1);
              this.pc = 559;
              continue contLoop;
            } else if (this.pc === 559) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp108 = runtime.safeCall(tmp107(instance$Ident$_LineLookupTable$_));
              if (tmp108 instanceof runtime.EffectSig.class) {
                this.pc = 397;
                tmp108.contTrace.last.next = this;
                tmp108.contTrace.last = this;
                return tmp108
              }
              this.pc = 397;
              continue contLoop;
            } else if (this.pc === 397) {
              tmp108 = runtime.resetDepth(tmp108, curDepth1);
              this.pc = 558;
              continue contLoop;
            } else if (this.pc === 555) {
              return [
                idx$_,
                tmp106
              ]
            } else if (this.pc === 557) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp105 = Token.integer(integer, idx);
              if (tmp105 instanceof runtime.EffectSig.class) {
                this.pc = 394;
                tmp105.contTrace.last.next = this;
                tmp105.contTrace.last = this;
                return tmp105
              }
              this.pc = 394;
              continue contLoop;
            } else if (this.pc === 394) {
              tmp105 = runtime.resetDepth(tmp105, curDepth1);
              this.pc = 556;
              continue contLoop;
            } else if (this.pc === 556) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp106 = runtime.safeCall(tmp105(instance$Ident$_LineLookupTable$_));
              if (tmp106 instanceof runtime.EffectSig.class) {
                this.pc = 395;
                tmp106.contTrace.last.next = this;
                tmp106.contTrace.last = this;
                return tmp106
              }
              this.pc = 395;
              continue contLoop;
            } else if (this.pc === 395) {
              tmp106 = runtime.resetDepth(tmp106, curDepth1);
              this.pc = 555;
              continue contLoop;
            } else if (this.pc === 554) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp98, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 387;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 387;
              continue contLoop;
            } else if (this.pc === 387) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 550;
                continue contLoop;
              } else {
                this.pc = 553;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 551) {
              return [
                idx$_,
                tmp104
              ]
            } else if (this.pc === 553) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp103 = Token.integer(integer, idx);
              if (tmp103 instanceof runtime.EffectSig.class) {
                this.pc = 392;
                tmp103.contTrace.last.next = this;
                tmp103.contTrace.last = this;
                return tmp103
              }
              this.pc = 392;
              continue contLoop;
            } else if (this.pc === 392) {
              tmp103 = runtime.resetDepth(tmp103, curDepth1);
              this.pc = 552;
              continue contLoop;
            } else if (this.pc === 552) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp104 = runtime.safeCall(tmp103(instance$Ident$_LineLookupTable$_));
              if (tmp104 instanceof runtime.EffectSig.class) {
                this.pc = 393;
                tmp104.contTrace.last.next = this;
                tmp104.contTrace.last = this;
                return tmp104
              }
              this.pc = 393;
              continue contLoop;
            } else if (this.pc === 393) {
              tmp104 = runtime.resetDepth(tmp104, curDepth1);
              this.pc = 551;
              continue contLoop;
            } else if (this.pc === 546) {
              return [
                idx$_$_,
                tmp102
              ]
            } else if (this.pc === 548) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp101 = Token.decimal(tmp100, idx);
              if (tmp101 instanceof runtime.EffectSig.class) {
                this.pc = 390;
                tmp101.contTrace.last.next = this;
                tmp101.contTrace.last = this;
                return tmp101
              }
              this.pc = 390;
              continue contLoop;
            } else if (this.pc === 549) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp100 = Str.concat2(tmp99, fraction);
              if (tmp100 instanceof runtime.EffectSig.class) {
                this.pc = 389;
                tmp100.contTrace.last.next = this;
                tmp100.contTrace.last = this;
                return tmp100
              }
              this.pc = 389;
              continue contLoop;
            } else if (this.pc === 550) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp99 = Str.concat2(integer, ".");
              if (tmp99 instanceof runtime.EffectSig.class) {
                this.pc = 388;
                tmp99.contTrace.last.next = this;
                tmp99.contTrace.last = this;
                return tmp99
              }
              this.pc = 388;
              continue contLoop;
            } else if (this.pc === 388) {
              tmp99 = runtime.resetDepth(tmp99, curDepth1);
              this.pc = 549;
              continue contLoop;
            } else if (this.pc === 389) {
              tmp100 = runtime.resetDepth(tmp100, curDepth1);
              this.pc = 548;
              continue contLoop;
            } else if (this.pc === 390) {
              tmp101 = runtime.resetDepth(tmp101, curDepth1);
              this.pc = 547;
              continue contLoop;
            } else if (this.pc === 547) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp102 = runtime.safeCall(tmp101(instance$Ident$_LineLookupTable$_));
              if (tmp102 instanceof runtime.EffectSig.class) {
                this.pc = 391;
                tmp102.contTrace.last.next = this;
                tmp102.contTrace.last = this;
                return tmp102
              }
              this.pc = 391;
              continue contLoop;
            } else if (this.pc === 391) {
              tmp102 = runtime.resetDepth(tmp102, curDepth1);
              this.pc = 546;
              continue contLoop;
            } else if (this.pc === 545) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut3 = char1(idx);
              if (scrut3 instanceof runtime.EffectSig.class) {
                this.pc = 252;
                scrut3.contTrace.last.next = this;
                scrut3.contTrace.last = this;
                return scrut3
              }
              this.pc = 252;
              continue contLoop;
            } else if (this.pc === 252) {
              scrut3 = runtime.resetDepth(scrut3, curDepth1);
              if (scrut3 instanceof Option.None.class) {
                this.pc = 402;
                continue contLoop;
              } else if (scrut3 instanceof Option.Some.class) {
                param01 = scrut3.value;
                if (param01 === "b") {
                  tmp3 = lambda;
                  tmp4 = idx + 1;
                  this.pc = 428;
                  continue contLoop;
                } else if (param01 === "o") {
                  tmp21 = lambda1;
                  tmp22 = idx + 1;
                  this.pc = 454;
                  continue contLoop;
                  this.pc = 399;
                  continue contLoop;
                } else if (param01 === "x") {
                  tmp39 = lambda2;
                  tmp40 = idx + 1;
                  this.pc = 480;
                  continue contLoop;
                  this.pc = 399;
                  continue contLoop;
                  this.pc = 399;
                  continue contLoop;
                } else if (param01 === ".") {
                  tmp57 = idx + 1;
                  this.pc = 506;
                  continue contLoop;
                  this.pc = 399;
                  continue contLoop;
                  this.pc = 399;
                  continue contLoop;
                  this.pc = 399;
                  continue contLoop;
                } else {
                  this.pc = 527;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 544;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 544) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 371;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 371;
              continue contLoop;
            } else if (this.pc === 371) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 543;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp114 = new globalThis.Error("match error");
                if (tmp114 instanceof runtime.EffectSig.class) {
                  this.pc = 384;
                  tmp114.contTrace.last.next = this;
                  tmp114.contTrace.last = this;
                  return tmp114
                }
                this.pc = 384;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 384) {
              tmp114 = runtime.resetDepth(tmp114, curDepth1);
              throw tmp114;
            } else if (this.pc === 543) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 372;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 372;
              continue contLoop;
            } else if (this.pc === 372) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp87 = idx$_ + 1;
                  this.pc = 536;
                  continue contLoop;
                } else {
                  this.pc = 539;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 542;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 540) {
              return [
                idx$_,
                tmp97
              ]
            } else if (this.pc === 542) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp96 = Token.integer(integer, idx);
              if (tmp96 instanceof runtime.EffectSig.class) {
                this.pc = 382;
                tmp96.contTrace.last.next = this;
                tmp96.contTrace.last = this;
                return tmp96
              }
              this.pc = 382;
              continue contLoop;
            } else if (this.pc === 382) {
              tmp96 = runtime.resetDepth(tmp96, curDepth1);
              this.pc = 541;
              continue contLoop;
            } else if (this.pc === 541) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp97 = runtime.safeCall(tmp96(instance$Ident$_LineLookupTable$_));
              if (tmp97 instanceof runtime.EffectSig.class) {
                this.pc = 383;
                tmp97.contTrace.last.next = this;
                tmp97.contTrace.last = this;
                return tmp97
              }
              this.pc = 383;
              continue contLoop;
            } else if (this.pc === 383) {
              tmp97 = runtime.resetDepth(tmp97, curDepth1);
              this.pc = 540;
              continue contLoop;
            } else if (this.pc === 537) {
              return [
                idx$_,
                tmp95
              ]
            } else if (this.pc === 539) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp94 = Token.integer(integer, idx);
              if (tmp94 instanceof runtime.EffectSig.class) {
                this.pc = 380;
                tmp94.contTrace.last.next = this;
                tmp94.contTrace.last = this;
                return tmp94
              }
              this.pc = 380;
              continue contLoop;
            } else if (this.pc === 380) {
              tmp94 = runtime.resetDepth(tmp94, curDepth1);
              this.pc = 538;
              continue contLoop;
            } else if (this.pc === 538) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp95 = runtime.safeCall(tmp94(instance$Ident$_LineLookupTable$_));
              if (tmp95 instanceof runtime.EffectSig.class) {
                this.pc = 381;
                tmp95.contTrace.last.next = this;
                tmp95.contTrace.last = this;
                return tmp95
              }
              this.pc = 381;
              continue contLoop;
            } else if (this.pc === 381) {
              tmp95 = runtime.resetDepth(tmp95, curDepth1);
              this.pc = 537;
              continue contLoop;
            } else if (this.pc === 536) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp87, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 373;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 373;
              continue contLoop;
            } else if (this.pc === 373) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 532;
                continue contLoop;
              } else {
                this.pc = 535;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 533) {
              return [
                idx$_,
                tmp93
              ]
            } else if (this.pc === 535) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp92 = Token.integer(integer, idx);
              if (tmp92 instanceof runtime.EffectSig.class) {
                this.pc = 378;
                tmp92.contTrace.last.next = this;
                tmp92.contTrace.last = this;
                return tmp92
              }
              this.pc = 378;
              continue contLoop;
            } else if (this.pc === 378) {
              tmp92 = runtime.resetDepth(tmp92, curDepth1);
              this.pc = 534;
              continue contLoop;
            } else if (this.pc === 534) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp93 = runtime.safeCall(tmp92(instance$Ident$_LineLookupTable$_));
              if (tmp93 instanceof runtime.EffectSig.class) {
                this.pc = 379;
                tmp93.contTrace.last.next = this;
                tmp93.contTrace.last = this;
                return tmp93
              }
              this.pc = 379;
              continue contLoop;
            } else if (this.pc === 379) {
              tmp93 = runtime.resetDepth(tmp93, curDepth1);
              this.pc = 533;
              continue contLoop;
            } else if (this.pc === 528) {
              return [
                idx$_$_,
                tmp91
              ]
            } else if (this.pc === 530) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp90 = Token.decimal(tmp89, idx);
              if (tmp90 instanceof runtime.EffectSig.class) {
                this.pc = 376;
                tmp90.contTrace.last.next = this;
                tmp90.contTrace.last = this;
                return tmp90
              }
              this.pc = 376;
              continue contLoop;
            } else if (this.pc === 531) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp89 = Str.concat2(tmp88, fraction);
              if (tmp89 instanceof runtime.EffectSig.class) {
                this.pc = 375;
                tmp89.contTrace.last.next = this;
                tmp89.contTrace.last = this;
                return tmp89
              }
              this.pc = 375;
              continue contLoop;
            } else if (this.pc === 532) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp88 = Str.concat2(integer, ".");
              if (tmp88 instanceof runtime.EffectSig.class) {
                this.pc = 374;
                tmp88.contTrace.last.next = this;
                tmp88.contTrace.last = this;
                return tmp88
              }
              this.pc = 374;
              continue contLoop;
            } else if (this.pc === 374) {
              tmp88 = runtime.resetDepth(tmp88, curDepth1);
              this.pc = 531;
              continue contLoop;
            } else if (this.pc === 375) {
              tmp89 = runtime.resetDepth(tmp89, curDepth1);
              this.pc = 530;
              continue contLoop;
            } else if (this.pc === 376) {
              tmp90 = runtime.resetDepth(tmp90, curDepth1);
              this.pc = 529;
              continue contLoop;
            } else if (this.pc === 529) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp91 = runtime.safeCall(tmp90(instance$Ident$_LineLookupTable$_));
              if (tmp91 instanceof runtime.EffectSig.class) {
                this.pc = 377;
                tmp91.contTrace.last.next = this;
                tmp91.contTrace.last = this;
                return tmp91
              }
              this.pc = 377;
              continue contLoop;
            } else if (this.pc === 377) {
              tmp91 = runtime.resetDepth(tmp91, curDepth1);
              this.pc = 528;
              continue contLoop;
            } else if (this.pc === 527) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                this.pc = 354;
                scrut4.contTrace.last.next = this;
                scrut4.contTrace.last = this;
                return scrut4
              }
              this.pc = 354;
              continue contLoop;
            } else if (this.pc === 354) {
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                this.pc = 509;
                continue contLoop;
              } else {
                this.pc = 526;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 526) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 357;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 357;
              continue contLoop;
            } else if (this.pc === 357) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 525;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp113 = new globalThis.Error("match error");
                if (tmp113 instanceof runtime.EffectSig.class) {
                  this.pc = 370;
                  tmp113.contTrace.last.next = this;
                  tmp113.contTrace.last = this;
                  return tmp113
                }
                this.pc = 370;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 370) {
              tmp113 = runtime.resetDepth(tmp113, curDepth1);
              throw tmp113;
            } else if (this.pc === 525) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 358;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 358;
              continue contLoop;
            } else if (this.pc === 358) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp76 = idx$_ + 1;
                  this.pc = 518;
                  continue contLoop;
                } else {
                  this.pc = 521;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 524;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 522) {
              return [
                idx$_,
                tmp86
              ]
            } else if (this.pc === 524) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp85 = Token.integer(integer, idx);
              if (tmp85 instanceof runtime.EffectSig.class) {
                this.pc = 368;
                tmp85.contTrace.last.next = this;
                tmp85.contTrace.last = this;
                return tmp85
              }
              this.pc = 368;
              continue contLoop;
            } else if (this.pc === 368) {
              tmp85 = runtime.resetDepth(tmp85, curDepth1);
              this.pc = 523;
              continue contLoop;
            } else if (this.pc === 523) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp86 = runtime.safeCall(tmp85(instance$Ident$_LineLookupTable$_));
              if (tmp86 instanceof runtime.EffectSig.class) {
                this.pc = 369;
                tmp86.contTrace.last.next = this;
                tmp86.contTrace.last = this;
                return tmp86
              }
              this.pc = 369;
              continue contLoop;
            } else if (this.pc === 369) {
              tmp86 = runtime.resetDepth(tmp86, curDepth1);
              this.pc = 522;
              continue contLoop;
            } else if (this.pc === 519) {
              return [
                idx$_,
                tmp84
              ]
            } else if (this.pc === 521) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp83 = Token.integer(integer, idx);
              if (tmp83 instanceof runtime.EffectSig.class) {
                this.pc = 366;
                tmp83.contTrace.last.next = this;
                tmp83.contTrace.last = this;
                return tmp83
              }
              this.pc = 366;
              continue contLoop;
            } else if (this.pc === 366) {
              tmp83 = runtime.resetDepth(tmp83, curDepth1);
              this.pc = 520;
              continue contLoop;
            } else if (this.pc === 520) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp84 = runtime.safeCall(tmp83(instance$Ident$_LineLookupTable$_));
              if (tmp84 instanceof runtime.EffectSig.class) {
                this.pc = 367;
                tmp84.contTrace.last.next = this;
                tmp84.contTrace.last = this;
                return tmp84
              }
              this.pc = 367;
              continue contLoop;
            } else if (this.pc === 367) {
              tmp84 = runtime.resetDepth(tmp84, curDepth1);
              this.pc = 519;
              continue contLoop;
            } else if (this.pc === 518) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp76, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 359;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 359;
              continue contLoop;
            } else if (this.pc === 359) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 514;
                continue contLoop;
              } else {
                this.pc = 517;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 515) {
              return [
                idx$_,
                tmp82
              ]
            } else if (this.pc === 517) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp81 = Token.integer(integer, idx);
              if (tmp81 instanceof runtime.EffectSig.class) {
                this.pc = 364;
                tmp81.contTrace.last.next = this;
                tmp81.contTrace.last = this;
                return tmp81
              }
              this.pc = 364;
              continue contLoop;
            } else if (this.pc === 364) {
              tmp81 = runtime.resetDepth(tmp81, curDepth1);
              this.pc = 516;
              continue contLoop;
            } else if (this.pc === 516) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp82 = runtime.safeCall(tmp81(instance$Ident$_LineLookupTable$_));
              if (tmp82 instanceof runtime.EffectSig.class) {
                this.pc = 365;
                tmp82.contTrace.last.next = this;
                tmp82.contTrace.last = this;
                return tmp82
              }
              this.pc = 365;
              continue contLoop;
            } else if (this.pc === 365) {
              tmp82 = runtime.resetDepth(tmp82, curDepth1);
              this.pc = 515;
              continue contLoop;
            } else if (this.pc === 510) {
              return [
                idx$_$_,
                tmp80
              ]
            } else if (this.pc === 512) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp79 = Token.decimal(tmp78, idx);
              if (tmp79 instanceof runtime.EffectSig.class) {
                this.pc = 362;
                tmp79.contTrace.last.next = this;
                tmp79.contTrace.last = this;
                return tmp79
              }
              this.pc = 362;
              continue contLoop;
            } else if (this.pc === 513) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp78 = Str.concat2(tmp77, fraction);
              if (tmp78 instanceof runtime.EffectSig.class) {
                this.pc = 361;
                tmp78.contTrace.last.next = this;
                tmp78.contTrace.last = this;
                return tmp78
              }
              this.pc = 361;
              continue contLoop;
            } else if (this.pc === 514) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp77 = Str.concat2(integer, ".");
              if (tmp77 instanceof runtime.EffectSig.class) {
                this.pc = 360;
                tmp77.contTrace.last.next = this;
                tmp77.contTrace.last = this;
                return tmp77
              }
              this.pc = 360;
              continue contLoop;
            } else if (this.pc === 360) {
              tmp77 = runtime.resetDepth(tmp77, curDepth1);
              this.pc = 513;
              continue contLoop;
            } else if (this.pc === 361) {
              tmp78 = runtime.resetDepth(tmp78, curDepth1);
              this.pc = 512;
              continue contLoop;
            } else if (this.pc === 362) {
              tmp79 = runtime.resetDepth(tmp79, curDepth1);
              this.pc = 511;
              continue contLoop;
            } else if (this.pc === 511) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp80 = runtime.safeCall(tmp79(instance$Ident$_LineLookupTable$_));
              if (tmp80 instanceof runtime.EffectSig.class) {
                this.pc = 363;
                tmp80.contTrace.last.next = this;
                tmp80.contTrace.last = this;
                return tmp80
              }
              this.pc = 363;
              continue contLoop;
            } else if (this.pc === 363) {
              tmp80 = runtime.resetDepth(tmp80, curDepth1);
              this.pc = 510;
              continue contLoop;
            } else if (this.pc === 507) {
              return [
                idx$_1,
                tmp75
              ]
            } else if (this.pc === 509) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp74 = Token.integer(integer1, idx);
              if (tmp74 instanceof runtime.EffectSig.class) {
                this.pc = 355;
                tmp74.contTrace.last.next = this;
                tmp74.contTrace.last = this;
                return tmp74
              }
              this.pc = 355;
              continue contLoop;
            } else if (this.pc === 355) {
              tmp74 = runtime.resetDepth(tmp74, curDepth1);
              this.pc = 508;
              continue contLoop;
            } else if (this.pc === 508) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp75 = runtime.safeCall(tmp74(instance$Ident$_LineLookupTable$_));
              if (tmp75 instanceof runtime.EffectSig.class) {
                this.pc = 356;
                tmp75.contTrace.last.next = this;
                tmp75.contTrace.last = this;
                return tmp75
              }
              this.pc = 356;
              continue contLoop;
            } else if (this.pc === 356) {
              tmp75 = runtime.resetDepth(tmp75, curDepth1);
              this.pc = 507;
              continue contLoop;
            } else if (this.pc === 506) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut5 = digits(tmp57, ".");
              if (scrut5 instanceof runtime.EffectSig.class) {
                this.pc = 333;
                scrut5.contTrace.last.next = this;
                scrut5.contTrace.last = this;
                return scrut5
              }
              this.pc = 333;
              continue contLoop;
            } else if (this.pc === 333) {
              scrut5 = runtime.resetDepth(scrut5, curDepth1);
              if (globalThis.Array.isArray(scrut5) && scrut5.length === 2) {
                first03 = scrut5[0];
                first13 = scrut5[1];
                idx$_2 = first03;
                ds = first13;
                this.pc = 484;
                continue contLoop;
              } else {
                this.pc = 505;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 505) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                this.pc = 337;
                scrut4.contTrace.last.next = this;
                scrut4.contTrace.last = this;
                return scrut4
              }
              this.pc = 337;
              continue contLoop;
            } else if (this.pc === 337) {
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                this.pc = 487;
                continue contLoop;
              } else {
                this.pc = 504;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 504) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 340;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 340;
              continue contLoop;
            } else if (this.pc === 340) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 503;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp112 = new globalThis.Error("match error");
                if (tmp112 instanceof runtime.EffectSig.class) {
                  this.pc = 353;
                  tmp112.contTrace.last.next = this;
                  tmp112.contTrace.last = this;
                  return tmp112
                }
                this.pc = 353;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 353) {
              tmp112 = runtime.resetDepth(tmp112, curDepth1);
              throw tmp112;
            } else if (this.pc === 503) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 341;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 341;
              continue contLoop;
            } else if (this.pc === 341) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp63 = idx$_ + 1;
                  this.pc = 496;
                  continue contLoop;
                } else {
                  this.pc = 499;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 502;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 500) {
              return [
                idx$_,
                tmp73
              ]
            } else if (this.pc === 502) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp72 = Token.integer(integer, idx);
              if (tmp72 instanceof runtime.EffectSig.class) {
                this.pc = 351;
                tmp72.contTrace.last.next = this;
                tmp72.contTrace.last = this;
                return tmp72
              }
              this.pc = 351;
              continue contLoop;
            } else if (this.pc === 351) {
              tmp72 = runtime.resetDepth(tmp72, curDepth1);
              this.pc = 501;
              continue contLoop;
            } else if (this.pc === 501) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp73 = runtime.safeCall(tmp72(instance$Ident$_LineLookupTable$_));
              if (tmp73 instanceof runtime.EffectSig.class) {
                this.pc = 352;
                tmp73.contTrace.last.next = this;
                tmp73.contTrace.last = this;
                return tmp73
              }
              this.pc = 352;
              continue contLoop;
            } else if (this.pc === 352) {
              tmp73 = runtime.resetDepth(tmp73, curDepth1);
              this.pc = 500;
              continue contLoop;
            } else if (this.pc === 497) {
              return [
                idx$_,
                tmp71
              ]
            } else if (this.pc === 499) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp70 = Token.integer(integer, idx);
              if (tmp70 instanceof runtime.EffectSig.class) {
                this.pc = 349;
                tmp70.contTrace.last.next = this;
                tmp70.contTrace.last = this;
                return tmp70
              }
              this.pc = 349;
              continue contLoop;
            } else if (this.pc === 349) {
              tmp70 = runtime.resetDepth(tmp70, curDepth1);
              this.pc = 498;
              continue contLoop;
            } else if (this.pc === 498) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp71 = runtime.safeCall(tmp70(instance$Ident$_LineLookupTable$_));
              if (tmp71 instanceof runtime.EffectSig.class) {
                this.pc = 350;
                tmp71.contTrace.last.next = this;
                tmp71.contTrace.last = this;
                return tmp71
              }
              this.pc = 350;
              continue contLoop;
            } else if (this.pc === 350) {
              tmp71 = runtime.resetDepth(tmp71, curDepth1);
              this.pc = 497;
              continue contLoop;
            } else if (this.pc === 496) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp63, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 342;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 342;
              continue contLoop;
            } else if (this.pc === 342) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 492;
                continue contLoop;
              } else {
                this.pc = 495;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 493) {
              return [
                idx$_,
                tmp69
              ]
            } else if (this.pc === 495) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp68 = Token.integer(integer, idx);
              if (tmp68 instanceof runtime.EffectSig.class) {
                this.pc = 347;
                tmp68.contTrace.last.next = this;
                tmp68.contTrace.last = this;
                return tmp68
              }
              this.pc = 347;
              continue contLoop;
            } else if (this.pc === 347) {
              tmp68 = runtime.resetDepth(tmp68, curDepth1);
              this.pc = 494;
              continue contLoop;
            } else if (this.pc === 494) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp69 = runtime.safeCall(tmp68(instance$Ident$_LineLookupTable$_));
              if (tmp69 instanceof runtime.EffectSig.class) {
                this.pc = 348;
                tmp69.contTrace.last.next = this;
                tmp69.contTrace.last = this;
                return tmp69
              }
              this.pc = 348;
              continue contLoop;
            } else if (this.pc === 348) {
              tmp69 = runtime.resetDepth(tmp69, curDepth1);
              this.pc = 493;
              continue contLoop;
            } else if (this.pc === 488) {
              return [
                idx$_$_,
                tmp67
              ]
            } else if (this.pc === 490) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp66 = Token.decimal(tmp65, idx);
              if (tmp66 instanceof runtime.EffectSig.class) {
                this.pc = 345;
                tmp66.contTrace.last.next = this;
                tmp66.contTrace.last = this;
                return tmp66
              }
              this.pc = 345;
              continue contLoop;
            } else if (this.pc === 491) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp65 = Str.concat2(tmp64, fraction);
              if (tmp65 instanceof runtime.EffectSig.class) {
                this.pc = 344;
                tmp65.contTrace.last.next = this;
                tmp65.contTrace.last = this;
                return tmp65
              }
              this.pc = 344;
              continue contLoop;
            } else if (this.pc === 492) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp64 = Str.concat2(integer, ".");
              if (tmp64 instanceof runtime.EffectSig.class) {
                this.pc = 343;
                tmp64.contTrace.last.next = this;
                tmp64.contTrace.last = this;
                return tmp64
              }
              this.pc = 343;
              continue contLoop;
            } else if (this.pc === 343) {
              tmp64 = runtime.resetDepth(tmp64, curDepth1);
              this.pc = 491;
              continue contLoop;
            } else if (this.pc === 344) {
              tmp65 = runtime.resetDepth(tmp65, curDepth1);
              this.pc = 490;
              continue contLoop;
            } else if (this.pc === 345) {
              tmp66 = runtime.resetDepth(tmp66, curDepth1);
              this.pc = 489;
              continue contLoop;
            } else if (this.pc === 489) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp67 = runtime.safeCall(tmp66(instance$Ident$_LineLookupTable$_));
              if (tmp67 instanceof runtime.EffectSig.class) {
                this.pc = 346;
                tmp67.contTrace.last.next = this;
                tmp67.contTrace.last = this;
                return tmp67
              }
              this.pc = 346;
              continue contLoop;
            } else if (this.pc === 346) {
              tmp67 = runtime.resetDepth(tmp67, curDepth1);
              this.pc = 488;
              continue contLoop;
            } else if (this.pc === 485) {
              return [
                idx$_1,
                tmp62
              ]
            } else if (this.pc === 487) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp61 = Token.integer(integer1, idx);
              if (tmp61 instanceof runtime.EffectSig.class) {
                this.pc = 338;
                tmp61.contTrace.last.next = this;
                tmp61.contTrace.last = this;
                return tmp61
              }
              this.pc = 338;
              continue contLoop;
            } else if (this.pc === 338) {
              tmp61 = runtime.resetDepth(tmp61, curDepth1);
              this.pc = 486;
              continue contLoop;
            } else if (this.pc === 486) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp62 = runtime.safeCall(tmp61(instance$Ident$_LineLookupTable$_));
              if (tmp62 instanceof runtime.EffectSig.class) {
                this.pc = 339;
                tmp62.contTrace.last.next = this;
                tmp62.contTrace.last = this;
                return tmp62
              }
              this.pc = 339;
              continue contLoop;
            } else if (this.pc === 339) {
              tmp62 = runtime.resetDepth(tmp62, curDepth1);
              this.pc = 485;
              continue contLoop;
            } else if (this.pc === 481) {
              return [
                idx$_2,
                tmp60
              ]
            } else if (this.pc === 483) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp59 = Token.decimal(tmp58, idx);
              if (tmp59 instanceof runtime.EffectSig.class) {
                this.pc = 335;
                tmp59.contTrace.last.next = this;
                tmp59.contTrace.last = this;
                return tmp59
              }
              this.pc = 335;
              continue contLoop;
            } else if (this.pc === 484) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp58 = Str.concat2("0.", ds);
              if (tmp58 instanceof runtime.EffectSig.class) {
                this.pc = 334;
                tmp58.contTrace.last.next = this;
                tmp58.contTrace.last = this;
                return tmp58
              }
              this.pc = 334;
              continue contLoop;
            } else if (this.pc === 334) {
              tmp58 = runtime.resetDepth(tmp58, curDepth1);
              this.pc = 483;
              continue contLoop;
            } else if (this.pc === 335) {
              tmp59 = runtime.resetDepth(tmp59, curDepth1);
              this.pc = 482;
              continue contLoop;
            } else if (this.pc === 482) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp60 = runtime.safeCall(tmp59(instance$Ident$_LineLookupTable$_));
              if (tmp60 instanceof runtime.EffectSig.class) {
                this.pc = 336;
                tmp60.contTrace.last.next = this;
                tmp60.contTrace.last = this;
                return tmp60
              }
              this.pc = 336;
              continue contLoop;
            } else if (this.pc === 336) {
              tmp60 = runtime.resetDepth(tmp60, curDepth1);
              this.pc = 481;
              continue contLoop;
            } else if (this.pc === 480) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut6 = take(tmp39, tmp40, "");
              if (scrut6 instanceof runtime.EffectSig.class) {
                this.pc = 312;
                scrut6.contTrace.last.next = this;
                scrut6.contTrace.last = this;
                return scrut6
              }
              this.pc = 312;
              continue contLoop;
            } else if (this.pc === 312) {
              scrut6 = runtime.resetDepth(scrut6, curDepth1);
              if (globalThis.Array.isArray(scrut6) && scrut6.length === 2) {
                first04 = scrut6[0];
                first14 = scrut6[1];
                idx$_3 = first04;
                xs = first14;
                this.pc = 458;
                continue contLoop;
              } else {
                this.pc = 479;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 479) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                this.pc = 316;
                scrut4.contTrace.last.next = this;
                scrut4.contTrace.last = this;
                return scrut4
              }
              this.pc = 316;
              continue contLoop;
            } else if (this.pc === 316) {
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                this.pc = 461;
                continue contLoop;
              } else {
                this.pc = 478;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 478) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 319;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 319;
              continue contLoop;
            } else if (this.pc === 319) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 477;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp111 = new globalThis.Error("match error");
                if (tmp111 instanceof runtime.EffectSig.class) {
                  this.pc = 332;
                  tmp111.contTrace.last.next = this;
                  tmp111.contTrace.last = this;
                  return tmp111
                }
                this.pc = 332;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 332) {
              tmp111 = runtime.resetDepth(tmp111, curDepth1);
              throw tmp111;
            } else if (this.pc === 477) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 320;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 320;
              continue contLoop;
            } else if (this.pc === 320) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp46 = idx$_ + 1;
                  this.pc = 470;
                  continue contLoop;
                } else {
                  this.pc = 473;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 476;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 474) {
              return [
                idx$_,
                tmp56
              ]
            } else if (this.pc === 476) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp55 = Token.integer(integer, idx);
              if (tmp55 instanceof runtime.EffectSig.class) {
                this.pc = 330;
                tmp55.contTrace.last.next = this;
                tmp55.contTrace.last = this;
                return tmp55
              }
              this.pc = 330;
              continue contLoop;
            } else if (this.pc === 330) {
              tmp55 = runtime.resetDepth(tmp55, curDepth1);
              this.pc = 475;
              continue contLoop;
            } else if (this.pc === 475) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp56 = runtime.safeCall(tmp55(instance$Ident$_LineLookupTable$_));
              if (tmp56 instanceof runtime.EffectSig.class) {
                this.pc = 331;
                tmp56.contTrace.last.next = this;
                tmp56.contTrace.last = this;
                return tmp56
              }
              this.pc = 331;
              continue contLoop;
            } else if (this.pc === 331) {
              tmp56 = runtime.resetDepth(tmp56, curDepth1);
              this.pc = 474;
              continue contLoop;
            } else if (this.pc === 471) {
              return [
                idx$_,
                tmp54
              ]
            } else if (this.pc === 473) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp53 = Token.integer(integer, idx);
              if (tmp53 instanceof runtime.EffectSig.class) {
                this.pc = 328;
                tmp53.contTrace.last.next = this;
                tmp53.contTrace.last = this;
                return tmp53
              }
              this.pc = 328;
              continue contLoop;
            } else if (this.pc === 328) {
              tmp53 = runtime.resetDepth(tmp53, curDepth1);
              this.pc = 472;
              continue contLoop;
            } else if (this.pc === 472) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp54 = runtime.safeCall(tmp53(instance$Ident$_LineLookupTable$_));
              if (tmp54 instanceof runtime.EffectSig.class) {
                this.pc = 329;
                tmp54.contTrace.last.next = this;
                tmp54.contTrace.last = this;
                return tmp54
              }
              this.pc = 329;
              continue contLoop;
            } else if (this.pc === 329) {
              tmp54 = runtime.resetDepth(tmp54, curDepth1);
              this.pc = 471;
              continue contLoop;
            } else if (this.pc === 470) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp46, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 321;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 321;
              continue contLoop;
            } else if (this.pc === 321) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 466;
                continue contLoop;
              } else {
                this.pc = 469;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 467) {
              return [
                idx$_,
                tmp52
              ]
            } else if (this.pc === 469) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp51 = Token.integer(integer, idx);
              if (tmp51 instanceof runtime.EffectSig.class) {
                this.pc = 326;
                tmp51.contTrace.last.next = this;
                tmp51.contTrace.last = this;
                return tmp51
              }
              this.pc = 326;
              continue contLoop;
            } else if (this.pc === 326) {
              tmp51 = runtime.resetDepth(tmp51, curDepth1);
              this.pc = 468;
              continue contLoop;
            } else if (this.pc === 468) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp52 = runtime.safeCall(tmp51(instance$Ident$_LineLookupTable$_));
              if (tmp52 instanceof runtime.EffectSig.class) {
                this.pc = 327;
                tmp52.contTrace.last.next = this;
                tmp52.contTrace.last = this;
                return tmp52
              }
              this.pc = 327;
              continue contLoop;
            } else if (this.pc === 327) {
              tmp52 = runtime.resetDepth(tmp52, curDepth1);
              this.pc = 467;
              continue contLoop;
            } else if (this.pc === 462) {
              return [
                idx$_$_,
                tmp50
              ]
            } else if (this.pc === 464) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp49 = Token.decimal(tmp48, idx);
              if (tmp49 instanceof runtime.EffectSig.class) {
                this.pc = 324;
                tmp49.contTrace.last.next = this;
                tmp49.contTrace.last = this;
                return tmp49
              }
              this.pc = 324;
              continue contLoop;
            } else if (this.pc === 465) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp48 = Str.concat2(tmp47, fraction);
              if (tmp48 instanceof runtime.EffectSig.class) {
                this.pc = 323;
                tmp48.contTrace.last.next = this;
                tmp48.contTrace.last = this;
                return tmp48
              }
              this.pc = 323;
              continue contLoop;
            } else if (this.pc === 466) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp47 = Str.concat2(integer, ".");
              if (tmp47 instanceof runtime.EffectSig.class) {
                this.pc = 322;
                tmp47.contTrace.last.next = this;
                tmp47.contTrace.last = this;
                return tmp47
              }
              this.pc = 322;
              continue contLoop;
            } else if (this.pc === 322) {
              tmp47 = runtime.resetDepth(tmp47, curDepth1);
              this.pc = 465;
              continue contLoop;
            } else if (this.pc === 323) {
              tmp48 = runtime.resetDepth(tmp48, curDepth1);
              this.pc = 464;
              continue contLoop;
            } else if (this.pc === 324) {
              tmp49 = runtime.resetDepth(tmp49, curDepth1);
              this.pc = 463;
              continue contLoop;
            } else if (this.pc === 463) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp50 = runtime.safeCall(tmp49(instance$Ident$_LineLookupTable$_));
              if (tmp50 instanceof runtime.EffectSig.class) {
                this.pc = 325;
                tmp50.contTrace.last.next = this;
                tmp50.contTrace.last = this;
                return tmp50
              }
              this.pc = 325;
              continue contLoop;
            } else if (this.pc === 325) {
              tmp50 = runtime.resetDepth(tmp50, curDepth1);
              this.pc = 462;
              continue contLoop;
            } else if (this.pc === 459) {
              return [
                idx$_1,
                tmp45
              ]
            } else if (this.pc === 461) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp44 = Token.integer(integer1, idx);
              if (tmp44 instanceof runtime.EffectSig.class) {
                this.pc = 317;
                tmp44.contTrace.last.next = this;
                tmp44.contTrace.last = this;
                return tmp44
              }
              this.pc = 317;
              continue contLoop;
            } else if (this.pc === 317) {
              tmp44 = runtime.resetDepth(tmp44, curDepth1);
              this.pc = 460;
              continue contLoop;
            } else if (this.pc === 460) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp45 = runtime.safeCall(tmp44(instance$Ident$_LineLookupTable$_));
              if (tmp45 instanceof runtime.EffectSig.class) {
                this.pc = 318;
                tmp45.contTrace.last.next = this;
                tmp45.contTrace.last = this;
                return tmp45
              }
              this.pc = 318;
              continue contLoop;
            } else if (this.pc === 318) {
              tmp45 = runtime.resetDepth(tmp45, curDepth1);
              this.pc = 459;
              continue contLoop;
            } else if (this.pc === 455) {
              return [
                idx$_3,
                tmp43
              ]
            } else if (this.pc === 457) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp42 = Token.integer(tmp41, idx);
              if (tmp42 instanceof runtime.EffectSig.class) {
                this.pc = 314;
                tmp42.contTrace.last.next = this;
                tmp42.contTrace.last = this;
                return tmp42
              }
              this.pc = 314;
              continue contLoop;
            } else if (this.pc === 458) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp41 = Str.concat2("0x", xs);
              if (tmp41 instanceof runtime.EffectSig.class) {
                this.pc = 313;
                tmp41.contTrace.last.next = this;
                tmp41.contTrace.last = this;
                return tmp41
              }
              this.pc = 313;
              continue contLoop;
            } else if (this.pc === 313) {
              tmp41 = runtime.resetDepth(tmp41, curDepth1);
              this.pc = 457;
              continue contLoop;
            } else if (this.pc === 314) {
              tmp42 = runtime.resetDepth(tmp42, curDepth1);
              this.pc = 456;
              continue contLoop;
            } else if (this.pc === 456) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp43 = runtime.safeCall(tmp42(instance$Ident$_LineLookupTable$_));
              if (tmp43 instanceof runtime.EffectSig.class) {
                this.pc = 315;
                tmp43.contTrace.last.next = this;
                tmp43.contTrace.last = this;
                return tmp43
              }
              this.pc = 315;
              continue contLoop;
            } else if (this.pc === 315) {
              tmp43 = runtime.resetDepth(tmp43, curDepth1);
              this.pc = 455;
              continue contLoop;
            } else if (this.pc === 454) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut7 = take(tmp21, tmp22, "");
              if (scrut7 instanceof runtime.EffectSig.class) {
                this.pc = 286;
                scrut7.contTrace.last.next = this;
                scrut7.contTrace.last = this;
                return scrut7
              }
              this.pc = 286;
              continue contLoop;
            } else if (this.pc === 286) {
              scrut7 = runtime.resetDepth(scrut7, curDepth1);
              if (globalThis.Array.isArray(scrut7) && scrut7.length === 2) {
                first05 = scrut7[0];
                first15 = scrut7[1];
                idx$_4 = first05;
                os = first15;
                this.pc = 432;
                continue contLoop;
              } else {
                this.pc = 453;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 453) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                this.pc = 290;
                scrut4.contTrace.last.next = this;
                scrut4.contTrace.last = this;
                return scrut4
              }
              this.pc = 290;
              continue contLoop;
            } else if (this.pc === 290) {
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                this.pc = 435;
                continue contLoop;
              } else {
                this.pc = 452;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 452) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 293;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 293;
              continue contLoop;
            } else if (this.pc === 293) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 451;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp110 = new globalThis.Error("match error");
                if (tmp110 instanceof runtime.EffectSig.class) {
                  this.pc = 306;
                  tmp110.contTrace.last.next = this;
                  tmp110.contTrace.last = this;
                  return tmp110
                }
                this.pc = 306;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 306) {
              tmp110 = runtime.resetDepth(tmp110, curDepth1);
              throw tmp110;
            } else if (this.pc === 451) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 294;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 294;
              continue contLoop;
            } else if (this.pc === 294) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp28 = idx$_ + 1;
                  this.pc = 444;
                  continue contLoop;
                } else {
                  this.pc = 447;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 450;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 448) {
              return [
                idx$_,
                tmp38
              ]
            } else if (this.pc === 450) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp37 = Token.integer(integer, idx);
              if (tmp37 instanceof runtime.EffectSig.class) {
                this.pc = 304;
                tmp37.contTrace.last.next = this;
                tmp37.contTrace.last = this;
                return tmp37
              }
              this.pc = 304;
              continue contLoop;
            } else if (this.pc === 304) {
              tmp37 = runtime.resetDepth(tmp37, curDepth1);
              this.pc = 449;
              continue contLoop;
            } else if (this.pc === 449) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp38 = runtime.safeCall(tmp37(instance$Ident$_LineLookupTable$_));
              if (tmp38 instanceof runtime.EffectSig.class) {
                this.pc = 305;
                tmp38.contTrace.last.next = this;
                tmp38.contTrace.last = this;
                return tmp38
              }
              this.pc = 305;
              continue contLoop;
            } else if (this.pc === 305) {
              tmp38 = runtime.resetDepth(tmp38, curDepth1);
              this.pc = 448;
              continue contLoop;
            } else if (this.pc === 445) {
              return [
                idx$_,
                tmp36
              ]
            } else if (this.pc === 447) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp35 = Token.integer(integer, idx);
              if (tmp35 instanceof runtime.EffectSig.class) {
                this.pc = 302;
                tmp35.contTrace.last.next = this;
                tmp35.contTrace.last = this;
                return tmp35
              }
              this.pc = 302;
              continue contLoop;
            } else if (this.pc === 302) {
              tmp35 = runtime.resetDepth(tmp35, curDepth1);
              this.pc = 446;
              continue contLoop;
            } else if (this.pc === 446) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp36 = runtime.safeCall(tmp35(instance$Ident$_LineLookupTable$_));
              if (tmp36 instanceof runtime.EffectSig.class) {
                this.pc = 303;
                tmp36.contTrace.last.next = this;
                tmp36.contTrace.last = this;
                return tmp36
              }
              this.pc = 303;
              continue contLoop;
            } else if (this.pc === 303) {
              tmp36 = runtime.resetDepth(tmp36, curDepth1);
              this.pc = 445;
              continue contLoop;
            } else if (this.pc === 444) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp28, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 295;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 295;
              continue contLoop;
            } else if (this.pc === 295) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 440;
                continue contLoop;
              } else {
                this.pc = 443;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 441) {
              return [
                idx$_,
                tmp34
              ]
            } else if (this.pc === 443) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp33 = Token.integer(integer, idx);
              if (tmp33 instanceof runtime.EffectSig.class) {
                this.pc = 300;
                tmp33.contTrace.last.next = this;
                tmp33.contTrace.last = this;
                return tmp33
              }
              this.pc = 300;
              continue contLoop;
            } else if (this.pc === 300) {
              tmp33 = runtime.resetDepth(tmp33, curDepth1);
              this.pc = 442;
              continue contLoop;
            } else if (this.pc === 442) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp34 = runtime.safeCall(tmp33(instance$Ident$_LineLookupTable$_));
              if (tmp34 instanceof runtime.EffectSig.class) {
                this.pc = 301;
                tmp34.contTrace.last.next = this;
                tmp34.contTrace.last = this;
                return tmp34
              }
              this.pc = 301;
              continue contLoop;
            } else if (this.pc === 301) {
              tmp34 = runtime.resetDepth(tmp34, curDepth1);
              this.pc = 441;
              continue contLoop;
            } else if (this.pc === 436) {
              return [
                idx$_$_,
                tmp32
              ]
            } else if (this.pc === 438) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp31 = Token.decimal(tmp30, idx);
              if (tmp31 instanceof runtime.EffectSig.class) {
                this.pc = 298;
                tmp31.contTrace.last.next = this;
                tmp31.contTrace.last = this;
                return tmp31
              }
              this.pc = 298;
              continue contLoop;
            } else if (this.pc === 439) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp30 = Str.concat2(tmp29, fraction);
              if (tmp30 instanceof runtime.EffectSig.class) {
                this.pc = 297;
                tmp30.contTrace.last.next = this;
                tmp30.contTrace.last = this;
                return tmp30
              }
              this.pc = 297;
              continue contLoop;
            } else if (this.pc === 440) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp29 = Str.concat2(integer, ".");
              if (tmp29 instanceof runtime.EffectSig.class) {
                this.pc = 296;
                tmp29.contTrace.last.next = this;
                tmp29.contTrace.last = this;
                return tmp29
              }
              this.pc = 296;
              continue contLoop;
            } else if (this.pc === 296) {
              tmp29 = runtime.resetDepth(tmp29, curDepth1);
              this.pc = 439;
              continue contLoop;
            } else if (this.pc === 297) {
              tmp30 = runtime.resetDepth(tmp30, curDepth1);
              this.pc = 438;
              continue contLoop;
            } else if (this.pc === 298) {
              tmp31 = runtime.resetDepth(tmp31, curDepth1);
              this.pc = 437;
              continue contLoop;
            } else if (this.pc === 437) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp32 = runtime.safeCall(tmp31(instance$Ident$_LineLookupTable$_));
              if (tmp32 instanceof runtime.EffectSig.class) {
                this.pc = 299;
                tmp32.contTrace.last.next = this;
                tmp32.contTrace.last = this;
                return tmp32
              }
              this.pc = 299;
              continue contLoop;
            } else if (this.pc === 299) {
              tmp32 = runtime.resetDepth(tmp32, curDepth1);
              this.pc = 436;
              continue contLoop;
            } else if (this.pc === 433) {
              return [
                idx$_1,
                tmp27
              ]
            } else if (this.pc === 435) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp26 = Token.integer(integer1, idx);
              if (tmp26 instanceof runtime.EffectSig.class) {
                this.pc = 291;
                tmp26.contTrace.last.next = this;
                tmp26.contTrace.last = this;
                return tmp26
              }
              this.pc = 291;
              continue contLoop;
            } else if (this.pc === 291) {
              tmp26 = runtime.resetDepth(tmp26, curDepth1);
              this.pc = 434;
              continue contLoop;
            } else if (this.pc === 434) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp27 = runtime.safeCall(tmp26(instance$Ident$_LineLookupTable$_));
              if (tmp27 instanceof runtime.EffectSig.class) {
                this.pc = 292;
                tmp27.contTrace.last.next = this;
                tmp27.contTrace.last = this;
                return tmp27
              }
              this.pc = 292;
              continue contLoop;
            } else if (this.pc === 292) {
              tmp27 = runtime.resetDepth(tmp27, curDepth1);
              this.pc = 433;
              continue contLoop;
            } else if (this.pc === 429) {
              return [
                idx$_4,
                tmp25
              ]
            } else if (this.pc === 431) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp24 = Token.integer(tmp23, idx);
              if (tmp24 instanceof runtime.EffectSig.class) {
                this.pc = 288;
                tmp24.contTrace.last.next = this;
                tmp24.contTrace.last = this;
                return tmp24
              }
              this.pc = 288;
              continue contLoop;
            } else if (this.pc === 432) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp23 = Str.concat2("0o", os);
              if (tmp23 instanceof runtime.EffectSig.class) {
                this.pc = 287;
                tmp23.contTrace.last.next = this;
                tmp23.contTrace.last = this;
                return tmp23
              }
              this.pc = 287;
              continue contLoop;
            } else if (this.pc === 287) {
              tmp23 = runtime.resetDepth(tmp23, curDepth1);
              this.pc = 431;
              continue contLoop;
            } else if (this.pc === 288) {
              tmp24 = runtime.resetDepth(tmp24, curDepth1);
              this.pc = 430;
              continue contLoop;
            } else if (this.pc === 430) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp25 = runtime.safeCall(tmp24(instance$Ident$_LineLookupTable$_));
              if (tmp25 instanceof runtime.EffectSig.class) {
                this.pc = 289;
                tmp25.contTrace.last.next = this;
                tmp25.contTrace.last = this;
                return tmp25
              }
              this.pc = 289;
              continue contLoop;
            } else if (this.pc === 289) {
              tmp25 = runtime.resetDepth(tmp25, curDepth1);
              this.pc = 429;
              continue contLoop;
            } else if (this.pc === 428) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut8 = take(tmp3, tmp4, "");
              if (scrut8 instanceof runtime.EffectSig.class) {
                this.pc = 260;
                scrut8.contTrace.last.next = this;
                scrut8.contTrace.last = this;
                return scrut8
              }
              this.pc = 260;
              continue contLoop;
            } else if (this.pc === 260) {
              scrut8 = runtime.resetDepth(scrut8, curDepth1);
              if (globalThis.Array.isArray(scrut8) && scrut8.length === 2) {
                first06 = scrut8[0];
                first16 = scrut8[1];
                idx$_5 = first06;
                bs = first16;
                this.pc = 406;
                continue contLoop;
              } else {
                this.pc = 427;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 427) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                this.pc = 264;
                scrut4.contTrace.last.next = this;
                scrut4.contTrace.last = this;
                return scrut4
              }
              this.pc = 264;
              continue contLoop;
            } else if (this.pc === 264) {
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                this.pc = 409;
                continue contLoop;
              } else {
                this.pc = 426;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 426) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 267;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 267;
              continue contLoop;
            } else if (this.pc === 267) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                this.pc = 425;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp109 = new globalThis.Error("match error");
                if (tmp109 instanceof runtime.EffectSig.class) {
                  this.pc = 280;
                  tmp109.contTrace.last.next = this;
                  tmp109.contTrace.last = this;
                  return tmp109
                }
                this.pc = 280;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 280) {
              tmp109 = runtime.resetDepth(tmp109, curDepth1);
              throw tmp109;
            } else if (this.pc === 425) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(idx$_);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 268;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 268;
              continue contLoop;
            } else if (this.pc === 268) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param0 = scrut1.value;
                if (param0 === ".") {
                  tmp10 = idx$_ + 1;
                  this.pc = 418;
                  continue contLoop;
                } else {
                  this.pc = 421;
                  continue contLoop;
                }
                this.pc = 399;
                continue contLoop;
              } else {
                this.pc = 424;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 422) {
              return [
                idx$_,
                tmp20
              ]
            } else if (this.pc === 424) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp19 = Token.integer(integer, idx);
              if (tmp19 instanceof runtime.EffectSig.class) {
                this.pc = 278;
                tmp19.contTrace.last.next = this;
                tmp19.contTrace.last = this;
                return tmp19
              }
              this.pc = 278;
              continue contLoop;
            } else if (this.pc === 278) {
              tmp19 = runtime.resetDepth(tmp19, curDepth1);
              this.pc = 423;
              continue contLoop;
            } else if (this.pc === 423) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp20 = runtime.safeCall(tmp19(instance$Ident$_LineLookupTable$_));
              if (tmp20 instanceof runtime.EffectSig.class) {
                this.pc = 279;
                tmp20.contTrace.last.next = this;
                tmp20.contTrace.last = this;
                return tmp20
              }
              this.pc = 279;
              continue contLoop;
            } else if (this.pc === 279) {
              tmp20 = runtime.resetDepth(tmp20, curDepth1);
              this.pc = 422;
              continue contLoop;
            } else if (this.pc === 419) {
              return [
                idx$_,
                tmp18
              ]
            } else if (this.pc === 421) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp17 = Token.integer(integer, idx);
              if (tmp17 instanceof runtime.EffectSig.class) {
                this.pc = 276;
                tmp17.contTrace.last.next = this;
                tmp17.contTrace.last = this;
                return tmp17
              }
              this.pc = 276;
              continue contLoop;
            } else if (this.pc === 276) {
              tmp17 = runtime.resetDepth(tmp17, curDepth1);
              this.pc = 420;
              continue contLoop;
            } else if (this.pc === 420) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp18 = runtime.safeCall(tmp17(instance$Ident$_LineLookupTable$_));
              if (tmp18 instanceof runtime.EffectSig.class) {
                this.pc = 277;
                tmp18.contTrace.last.next = this;
                tmp18.contTrace.last = this;
                return tmp18
              }
              this.pc = 277;
              continue contLoop;
            } else if (this.pc === 277) {
              tmp18 = runtime.resetDepth(tmp18, curDepth1);
              this.pc = 419;
              continue contLoop;
            } else if (this.pc === 418) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp10, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 269;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 269;
              continue contLoop;
            } else if (this.pc === 269) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                this.pc = 414;
                continue contLoop;
              } else {
                this.pc = 417;
                continue contLoop;
              }
              this.pc = 399;
              continue contLoop;
            } else if (this.pc === 415) {
              return [
                idx$_,
                tmp16
              ]
            } else if (this.pc === 417) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp15 = Token.integer(integer, idx);
              if (tmp15 instanceof runtime.EffectSig.class) {
                this.pc = 274;
                tmp15.contTrace.last.next = this;
                tmp15.contTrace.last = this;
                return tmp15
              }
              this.pc = 274;
              continue contLoop;
            } else if (this.pc === 274) {
              tmp15 = runtime.resetDepth(tmp15, curDepth1);
              this.pc = 416;
              continue contLoop;
            } else if (this.pc === 416) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp16 = runtime.safeCall(tmp15(instance$Ident$_LineLookupTable$_));
              if (tmp16 instanceof runtime.EffectSig.class) {
                this.pc = 275;
                tmp16.contTrace.last.next = this;
                tmp16.contTrace.last = this;
                return tmp16
              }
              this.pc = 275;
              continue contLoop;
            } else if (this.pc === 275) {
              tmp16 = runtime.resetDepth(tmp16, curDepth1);
              this.pc = 415;
              continue contLoop;
            } else if (this.pc === 410) {
              return [
                idx$_$_,
                tmp14
              ]
            } else if (this.pc === 412) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp13 = Token.decimal(tmp12, idx);
              if (tmp13 instanceof runtime.EffectSig.class) {
                this.pc = 272;
                tmp13.contTrace.last.next = this;
                tmp13.contTrace.last = this;
                return tmp13
              }
              this.pc = 272;
              continue contLoop;
            } else if (this.pc === 413) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp12 = Str.concat2(tmp11, fraction);
              if (tmp12 instanceof runtime.EffectSig.class) {
                this.pc = 271;
                tmp12.contTrace.last.next = this;
                tmp12.contTrace.last = this;
                return tmp12
              }
              this.pc = 271;
              continue contLoop;
            } else if (this.pc === 414) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp11 = Str.concat2(integer, ".");
              if (tmp11 instanceof runtime.EffectSig.class) {
                this.pc = 270;
                tmp11.contTrace.last.next = this;
                tmp11.contTrace.last = this;
                return tmp11
              }
              this.pc = 270;
              continue contLoop;
            } else if (this.pc === 270) {
              tmp11 = runtime.resetDepth(tmp11, curDepth1);
              this.pc = 413;
              continue contLoop;
            } else if (this.pc === 271) {
              tmp12 = runtime.resetDepth(tmp12, curDepth1);
              this.pc = 412;
              continue contLoop;
            } else if (this.pc === 272) {
              tmp13 = runtime.resetDepth(tmp13, curDepth1);
              this.pc = 411;
              continue contLoop;
            } else if (this.pc === 411) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp14 = runtime.safeCall(tmp13(instance$Ident$_LineLookupTable$_));
              if (tmp14 instanceof runtime.EffectSig.class) {
                this.pc = 273;
                tmp14.contTrace.last.next = this;
                tmp14.contTrace.last = this;
                return tmp14
              }
              this.pc = 273;
              continue contLoop;
            } else if (this.pc === 273) {
              tmp14 = runtime.resetDepth(tmp14, curDepth1);
              this.pc = 410;
              continue contLoop;
            } else if (this.pc === 407) {
              return [
                idx$_1,
                tmp9
              ]
            } else if (this.pc === 409) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp8 = Token.integer(integer1, idx);
              if (tmp8 instanceof runtime.EffectSig.class) {
                this.pc = 265;
                tmp8.contTrace.last.next = this;
                tmp8.contTrace.last = this;
                return tmp8
              }
              this.pc = 265;
              continue contLoop;
            } else if (this.pc === 265) {
              tmp8 = runtime.resetDepth(tmp8, curDepth1);
              this.pc = 408;
              continue contLoop;
            } else if (this.pc === 408) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp9 = runtime.safeCall(tmp8(instance$Ident$_LineLookupTable$_));
              if (tmp9 instanceof runtime.EffectSig.class) {
                this.pc = 266;
                tmp9.contTrace.last.next = this;
                tmp9.contTrace.last = this;
                return tmp9
              }
              this.pc = 266;
              continue contLoop;
            } else if (this.pc === 266) {
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              this.pc = 407;
              continue contLoop;
            } else if (this.pc === 403) {
              return [
                idx$_5,
                tmp7
              ]
            } else if (this.pc === 405) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.integer(tmp5, idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                this.pc = 262;
                tmp6.contTrace.last.next = this;
                tmp6.contTrace.last = this;
                return tmp6
              }
              this.pc = 262;
              continue contLoop;
            } else if (this.pc === 406) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = Str.concat2("0b", bs);
              if (tmp5 instanceof runtime.EffectSig.class) {
                this.pc = 261;
                tmp5.contTrace.last.next = this;
                tmp5.contTrace.last = this;
                return tmp5
              }
              this.pc = 261;
              continue contLoop;
            } else if (this.pc === 261) {
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              this.pc = 405;
              continue contLoop;
            } else if (this.pc === 262) {
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              this.pc = 404;
              continue contLoop;
            } else if (this.pc === 404) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp7 instanceof runtime.EffectSig.class) {
                this.pc = 263;
                tmp7.contTrace.last.next = this;
                tmp7.contTrace.last = this;
                return tmp7
              }
              this.pc = 263;
              continue contLoop;
            } else if (this.pc === 263) {
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              this.pc = 403;
              continue contLoop;
            } else if (this.pc === 400) {
              return [
                idx,
                tmp2
              ]
            } else if (this.pc === 402) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp1 = Token.integer("0", idx);
              if (tmp1 instanceof runtime.EffectSig.class) {
                this.pc = 253;
                tmp1.contTrace.last.next = this;
                tmp1.contTrace.last = this;
                return tmp1
              }
              this.pc = 253;
              continue contLoop;
            } else if (this.pc === 253) {
              tmp1 = runtime.resetDepth(tmp1, curDepth1);
              this.pc = 401;
              continue contLoop;
            } else if (this.pc === 401) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp2 = runtime.safeCall(tmp1(instance$Ident$_LineLookupTable$_));
              if (tmp2 instanceof runtime.EffectSig.class) {
                this.pc = 254;
                tmp2.contTrace.last.next = this;
                tmp2.contTrace.last = this;
                return tmp2
              }
              this.pc = 254;
              continue contLoop;
            } else if (this.pc === 254) {
              tmp2 = runtime.resetDepth(tmp2, curDepth1);
              this.pc = 400;
              continue contLoop;
            }
            break;
          }
        }
        toString() { return "Cont$func$number$(" + runtime.render(this.pc) + ")"; }
      };
      lambda = (undefined, function (x) {
        let matchResult, selRes, tmp116, curDepth2, stackDelayRes2, Cont$func$lambda$3;
        Cont$func$lambda$3 = function Cont$func$lambda$(pc1) {
          return new Cont$func$lambda$.class(pc1);
        };
        Cont$func$lambda$3.class = class Cont$func$lambda$ extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp117;
            tmp117 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 255) {
              stackDelayRes2 = value$;
            } else if (this.pc === 257) {
              matchResult = value$;
            } else if (this.pc === 256) {
              tmp116 = value$;
            }
            contLoop: while (true) {
              if (this.pc === 255) {
                selRes = Char.BinDigit;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp116 = new globalThis.Error("Access to required field 'BinDigit' yielded 'undefined'");
                  if (tmp116 instanceof runtime.EffectSig.class) {
                    this.pc = 256;
                    tmp116.contTrace.last.next = this;
                    tmp116.contTrace.last = this;
                    return tmp116
                  }
                  this.pc = 256;
                  continue contLoop;
                }
                this.pc = 259;
                continue contLoop;
              } else if (this.pc === 259) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapply(x));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 257;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 257;
                continue contLoop;
              } else if (this.pc === 257) {
                matchResult = runtime.resetDepth(matchResult, curDepth2);
                if (matchResult instanceof runtime.MatchResult.class) {
                  return true
                } else {
                  return false
                }
                this.pc = 258;
                continue contLoop;
              } else if (this.pc === 258) {
                break contLoop;
              } else if (this.pc === 256) {
                tmp116 = runtime.resetDepth(tmp116, curDepth2);
                throw tmp116;
              }
              break;
            }
          }
          toString() { return "Cont$func$lambda$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth2 = runtime.stackDepth;
        stackDelayRes2 = runtime.checkDepth();
        if (stackDelayRes2 instanceof runtime.EffectSig.class) {
          stackDelayRes2.contTrace.last.next = new Cont$func$lambda$3.class(255);
          stackDelayRes2.contTrace.last = stackDelayRes2.contTrace.last.next;
          return stackDelayRes2
        }
        selRes = Char.BinDigit;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp116 = new globalThis.Error("Access to required field 'BinDigit' yielded 'undefined'");
          if (tmp116 instanceof runtime.EffectSig.class) {
            tmp116.contTrace.last.next = new Cont$func$lambda$3.class(256);
            tmp116.contTrace.last = tmp116.contTrace.last.next;
            return tmp116
          }
          tmp116 = runtime.resetDepth(tmp116, curDepth2);
          throw tmp116;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapply(x));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$lambda$3.class(257);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth2);
        if (matchResult instanceof runtime.MatchResult.class) {
          return true
        } else {
          return false
        }
      });
      lambda1 = (undefined, function (x) {
        let matchResult, selRes, tmp116, curDepth2, stackDelayRes2, Cont$func$lambda$3;
        Cont$func$lambda$3 = function Cont$func$lambda$(pc1) {
          return new Cont$func$lambda$.class(pc1);
        };
        Cont$func$lambda$3.class = class Cont$func$lambda$1 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp117;
            tmp117 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 281) {
              stackDelayRes2 = value$;
            } else if (this.pc === 283) {
              matchResult = value$;
            } else if (this.pc === 282) {
              tmp116 = value$;
            }
            contLoop: while (true) {
              if (this.pc === 281) {
                selRes = Char.OctDigit;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp116 = new globalThis.Error("Access to required field 'OctDigit' yielded 'undefined'");
                  if (tmp116 instanceof runtime.EffectSig.class) {
                    this.pc = 282;
                    tmp116.contTrace.last.next = this;
                    tmp116.contTrace.last = this;
                    return tmp116
                  }
                  this.pc = 282;
                  continue contLoop;
                }
                this.pc = 285;
                continue contLoop;
              } else if (this.pc === 285) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapply(x));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 283;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 283;
                continue contLoop;
              } else if (this.pc === 283) {
                matchResult = runtime.resetDepth(matchResult, curDepth2);
                if (matchResult instanceof runtime.MatchResult.class) {
                  return true
                } else {
                  return false
                }
                this.pc = 284;
                continue contLoop;
              } else if (this.pc === 284) {
                break contLoop;
              } else if (this.pc === 282) {
                tmp116 = runtime.resetDepth(tmp116, curDepth2);
                throw tmp116;
              }
              break;
            }
          }
          toString() { return "Cont$func$lambda$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth2 = runtime.stackDepth;
        stackDelayRes2 = runtime.checkDepth();
        if (stackDelayRes2 instanceof runtime.EffectSig.class) {
          stackDelayRes2.contTrace.last.next = new Cont$func$lambda$3.class(281);
          stackDelayRes2.contTrace.last = stackDelayRes2.contTrace.last.next;
          return stackDelayRes2
        }
        selRes = Char.OctDigit;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp116 = new globalThis.Error("Access to required field 'OctDigit' yielded 'undefined'");
          if (tmp116 instanceof runtime.EffectSig.class) {
            tmp116.contTrace.last.next = new Cont$func$lambda$3.class(282);
            tmp116.contTrace.last = tmp116.contTrace.last.next;
            return tmp116
          }
          tmp116 = runtime.resetDepth(tmp116, curDepth2);
          throw tmp116;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapply(x));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$lambda$3.class(283);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth2);
        if (matchResult instanceof runtime.MatchResult.class) {
          return true
        } else {
          return false
        }
      });
      lambda2 = (undefined, function (x) {
        let matchResult, selRes, tmp116, curDepth2, stackDelayRes2, Cont$func$lambda$3;
        Cont$func$lambda$3 = function Cont$func$lambda$(pc1) {
          return new Cont$func$lambda$.class(pc1);
        };
        Cont$func$lambda$3.class = class Cont$func$lambda$2 extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp117;
            tmp117 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 307) {
              stackDelayRes2 = value$;
            } else if (this.pc === 309) {
              matchResult = value$;
            } else if (this.pc === 308) {
              tmp116 = value$;
            }
            contLoop: while (true) {
              if (this.pc === 307) {
                selRes = Char.HexDigit;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp116 = new globalThis.Error("Access to required field 'HexDigit' yielded 'undefined'");
                  if (tmp116 instanceof runtime.EffectSig.class) {
                    this.pc = 308;
                    tmp116.contTrace.last.next = this;
                    tmp116.contTrace.last = this;
                    return tmp116
                  }
                  this.pc = 308;
                  continue contLoop;
                }
                this.pc = 311;
                continue contLoop;
              } else if (this.pc === 311) {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult = runtime.safeCall(selRes.unapply(x));
                if (matchResult instanceof runtime.EffectSig.class) {
                  this.pc = 309;
                  matchResult.contTrace.last.next = this;
                  matchResult.contTrace.last = this;
                  return matchResult
                }
                this.pc = 309;
                continue contLoop;
              } else if (this.pc === 309) {
                matchResult = runtime.resetDepth(matchResult, curDepth2);
                if (matchResult instanceof runtime.MatchResult.class) {
                  return true
                } else {
                  return false
                }
                this.pc = 310;
                continue contLoop;
              } else if (this.pc === 310) {
                break contLoop;
              } else if (this.pc === 308) {
                tmp116 = runtime.resetDepth(tmp116, curDepth2);
                throw tmp116;
              }
              break;
            }
          }
          toString() { return "Cont$func$lambda$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth2 = runtime.stackDepth;
        stackDelayRes2 = runtime.checkDepth();
        if (stackDelayRes2 instanceof runtime.EffectSig.class) {
          stackDelayRes2.contTrace.last.next = new Cont$func$lambda$3.class(307);
          stackDelayRes2.contTrace.last = stackDelayRes2.contTrace.last.next;
          return stackDelayRes2
        }
        selRes = Char.HexDigit;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp116 = new globalThis.Error("Access to required field 'HexDigit' yielded 'undefined'");
          if (tmp116 instanceof runtime.EffectSig.class) {
            tmp116.contTrace.last.next = new Cont$func$lambda$3.class(308);
            tmp116.contTrace.last = tmp116.contTrace.last.next;
            return tmp116
          }
          tmp116 = runtime.resetDepth(tmp116, curDepth2);
          throw tmp116;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult = runtime.safeCall(selRes.unapply(x));
        if (matchResult instanceof runtime.EffectSig.class) {
          matchResult.contTrace.last.next = new Cont$func$lambda$3.class(309);
          matchResult.contTrace.last = matchResult.contTrace.last.next;
          return matchResult
        }
        matchResult = runtime.resetDepth(matchResult, curDepth2);
        if (matchResult instanceof runtime.MatchResult.class) {
          return true
        } else {
          return false
        }
      });
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$number$1.class(251);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      if (head === "0") {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut3 = char1(idx);
        if (scrut3 instanceof runtime.EffectSig.class) {
          scrut3.contTrace.last.next = new Cont$func$number$1.class(252);
          scrut3.contTrace.last = scrut3.contTrace.last.next;
          return scrut3
        }
        scrut3 = runtime.resetDepth(scrut3, curDepth1);
        if (scrut3 instanceof Option.None.class) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp1 = Token.integer("0", idx);
          if (tmp1 instanceof runtime.EffectSig.class) {
            tmp1.contTrace.last.next = new Cont$func$number$1.class(253);
            tmp1.contTrace.last = tmp1.contTrace.last.next;
            return tmp1
          }
          tmp1 = runtime.resetDepth(tmp1, curDepth1);
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp2 = runtime.safeCall(tmp1(instance$Ident$_LineLookupTable$_));
          if (tmp2 instanceof runtime.EffectSig.class) {
            tmp2.contTrace.last.next = new Cont$func$number$1.class(254);
            tmp2.contTrace.last = tmp2.contTrace.last.next;
            return tmp2
          }
          tmp2 = runtime.resetDepth(tmp2, curDepth1);
          return [
            idx,
            tmp2
          ]
        } else if (scrut3 instanceof Option.Some.class) {
          param01 = scrut3.value;
          if (param01 === "b") {
            tmp3 = lambda;
            tmp4 = idx + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut8 = take(tmp3, tmp4, "");
            if (scrut8 instanceof runtime.EffectSig.class) {
              scrut8.contTrace.last.next = new Cont$func$number$1.class(260);
              scrut8.contTrace.last = scrut8.contTrace.last.next;
              return scrut8
            }
            scrut8 = runtime.resetDepth(scrut8, curDepth1);
            if (globalThis.Array.isArray(scrut8) && scrut8.length === 2) {
              first06 = scrut8[0];
              first16 = scrut8[1];
              idx$_5 = first06;
              bs = first16;
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp5 = Str.concat2("0b", bs);
              if (tmp5 instanceof runtime.EffectSig.class) {
                tmp5.contTrace.last.next = new Cont$func$number$1.class(261);
                tmp5.contTrace.last = tmp5.contTrace.last.next;
                return tmp5
              }
              tmp5 = runtime.resetDepth(tmp5, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.integer(tmp5, idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                tmp6.contTrace.last.next = new Cont$func$number$1.class(262);
                tmp6.contTrace.last = tmp6.contTrace.last.next;
                return tmp6
              }
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp7 instanceof runtime.EffectSig.class) {
                tmp7.contTrace.last.next = new Cont$func$number$1.class(263);
                tmp7.contTrace.last = tmp7.contTrace.last.next;
                return tmp7
              }
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              return [
                idx$_5,
                tmp7
              ]
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                scrut4.contTrace.last.next = new Cont$func$number$1.class(264);
                scrut4.contTrace.last = scrut4.contTrace.last.next;
                return scrut4
              }
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp8 = Token.integer(integer1, idx);
                if (tmp8 instanceof runtime.EffectSig.class) {
                  tmp8.contTrace.last.next = new Cont$func$number$1.class(265);
                  tmp8.contTrace.last = tmp8.contTrace.last.next;
                  return tmp8
                }
                tmp8 = runtime.resetDepth(tmp8, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp9 = runtime.safeCall(tmp8(instance$Ident$_LineLookupTable$_));
                if (tmp9 instanceof runtime.EffectSig.class) {
                  tmp9.contTrace.last.next = new Cont$func$number$1.class(266);
                  tmp9.contTrace.last = tmp9.contTrace.last.next;
                  return tmp9
                }
                tmp9 = runtime.resetDepth(tmp9, curDepth1);
                return [
                  idx$_1,
                  tmp9
                ]
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut = digits(idx, head);
                if (scrut instanceof runtime.EffectSig.class) {
                  scrut.contTrace.last.next = new Cont$func$number$1.class(267);
                  scrut.contTrace.last = scrut.contTrace.last.next;
                  return scrut
                }
                scrut = runtime.resetDepth(scrut, curDepth1);
                if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                  first0 = scrut[0];
                  first1 = scrut[1];
                  idx$_ = first0;
                  integer = first1;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  scrut1 = char1(idx$_);
                  if (scrut1 instanceof runtime.EffectSig.class) {
                    scrut1.contTrace.last.next = new Cont$func$number$1.class(268);
                    scrut1.contTrace.last = scrut1.contTrace.last.next;
                    return scrut1
                  }
                  scrut1 = runtime.resetDepth(scrut1, curDepth1);
                  if (scrut1 instanceof Option.Some.class) {
                    param0 = scrut1.value;
                    if (param0 === ".") {
                      tmp10 = idx$_ + 1;
                      runtime.stackDepth = runtime.stackDepth + 1;
                      scrut2 = digits(tmp10, "");
                      if (scrut2 instanceof runtime.EffectSig.class) {
                        scrut2.contTrace.last.next = new Cont$func$number$1.class(269);
                        scrut2.contTrace.last = scrut2.contTrace.last.next;
                        return scrut2
                      }
                      scrut2 = runtime.resetDepth(scrut2, curDepth1);
                      if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                        first01 = scrut2[0];
                        first11 = scrut2[1];
                        idx$_$_ = first01;
                        fraction = first11;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp11 = Str.concat2(integer, ".");
                        if (tmp11 instanceof runtime.EffectSig.class) {
                          tmp11.contTrace.last.next = new Cont$func$number$1.class(270);
                          tmp11.contTrace.last = tmp11.contTrace.last.next;
                          return tmp11
                        }
                        tmp11 = runtime.resetDepth(tmp11, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp12 = Str.concat2(tmp11, fraction);
                        if (tmp12 instanceof runtime.EffectSig.class) {
                          tmp12.contTrace.last.next = new Cont$func$number$1.class(271);
                          tmp12.contTrace.last = tmp12.contTrace.last.next;
                          return tmp12
                        }
                        tmp12 = runtime.resetDepth(tmp12, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp13 = Token.decimal(tmp12, idx);
                        if (tmp13 instanceof runtime.EffectSig.class) {
                          tmp13.contTrace.last.next = new Cont$func$number$1.class(272);
                          tmp13.contTrace.last = tmp13.contTrace.last.next;
                          return tmp13
                        }
                        tmp13 = runtime.resetDepth(tmp13, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp14 = runtime.safeCall(tmp13(instance$Ident$_LineLookupTable$_));
                        if (tmp14 instanceof runtime.EffectSig.class) {
                          tmp14.contTrace.last.next = new Cont$func$number$1.class(273);
                          tmp14.contTrace.last = tmp14.contTrace.last.next;
                          return tmp14
                        }
                        tmp14 = runtime.resetDepth(tmp14, curDepth1);
                        return [
                          idx$_$_,
                          tmp14
                        ]
                      } else {
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp15 = Token.integer(integer, idx);
                        if (tmp15 instanceof runtime.EffectSig.class) {
                          tmp15.contTrace.last.next = new Cont$func$number$1.class(274);
                          tmp15.contTrace.last = tmp15.contTrace.last.next;
                          return tmp15
                        }
                        tmp15 = runtime.resetDepth(tmp15, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp16 = runtime.safeCall(tmp15(instance$Ident$_LineLookupTable$_));
                        if (tmp16 instanceof runtime.EffectSig.class) {
                          tmp16.contTrace.last.next = new Cont$func$number$1.class(275);
                          tmp16.contTrace.last = tmp16.contTrace.last.next;
                          return tmp16
                        }
                        tmp16 = runtime.resetDepth(tmp16, curDepth1);
                        return [
                          idx$_,
                          tmp16
                        ]
                      }
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp17 = Token.integer(integer, idx);
                      if (tmp17 instanceof runtime.EffectSig.class) {
                        tmp17.contTrace.last.next = new Cont$func$number$1.class(276);
                        tmp17.contTrace.last = tmp17.contTrace.last.next;
                        return tmp17
                      }
                      tmp17 = runtime.resetDepth(tmp17, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp18 = runtime.safeCall(tmp17(instance$Ident$_LineLookupTable$_));
                      if (tmp18 instanceof runtime.EffectSig.class) {
                        tmp18.contTrace.last.next = new Cont$func$number$1.class(277);
                        tmp18.contTrace.last = tmp18.contTrace.last.next;
                        return tmp18
                      }
                      tmp18 = runtime.resetDepth(tmp18, curDepth1);
                      return [
                        idx$_,
                        tmp18
                      ]
                    }
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp19 = Token.integer(integer, idx);
                    if (tmp19 instanceof runtime.EffectSig.class) {
                      tmp19.contTrace.last.next = new Cont$func$number$1.class(278);
                      tmp19.contTrace.last = tmp19.contTrace.last.next;
                      return tmp19
                    }
                    tmp19 = runtime.resetDepth(tmp19, curDepth1);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp20 = runtime.safeCall(tmp19(instance$Ident$_LineLookupTable$_));
                    if (tmp20 instanceof runtime.EffectSig.class) {
                      tmp20.contTrace.last.next = new Cont$func$number$1.class(279);
                      tmp20.contTrace.last = tmp20.contTrace.last.next;
                      return tmp20
                    }
                    tmp20 = runtime.resetDepth(tmp20, curDepth1);
                    return [
                      idx$_,
                      tmp20
                    ]
                  }
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp109 = new globalThis.Error("match error");
                  if (tmp109 instanceof runtime.EffectSig.class) {
                    tmp109.contTrace.last.next = new Cont$func$number$1.class(280);
                    tmp109.contTrace.last = tmp109.contTrace.last.next;
                    return tmp109
                  }
                  tmp109 = runtime.resetDepth(tmp109, curDepth1);
                  throw tmp109;
                }
              }
            }
          } else if (param01 === "o") {
            tmp21 = lambda1;
            tmp22 = idx + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut7 = take(tmp21, tmp22, "");
            if (scrut7 instanceof runtime.EffectSig.class) {
              scrut7.contTrace.last.next = new Cont$func$number$1.class(286);
              scrut7.contTrace.last = scrut7.contTrace.last.next;
              return scrut7
            }
            scrut7 = runtime.resetDepth(scrut7, curDepth1);
            if (globalThis.Array.isArray(scrut7) && scrut7.length === 2) {
              first05 = scrut7[0];
              first15 = scrut7[1];
              idx$_4 = first05;
              os = first15;
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp23 = Str.concat2("0o", os);
              if (tmp23 instanceof runtime.EffectSig.class) {
                tmp23.contTrace.last.next = new Cont$func$number$1.class(287);
                tmp23.contTrace.last = tmp23.contTrace.last.next;
                return tmp23
              }
              tmp23 = runtime.resetDepth(tmp23, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp24 = Token.integer(tmp23, idx);
              if (tmp24 instanceof runtime.EffectSig.class) {
                tmp24.contTrace.last.next = new Cont$func$number$1.class(288);
                tmp24.contTrace.last = tmp24.contTrace.last.next;
                return tmp24
              }
              tmp24 = runtime.resetDepth(tmp24, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp25 = runtime.safeCall(tmp24(instance$Ident$_LineLookupTable$_));
              if (tmp25 instanceof runtime.EffectSig.class) {
                tmp25.contTrace.last.next = new Cont$func$number$1.class(289);
                tmp25.contTrace.last = tmp25.contTrace.last.next;
                return tmp25
              }
              tmp25 = runtime.resetDepth(tmp25, curDepth1);
              return [
                idx$_4,
                tmp25
              ]
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                scrut4.contTrace.last.next = new Cont$func$number$1.class(290);
                scrut4.contTrace.last = scrut4.contTrace.last.next;
                return scrut4
              }
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp26 = Token.integer(integer1, idx);
                if (tmp26 instanceof runtime.EffectSig.class) {
                  tmp26.contTrace.last.next = new Cont$func$number$1.class(291);
                  tmp26.contTrace.last = tmp26.contTrace.last.next;
                  return tmp26
                }
                tmp26 = runtime.resetDepth(tmp26, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp27 = runtime.safeCall(tmp26(instance$Ident$_LineLookupTable$_));
                if (tmp27 instanceof runtime.EffectSig.class) {
                  tmp27.contTrace.last.next = new Cont$func$number$1.class(292);
                  tmp27.contTrace.last = tmp27.contTrace.last.next;
                  return tmp27
                }
                tmp27 = runtime.resetDepth(tmp27, curDepth1);
                return [
                  idx$_1,
                  tmp27
                ]
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut = digits(idx, head);
                if (scrut instanceof runtime.EffectSig.class) {
                  scrut.contTrace.last.next = new Cont$func$number$1.class(293);
                  scrut.contTrace.last = scrut.contTrace.last.next;
                  return scrut
                }
                scrut = runtime.resetDepth(scrut, curDepth1);
                if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                  first0 = scrut[0];
                  first1 = scrut[1];
                  idx$_ = first0;
                  integer = first1;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  scrut1 = char1(idx$_);
                  if (scrut1 instanceof runtime.EffectSig.class) {
                    scrut1.contTrace.last.next = new Cont$func$number$1.class(294);
                    scrut1.contTrace.last = scrut1.contTrace.last.next;
                    return scrut1
                  }
                  scrut1 = runtime.resetDepth(scrut1, curDepth1);
                  if (scrut1 instanceof Option.Some.class) {
                    param0 = scrut1.value;
                    if (param0 === ".") {
                      tmp28 = idx$_ + 1;
                      runtime.stackDepth = runtime.stackDepth + 1;
                      scrut2 = digits(tmp28, "");
                      if (scrut2 instanceof runtime.EffectSig.class) {
                        scrut2.contTrace.last.next = new Cont$func$number$1.class(295);
                        scrut2.contTrace.last = scrut2.contTrace.last.next;
                        return scrut2
                      }
                      scrut2 = runtime.resetDepth(scrut2, curDepth1);
                      if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                        first01 = scrut2[0];
                        first11 = scrut2[1];
                        idx$_$_ = first01;
                        fraction = first11;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp29 = Str.concat2(integer, ".");
                        if (tmp29 instanceof runtime.EffectSig.class) {
                          tmp29.contTrace.last.next = new Cont$func$number$1.class(296);
                          tmp29.contTrace.last = tmp29.contTrace.last.next;
                          return tmp29
                        }
                        tmp29 = runtime.resetDepth(tmp29, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp30 = Str.concat2(tmp29, fraction);
                        if (tmp30 instanceof runtime.EffectSig.class) {
                          tmp30.contTrace.last.next = new Cont$func$number$1.class(297);
                          tmp30.contTrace.last = tmp30.contTrace.last.next;
                          return tmp30
                        }
                        tmp30 = runtime.resetDepth(tmp30, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp31 = Token.decimal(tmp30, idx);
                        if (tmp31 instanceof runtime.EffectSig.class) {
                          tmp31.contTrace.last.next = new Cont$func$number$1.class(298);
                          tmp31.contTrace.last = tmp31.contTrace.last.next;
                          return tmp31
                        }
                        tmp31 = runtime.resetDepth(tmp31, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp32 = runtime.safeCall(tmp31(instance$Ident$_LineLookupTable$_));
                        if (tmp32 instanceof runtime.EffectSig.class) {
                          tmp32.contTrace.last.next = new Cont$func$number$1.class(299);
                          tmp32.contTrace.last = tmp32.contTrace.last.next;
                          return tmp32
                        }
                        tmp32 = runtime.resetDepth(tmp32, curDepth1);
                        return [
                          idx$_$_,
                          tmp32
                        ]
                      } else {
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp33 = Token.integer(integer, idx);
                        if (tmp33 instanceof runtime.EffectSig.class) {
                          tmp33.contTrace.last.next = new Cont$func$number$1.class(300);
                          tmp33.contTrace.last = tmp33.contTrace.last.next;
                          return tmp33
                        }
                        tmp33 = runtime.resetDepth(tmp33, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp34 = runtime.safeCall(tmp33(instance$Ident$_LineLookupTable$_));
                        if (tmp34 instanceof runtime.EffectSig.class) {
                          tmp34.contTrace.last.next = new Cont$func$number$1.class(301);
                          tmp34.contTrace.last = tmp34.contTrace.last.next;
                          return tmp34
                        }
                        tmp34 = runtime.resetDepth(tmp34, curDepth1);
                        return [
                          idx$_,
                          tmp34
                        ]
                      }
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp35 = Token.integer(integer, idx);
                      if (tmp35 instanceof runtime.EffectSig.class) {
                        tmp35.contTrace.last.next = new Cont$func$number$1.class(302);
                        tmp35.contTrace.last = tmp35.contTrace.last.next;
                        return tmp35
                      }
                      tmp35 = runtime.resetDepth(tmp35, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp36 = runtime.safeCall(tmp35(instance$Ident$_LineLookupTable$_));
                      if (tmp36 instanceof runtime.EffectSig.class) {
                        tmp36.contTrace.last.next = new Cont$func$number$1.class(303);
                        tmp36.contTrace.last = tmp36.contTrace.last.next;
                        return tmp36
                      }
                      tmp36 = runtime.resetDepth(tmp36, curDepth1);
                      return [
                        idx$_,
                        tmp36
                      ]
                    }
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp37 = Token.integer(integer, idx);
                    if (tmp37 instanceof runtime.EffectSig.class) {
                      tmp37.contTrace.last.next = new Cont$func$number$1.class(304);
                      tmp37.contTrace.last = tmp37.contTrace.last.next;
                      return tmp37
                    }
                    tmp37 = runtime.resetDepth(tmp37, curDepth1);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp38 = runtime.safeCall(tmp37(instance$Ident$_LineLookupTable$_));
                    if (tmp38 instanceof runtime.EffectSig.class) {
                      tmp38.contTrace.last.next = new Cont$func$number$1.class(305);
                      tmp38.contTrace.last = tmp38.contTrace.last.next;
                      return tmp38
                    }
                    tmp38 = runtime.resetDepth(tmp38, curDepth1);
                    return [
                      idx$_,
                      tmp38
                    ]
                  }
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp110 = new globalThis.Error("match error");
                  if (tmp110 instanceof runtime.EffectSig.class) {
                    tmp110.contTrace.last.next = new Cont$func$number$1.class(306);
                    tmp110.contTrace.last = tmp110.contTrace.last.next;
                    return tmp110
                  }
                  tmp110 = runtime.resetDepth(tmp110, curDepth1);
                  throw tmp110;
                }
              }
            }
          } else if (param01 === "x") {
            tmp39 = lambda2;
            tmp40 = idx + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut6 = take(tmp39, tmp40, "");
            if (scrut6 instanceof runtime.EffectSig.class) {
              scrut6.contTrace.last.next = new Cont$func$number$1.class(312);
              scrut6.contTrace.last = scrut6.contTrace.last.next;
              return scrut6
            }
            scrut6 = runtime.resetDepth(scrut6, curDepth1);
            if (globalThis.Array.isArray(scrut6) && scrut6.length === 2) {
              first04 = scrut6[0];
              first14 = scrut6[1];
              idx$_3 = first04;
              xs = first14;
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp41 = Str.concat2("0x", xs);
              if (tmp41 instanceof runtime.EffectSig.class) {
                tmp41.contTrace.last.next = new Cont$func$number$1.class(313);
                tmp41.contTrace.last = tmp41.contTrace.last.next;
                return tmp41
              }
              tmp41 = runtime.resetDepth(tmp41, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp42 = Token.integer(tmp41, idx);
              if (tmp42 instanceof runtime.EffectSig.class) {
                tmp42.contTrace.last.next = new Cont$func$number$1.class(314);
                tmp42.contTrace.last = tmp42.contTrace.last.next;
                return tmp42
              }
              tmp42 = runtime.resetDepth(tmp42, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp43 = runtime.safeCall(tmp42(instance$Ident$_LineLookupTable$_));
              if (tmp43 instanceof runtime.EffectSig.class) {
                tmp43.contTrace.last.next = new Cont$func$number$1.class(315);
                tmp43.contTrace.last = tmp43.contTrace.last.next;
                return tmp43
              }
              tmp43 = runtime.resetDepth(tmp43, curDepth1);
              return [
                idx$_3,
                tmp43
              ]
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                scrut4.contTrace.last.next = new Cont$func$number$1.class(316);
                scrut4.contTrace.last = scrut4.contTrace.last.next;
                return scrut4
              }
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp44 = Token.integer(integer1, idx);
                if (tmp44 instanceof runtime.EffectSig.class) {
                  tmp44.contTrace.last.next = new Cont$func$number$1.class(317);
                  tmp44.contTrace.last = tmp44.contTrace.last.next;
                  return tmp44
                }
                tmp44 = runtime.resetDepth(tmp44, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp45 = runtime.safeCall(tmp44(instance$Ident$_LineLookupTable$_));
                if (tmp45 instanceof runtime.EffectSig.class) {
                  tmp45.contTrace.last.next = new Cont$func$number$1.class(318);
                  tmp45.contTrace.last = tmp45.contTrace.last.next;
                  return tmp45
                }
                tmp45 = runtime.resetDepth(tmp45, curDepth1);
                return [
                  idx$_1,
                  tmp45
                ]
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut = digits(idx, head);
                if (scrut instanceof runtime.EffectSig.class) {
                  scrut.contTrace.last.next = new Cont$func$number$1.class(319);
                  scrut.contTrace.last = scrut.contTrace.last.next;
                  return scrut
                }
                scrut = runtime.resetDepth(scrut, curDepth1);
                if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                  first0 = scrut[0];
                  first1 = scrut[1];
                  idx$_ = first0;
                  integer = first1;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  scrut1 = char1(idx$_);
                  if (scrut1 instanceof runtime.EffectSig.class) {
                    scrut1.contTrace.last.next = new Cont$func$number$1.class(320);
                    scrut1.contTrace.last = scrut1.contTrace.last.next;
                    return scrut1
                  }
                  scrut1 = runtime.resetDepth(scrut1, curDepth1);
                  if (scrut1 instanceof Option.Some.class) {
                    param0 = scrut1.value;
                    if (param0 === ".") {
                      tmp46 = idx$_ + 1;
                      runtime.stackDepth = runtime.stackDepth + 1;
                      scrut2 = digits(tmp46, "");
                      if (scrut2 instanceof runtime.EffectSig.class) {
                        scrut2.contTrace.last.next = new Cont$func$number$1.class(321);
                        scrut2.contTrace.last = scrut2.contTrace.last.next;
                        return scrut2
                      }
                      scrut2 = runtime.resetDepth(scrut2, curDepth1);
                      if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                        first01 = scrut2[0];
                        first11 = scrut2[1];
                        idx$_$_ = first01;
                        fraction = first11;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp47 = Str.concat2(integer, ".");
                        if (tmp47 instanceof runtime.EffectSig.class) {
                          tmp47.contTrace.last.next = new Cont$func$number$1.class(322);
                          tmp47.contTrace.last = tmp47.contTrace.last.next;
                          return tmp47
                        }
                        tmp47 = runtime.resetDepth(tmp47, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp48 = Str.concat2(tmp47, fraction);
                        if (tmp48 instanceof runtime.EffectSig.class) {
                          tmp48.contTrace.last.next = new Cont$func$number$1.class(323);
                          tmp48.contTrace.last = tmp48.contTrace.last.next;
                          return tmp48
                        }
                        tmp48 = runtime.resetDepth(tmp48, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp49 = Token.decimal(tmp48, idx);
                        if (tmp49 instanceof runtime.EffectSig.class) {
                          tmp49.contTrace.last.next = new Cont$func$number$1.class(324);
                          tmp49.contTrace.last = tmp49.contTrace.last.next;
                          return tmp49
                        }
                        tmp49 = runtime.resetDepth(tmp49, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp50 = runtime.safeCall(tmp49(instance$Ident$_LineLookupTable$_));
                        if (tmp50 instanceof runtime.EffectSig.class) {
                          tmp50.contTrace.last.next = new Cont$func$number$1.class(325);
                          tmp50.contTrace.last = tmp50.contTrace.last.next;
                          return tmp50
                        }
                        tmp50 = runtime.resetDepth(tmp50, curDepth1);
                        return [
                          idx$_$_,
                          tmp50
                        ]
                      } else {
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp51 = Token.integer(integer, idx);
                        if (tmp51 instanceof runtime.EffectSig.class) {
                          tmp51.contTrace.last.next = new Cont$func$number$1.class(326);
                          tmp51.contTrace.last = tmp51.contTrace.last.next;
                          return tmp51
                        }
                        tmp51 = runtime.resetDepth(tmp51, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp52 = runtime.safeCall(tmp51(instance$Ident$_LineLookupTable$_));
                        if (tmp52 instanceof runtime.EffectSig.class) {
                          tmp52.contTrace.last.next = new Cont$func$number$1.class(327);
                          tmp52.contTrace.last = tmp52.contTrace.last.next;
                          return tmp52
                        }
                        tmp52 = runtime.resetDepth(tmp52, curDepth1);
                        return [
                          idx$_,
                          tmp52
                        ]
                      }
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp53 = Token.integer(integer, idx);
                      if (tmp53 instanceof runtime.EffectSig.class) {
                        tmp53.contTrace.last.next = new Cont$func$number$1.class(328);
                        tmp53.contTrace.last = tmp53.contTrace.last.next;
                        return tmp53
                      }
                      tmp53 = runtime.resetDepth(tmp53, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp54 = runtime.safeCall(tmp53(instance$Ident$_LineLookupTable$_));
                      if (tmp54 instanceof runtime.EffectSig.class) {
                        tmp54.contTrace.last.next = new Cont$func$number$1.class(329);
                        tmp54.contTrace.last = tmp54.contTrace.last.next;
                        return tmp54
                      }
                      tmp54 = runtime.resetDepth(tmp54, curDepth1);
                      return [
                        idx$_,
                        tmp54
                      ]
                    }
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp55 = Token.integer(integer, idx);
                    if (tmp55 instanceof runtime.EffectSig.class) {
                      tmp55.contTrace.last.next = new Cont$func$number$1.class(330);
                      tmp55.contTrace.last = tmp55.contTrace.last.next;
                      return tmp55
                    }
                    tmp55 = runtime.resetDepth(tmp55, curDepth1);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp56 = runtime.safeCall(tmp55(instance$Ident$_LineLookupTable$_));
                    if (tmp56 instanceof runtime.EffectSig.class) {
                      tmp56.contTrace.last.next = new Cont$func$number$1.class(331);
                      tmp56.contTrace.last = tmp56.contTrace.last.next;
                      return tmp56
                    }
                    tmp56 = runtime.resetDepth(tmp56, curDepth1);
                    return [
                      idx$_,
                      tmp56
                    ]
                  }
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp111 = new globalThis.Error("match error");
                  if (tmp111 instanceof runtime.EffectSig.class) {
                    tmp111.contTrace.last.next = new Cont$func$number$1.class(332);
                    tmp111.contTrace.last = tmp111.contTrace.last.next;
                    return tmp111
                  }
                  tmp111 = runtime.resetDepth(tmp111, curDepth1);
                  throw tmp111;
                }
              }
            }
          } else if (param01 === ".") {
            tmp57 = idx + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut5 = digits(tmp57, ".");
            if (scrut5 instanceof runtime.EffectSig.class) {
              scrut5.contTrace.last.next = new Cont$func$number$1.class(333);
              scrut5.contTrace.last = scrut5.contTrace.last.next;
              return scrut5
            }
            scrut5 = runtime.resetDepth(scrut5, curDepth1);
            if (globalThis.Array.isArray(scrut5) && scrut5.length === 2) {
              first03 = scrut5[0];
              first13 = scrut5[1];
              idx$_2 = first03;
              ds = first13;
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp58 = Str.concat2("0.", ds);
              if (tmp58 instanceof runtime.EffectSig.class) {
                tmp58.contTrace.last.next = new Cont$func$number$1.class(334);
                tmp58.contTrace.last = tmp58.contTrace.last.next;
                return tmp58
              }
              tmp58 = runtime.resetDepth(tmp58, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp59 = Token.decimal(tmp58, idx);
              if (tmp59 instanceof runtime.EffectSig.class) {
                tmp59.contTrace.last.next = new Cont$func$number$1.class(335);
                tmp59.contTrace.last = tmp59.contTrace.last.next;
                return tmp59
              }
              tmp59 = runtime.resetDepth(tmp59, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp60 = runtime.safeCall(tmp59(instance$Ident$_LineLookupTable$_));
              if (tmp60 instanceof runtime.EffectSig.class) {
                tmp60.contTrace.last.next = new Cont$func$number$1.class(336);
                tmp60.contTrace.last = tmp60.contTrace.last.next;
                return tmp60
              }
              tmp60 = runtime.resetDepth(tmp60, curDepth1);
              return [
                idx$_2,
                tmp60
              ]
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut4 = digits(idx, head);
              if (scrut4 instanceof runtime.EffectSig.class) {
                scrut4.contTrace.last.next = new Cont$func$number$1.class(337);
                scrut4.contTrace.last = scrut4.contTrace.last.next;
                return scrut4
              }
              scrut4 = runtime.resetDepth(scrut4, curDepth1);
              if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
                first02 = scrut4[0];
                first12 = scrut4[1];
                idx$_1 = first02;
                integer1 = first12;
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp61 = Token.integer(integer1, idx);
                if (tmp61 instanceof runtime.EffectSig.class) {
                  tmp61.contTrace.last.next = new Cont$func$number$1.class(338);
                  tmp61.contTrace.last = tmp61.contTrace.last.next;
                  return tmp61
                }
                tmp61 = runtime.resetDepth(tmp61, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp62 = runtime.safeCall(tmp61(instance$Ident$_LineLookupTable$_));
                if (tmp62 instanceof runtime.EffectSig.class) {
                  tmp62.contTrace.last.next = new Cont$func$number$1.class(339);
                  tmp62.contTrace.last = tmp62.contTrace.last.next;
                  return tmp62
                }
                tmp62 = runtime.resetDepth(tmp62, curDepth1);
                return [
                  idx$_1,
                  tmp62
                ]
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut = digits(idx, head);
                if (scrut instanceof runtime.EffectSig.class) {
                  scrut.contTrace.last.next = new Cont$func$number$1.class(340);
                  scrut.contTrace.last = scrut.contTrace.last.next;
                  return scrut
                }
                scrut = runtime.resetDepth(scrut, curDepth1);
                if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                  first0 = scrut[0];
                  first1 = scrut[1];
                  idx$_ = first0;
                  integer = first1;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  scrut1 = char1(idx$_);
                  if (scrut1 instanceof runtime.EffectSig.class) {
                    scrut1.contTrace.last.next = new Cont$func$number$1.class(341);
                    scrut1.contTrace.last = scrut1.contTrace.last.next;
                    return scrut1
                  }
                  scrut1 = runtime.resetDepth(scrut1, curDepth1);
                  if (scrut1 instanceof Option.Some.class) {
                    param0 = scrut1.value;
                    if (param0 === ".") {
                      tmp63 = idx$_ + 1;
                      runtime.stackDepth = runtime.stackDepth + 1;
                      scrut2 = digits(tmp63, "");
                      if (scrut2 instanceof runtime.EffectSig.class) {
                        scrut2.contTrace.last.next = new Cont$func$number$1.class(342);
                        scrut2.contTrace.last = scrut2.contTrace.last.next;
                        return scrut2
                      }
                      scrut2 = runtime.resetDepth(scrut2, curDepth1);
                      if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                        first01 = scrut2[0];
                        first11 = scrut2[1];
                        idx$_$_ = first01;
                        fraction = first11;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp64 = Str.concat2(integer, ".");
                        if (tmp64 instanceof runtime.EffectSig.class) {
                          tmp64.contTrace.last.next = new Cont$func$number$1.class(343);
                          tmp64.contTrace.last = tmp64.contTrace.last.next;
                          return tmp64
                        }
                        tmp64 = runtime.resetDepth(tmp64, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp65 = Str.concat2(tmp64, fraction);
                        if (tmp65 instanceof runtime.EffectSig.class) {
                          tmp65.contTrace.last.next = new Cont$func$number$1.class(344);
                          tmp65.contTrace.last = tmp65.contTrace.last.next;
                          return tmp65
                        }
                        tmp65 = runtime.resetDepth(tmp65, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp66 = Token.decimal(tmp65, idx);
                        if (tmp66 instanceof runtime.EffectSig.class) {
                          tmp66.contTrace.last.next = new Cont$func$number$1.class(345);
                          tmp66.contTrace.last = tmp66.contTrace.last.next;
                          return tmp66
                        }
                        tmp66 = runtime.resetDepth(tmp66, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp67 = runtime.safeCall(tmp66(instance$Ident$_LineLookupTable$_));
                        if (tmp67 instanceof runtime.EffectSig.class) {
                          tmp67.contTrace.last.next = new Cont$func$number$1.class(346);
                          tmp67.contTrace.last = tmp67.contTrace.last.next;
                          return tmp67
                        }
                        tmp67 = runtime.resetDepth(tmp67, curDepth1);
                        return [
                          idx$_$_,
                          tmp67
                        ]
                      } else {
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp68 = Token.integer(integer, idx);
                        if (tmp68 instanceof runtime.EffectSig.class) {
                          tmp68.contTrace.last.next = new Cont$func$number$1.class(347);
                          tmp68.contTrace.last = tmp68.contTrace.last.next;
                          return tmp68
                        }
                        tmp68 = runtime.resetDepth(tmp68, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp69 = runtime.safeCall(tmp68(instance$Ident$_LineLookupTable$_));
                        if (tmp69 instanceof runtime.EffectSig.class) {
                          tmp69.contTrace.last.next = new Cont$func$number$1.class(348);
                          tmp69.contTrace.last = tmp69.contTrace.last.next;
                          return tmp69
                        }
                        tmp69 = runtime.resetDepth(tmp69, curDepth1);
                        return [
                          idx$_,
                          tmp69
                        ]
                      }
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp70 = Token.integer(integer, idx);
                      if (tmp70 instanceof runtime.EffectSig.class) {
                        tmp70.contTrace.last.next = new Cont$func$number$1.class(349);
                        tmp70.contTrace.last = tmp70.contTrace.last.next;
                        return tmp70
                      }
                      tmp70 = runtime.resetDepth(tmp70, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp71 = runtime.safeCall(tmp70(instance$Ident$_LineLookupTable$_));
                      if (tmp71 instanceof runtime.EffectSig.class) {
                        tmp71.contTrace.last.next = new Cont$func$number$1.class(350);
                        tmp71.contTrace.last = tmp71.contTrace.last.next;
                        return tmp71
                      }
                      tmp71 = runtime.resetDepth(tmp71, curDepth1);
                      return [
                        idx$_,
                        tmp71
                      ]
                    }
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp72 = Token.integer(integer, idx);
                    if (tmp72 instanceof runtime.EffectSig.class) {
                      tmp72.contTrace.last.next = new Cont$func$number$1.class(351);
                      tmp72.contTrace.last = tmp72.contTrace.last.next;
                      return tmp72
                    }
                    tmp72 = runtime.resetDepth(tmp72, curDepth1);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp73 = runtime.safeCall(tmp72(instance$Ident$_LineLookupTable$_));
                    if (tmp73 instanceof runtime.EffectSig.class) {
                      tmp73.contTrace.last.next = new Cont$func$number$1.class(352);
                      tmp73.contTrace.last = tmp73.contTrace.last.next;
                      return tmp73
                    }
                    tmp73 = runtime.resetDepth(tmp73, curDepth1);
                    return [
                      idx$_,
                      tmp73
                    ]
                  }
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp112 = new globalThis.Error("match error");
                  if (tmp112 instanceof runtime.EffectSig.class) {
                    tmp112.contTrace.last.next = new Cont$func$number$1.class(353);
                    tmp112.contTrace.last = tmp112.contTrace.last.next;
                    return tmp112
                  }
                  tmp112 = runtime.resetDepth(tmp112, curDepth1);
                  throw tmp112;
                }
              }
            }
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut4 = digits(idx, head);
            if (scrut4 instanceof runtime.EffectSig.class) {
              scrut4.contTrace.last.next = new Cont$func$number$1.class(354);
              scrut4.contTrace.last = scrut4.contTrace.last.next;
              return scrut4
            }
            scrut4 = runtime.resetDepth(scrut4, curDepth1);
            if (globalThis.Array.isArray(scrut4) && scrut4.length === 2) {
              first02 = scrut4[0];
              first12 = scrut4[1];
              idx$_1 = first02;
              integer1 = first12;
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp74 = Token.integer(integer1, idx);
              if (tmp74 instanceof runtime.EffectSig.class) {
                tmp74.contTrace.last.next = new Cont$func$number$1.class(355);
                tmp74.contTrace.last = tmp74.contTrace.last.next;
                return tmp74
              }
              tmp74 = runtime.resetDepth(tmp74, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp75 = runtime.safeCall(tmp74(instance$Ident$_LineLookupTable$_));
              if (tmp75 instanceof runtime.EffectSig.class) {
                tmp75.contTrace.last.next = new Cont$func$number$1.class(356);
                tmp75.contTrace.last = tmp75.contTrace.last.next;
                return tmp75
              }
              tmp75 = runtime.resetDepth(tmp75, curDepth1);
              return [
                idx$_1,
                tmp75
              ]
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = digits(idx, head);
              if (scrut instanceof runtime.EffectSig.class) {
                scrut.contTrace.last.next = new Cont$func$number$1.class(357);
                scrut.contTrace.last = scrut.contTrace.last.next;
                return scrut
              }
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                idx$_ = first0;
                integer = first1;
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut1 = char1(idx$_);
                if (scrut1 instanceof runtime.EffectSig.class) {
                  scrut1.contTrace.last.next = new Cont$func$number$1.class(358);
                  scrut1.contTrace.last = scrut1.contTrace.last.next;
                  return scrut1
                }
                scrut1 = runtime.resetDepth(scrut1, curDepth1);
                if (scrut1 instanceof Option.Some.class) {
                  param0 = scrut1.value;
                  if (param0 === ".") {
                    tmp76 = idx$_ + 1;
                    runtime.stackDepth = runtime.stackDepth + 1;
                    scrut2 = digits(tmp76, "");
                    if (scrut2 instanceof runtime.EffectSig.class) {
                      scrut2.contTrace.last.next = new Cont$func$number$1.class(359);
                      scrut2.contTrace.last = scrut2.contTrace.last.next;
                      return scrut2
                    }
                    scrut2 = runtime.resetDepth(scrut2, curDepth1);
                    if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                      first01 = scrut2[0];
                      first11 = scrut2[1];
                      idx$_$_ = first01;
                      fraction = first11;
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp77 = Str.concat2(integer, ".");
                      if (tmp77 instanceof runtime.EffectSig.class) {
                        tmp77.contTrace.last.next = new Cont$func$number$1.class(360);
                        tmp77.contTrace.last = tmp77.contTrace.last.next;
                        return tmp77
                      }
                      tmp77 = runtime.resetDepth(tmp77, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp78 = Str.concat2(tmp77, fraction);
                      if (tmp78 instanceof runtime.EffectSig.class) {
                        tmp78.contTrace.last.next = new Cont$func$number$1.class(361);
                        tmp78.contTrace.last = tmp78.contTrace.last.next;
                        return tmp78
                      }
                      tmp78 = runtime.resetDepth(tmp78, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp79 = Token.decimal(tmp78, idx);
                      if (tmp79 instanceof runtime.EffectSig.class) {
                        tmp79.contTrace.last.next = new Cont$func$number$1.class(362);
                        tmp79.contTrace.last = tmp79.contTrace.last.next;
                        return tmp79
                      }
                      tmp79 = runtime.resetDepth(tmp79, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp80 = runtime.safeCall(tmp79(instance$Ident$_LineLookupTable$_));
                      if (tmp80 instanceof runtime.EffectSig.class) {
                        tmp80.contTrace.last.next = new Cont$func$number$1.class(363);
                        tmp80.contTrace.last = tmp80.contTrace.last.next;
                        return tmp80
                      }
                      tmp80 = runtime.resetDepth(tmp80, curDepth1);
                      return [
                        idx$_$_,
                        tmp80
                      ]
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp81 = Token.integer(integer, idx);
                      if (tmp81 instanceof runtime.EffectSig.class) {
                        tmp81.contTrace.last.next = new Cont$func$number$1.class(364);
                        tmp81.contTrace.last = tmp81.contTrace.last.next;
                        return tmp81
                      }
                      tmp81 = runtime.resetDepth(tmp81, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp82 = runtime.safeCall(tmp81(instance$Ident$_LineLookupTable$_));
                      if (tmp82 instanceof runtime.EffectSig.class) {
                        tmp82.contTrace.last.next = new Cont$func$number$1.class(365);
                        tmp82.contTrace.last = tmp82.contTrace.last.next;
                        return tmp82
                      }
                      tmp82 = runtime.resetDepth(tmp82, curDepth1);
                      return [
                        idx$_,
                        tmp82
                      ]
                    }
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp83 = Token.integer(integer, idx);
                    if (tmp83 instanceof runtime.EffectSig.class) {
                      tmp83.contTrace.last.next = new Cont$func$number$1.class(366);
                      tmp83.contTrace.last = tmp83.contTrace.last.next;
                      return tmp83
                    }
                    tmp83 = runtime.resetDepth(tmp83, curDepth1);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp84 = runtime.safeCall(tmp83(instance$Ident$_LineLookupTable$_));
                    if (tmp84 instanceof runtime.EffectSig.class) {
                      tmp84.contTrace.last.next = new Cont$func$number$1.class(367);
                      tmp84.contTrace.last = tmp84.contTrace.last.next;
                      return tmp84
                    }
                    tmp84 = runtime.resetDepth(tmp84, curDepth1);
                    return [
                      idx$_,
                      tmp84
                    ]
                  }
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp85 = Token.integer(integer, idx);
                  if (tmp85 instanceof runtime.EffectSig.class) {
                    tmp85.contTrace.last.next = new Cont$func$number$1.class(368);
                    tmp85.contTrace.last = tmp85.contTrace.last.next;
                    return tmp85
                  }
                  tmp85 = runtime.resetDepth(tmp85, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp86 = runtime.safeCall(tmp85(instance$Ident$_LineLookupTable$_));
                  if (tmp86 instanceof runtime.EffectSig.class) {
                    tmp86.contTrace.last.next = new Cont$func$number$1.class(369);
                    tmp86.contTrace.last = tmp86.contTrace.last.next;
                    return tmp86
                  }
                  tmp86 = runtime.resetDepth(tmp86, curDepth1);
                  return [
                    idx$_,
                    tmp86
                  ]
                }
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp113 = new globalThis.Error("match error");
                if (tmp113 instanceof runtime.EffectSig.class) {
                  tmp113.contTrace.last.next = new Cont$func$number$1.class(370);
                  tmp113.contTrace.last = tmp113.contTrace.last.next;
                  return tmp113
                }
                tmp113 = runtime.resetDepth(tmp113, curDepth1);
                throw tmp113;
              }
            }
          }
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut = digits(idx, head);
          if (scrut instanceof runtime.EffectSig.class) {
            scrut.contTrace.last.next = new Cont$func$number$1.class(371);
            scrut.contTrace.last = scrut.contTrace.last.next;
            return scrut
          }
          scrut = runtime.resetDepth(scrut, curDepth1);
          if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
            first0 = scrut[0];
            first1 = scrut[1];
            idx$_ = first0;
            integer = first1;
            runtime.stackDepth = runtime.stackDepth + 1;
            scrut1 = char1(idx$_);
            if (scrut1 instanceof runtime.EffectSig.class) {
              scrut1.contTrace.last.next = new Cont$func$number$1.class(372);
              scrut1.contTrace.last = scrut1.contTrace.last.next;
              return scrut1
            }
            scrut1 = runtime.resetDepth(scrut1, curDepth1);
            if (scrut1 instanceof Option.Some.class) {
              param0 = scrut1.value;
              if (param0 === ".") {
                tmp87 = idx$_ + 1;
                runtime.stackDepth = runtime.stackDepth + 1;
                scrut2 = digits(tmp87, "");
                if (scrut2 instanceof runtime.EffectSig.class) {
                  scrut2.contTrace.last.next = new Cont$func$number$1.class(373);
                  scrut2.contTrace.last = scrut2.contTrace.last.next;
                  return scrut2
                }
                scrut2 = runtime.resetDepth(scrut2, curDepth1);
                if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                  first01 = scrut2[0];
                  first11 = scrut2[1];
                  idx$_$_ = first01;
                  fraction = first11;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp88 = Str.concat2(integer, ".");
                  if (tmp88 instanceof runtime.EffectSig.class) {
                    tmp88.contTrace.last.next = new Cont$func$number$1.class(374);
                    tmp88.contTrace.last = tmp88.contTrace.last.next;
                    return tmp88
                  }
                  tmp88 = runtime.resetDepth(tmp88, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp89 = Str.concat2(tmp88, fraction);
                  if (tmp89 instanceof runtime.EffectSig.class) {
                    tmp89.contTrace.last.next = new Cont$func$number$1.class(375);
                    tmp89.contTrace.last = tmp89.contTrace.last.next;
                    return tmp89
                  }
                  tmp89 = runtime.resetDepth(tmp89, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp90 = Token.decimal(tmp89, idx);
                  if (tmp90 instanceof runtime.EffectSig.class) {
                    tmp90.contTrace.last.next = new Cont$func$number$1.class(376);
                    tmp90.contTrace.last = tmp90.contTrace.last.next;
                    return tmp90
                  }
                  tmp90 = runtime.resetDepth(tmp90, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp91 = runtime.safeCall(tmp90(instance$Ident$_LineLookupTable$_));
                  if (tmp91 instanceof runtime.EffectSig.class) {
                    tmp91.contTrace.last.next = new Cont$func$number$1.class(377);
                    tmp91.contTrace.last = tmp91.contTrace.last.next;
                    return tmp91
                  }
                  tmp91 = runtime.resetDepth(tmp91, curDepth1);
                  return [
                    idx$_$_,
                    tmp91
                  ]
                } else {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp92 = Token.integer(integer, idx);
                  if (tmp92 instanceof runtime.EffectSig.class) {
                    tmp92.contTrace.last.next = new Cont$func$number$1.class(378);
                    tmp92.contTrace.last = tmp92.contTrace.last.next;
                    return tmp92
                  }
                  tmp92 = runtime.resetDepth(tmp92, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp93 = runtime.safeCall(tmp92(instance$Ident$_LineLookupTable$_));
                  if (tmp93 instanceof runtime.EffectSig.class) {
                    tmp93.contTrace.last.next = new Cont$func$number$1.class(379);
                    tmp93.contTrace.last = tmp93.contTrace.last.next;
                    return tmp93
                  }
                  tmp93 = runtime.resetDepth(tmp93, curDepth1);
                  return [
                    idx$_,
                    tmp93
                  ]
                }
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp94 = Token.integer(integer, idx);
                if (tmp94 instanceof runtime.EffectSig.class) {
                  tmp94.contTrace.last.next = new Cont$func$number$1.class(380);
                  tmp94.contTrace.last = tmp94.contTrace.last.next;
                  return tmp94
                }
                tmp94 = runtime.resetDepth(tmp94, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp95 = runtime.safeCall(tmp94(instance$Ident$_LineLookupTable$_));
                if (tmp95 instanceof runtime.EffectSig.class) {
                  tmp95.contTrace.last.next = new Cont$func$number$1.class(381);
                  tmp95.contTrace.last = tmp95.contTrace.last.next;
                  return tmp95
                }
                tmp95 = runtime.resetDepth(tmp95, curDepth1);
                return [
                  idx$_,
                  tmp95
                ]
              }
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp96 = Token.integer(integer, idx);
              if (tmp96 instanceof runtime.EffectSig.class) {
                tmp96.contTrace.last.next = new Cont$func$number$1.class(382);
                tmp96.contTrace.last = tmp96.contTrace.last.next;
                return tmp96
              }
              tmp96 = runtime.resetDepth(tmp96, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp97 = runtime.safeCall(tmp96(instance$Ident$_LineLookupTable$_));
              if (tmp97 instanceof runtime.EffectSig.class) {
                tmp97.contTrace.last.next = new Cont$func$number$1.class(383);
                tmp97.contTrace.last = tmp97.contTrace.last.next;
                return tmp97
              }
              tmp97 = runtime.resetDepth(tmp97, curDepth1);
              return [
                idx$_,
                tmp97
              ]
            }
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp114 = new globalThis.Error("match error");
            if (tmp114 instanceof runtime.EffectSig.class) {
              tmp114.contTrace.last.next = new Cont$func$number$1.class(384);
              tmp114.contTrace.last = tmp114.contTrace.last.next;
              return tmp114
            }
            tmp114 = runtime.resetDepth(tmp114, curDepth1);
            throw tmp114;
          }
        }
      } else {
        runtime.stackDepth = runtime.stackDepth + 1;
        scrut = digits(idx, head);
        if (scrut instanceof runtime.EffectSig.class) {
          scrut.contTrace.last.next = new Cont$func$number$1.class(385);
          scrut.contTrace.last = scrut.contTrace.last.next;
          return scrut
        }
        scrut = runtime.resetDepth(scrut, curDepth1);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          idx$_ = first0;
          integer = first1;
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut1 = char1(idx$_);
          if (scrut1 instanceof runtime.EffectSig.class) {
            scrut1.contTrace.last.next = new Cont$func$number$1.class(386);
            scrut1.contTrace.last = scrut1.contTrace.last.next;
            return scrut1
          }
          scrut1 = runtime.resetDepth(scrut1, curDepth1);
          if (scrut1 instanceof Option.Some.class) {
            param0 = scrut1.value;
            if (param0 === ".") {
              tmp98 = idx$_ + 1;
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = digits(tmp98, "");
              if (scrut2 instanceof runtime.EffectSig.class) {
                scrut2.contTrace.last.next = new Cont$func$number$1.class(387);
                scrut2.contTrace.last = scrut2.contTrace.last.next;
                return scrut2
              }
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first01 = scrut2[0];
                first11 = scrut2[1];
                idx$_$_ = first01;
                fraction = first11;
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp99 = Str.concat2(integer, ".");
                if (tmp99 instanceof runtime.EffectSig.class) {
                  tmp99.contTrace.last.next = new Cont$func$number$1.class(388);
                  tmp99.contTrace.last = tmp99.contTrace.last.next;
                  return tmp99
                }
                tmp99 = runtime.resetDepth(tmp99, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp100 = Str.concat2(tmp99, fraction);
                if (tmp100 instanceof runtime.EffectSig.class) {
                  tmp100.contTrace.last.next = new Cont$func$number$1.class(389);
                  tmp100.contTrace.last = tmp100.contTrace.last.next;
                  return tmp100
                }
                tmp100 = runtime.resetDepth(tmp100, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp101 = Token.decimal(tmp100, idx);
                if (tmp101 instanceof runtime.EffectSig.class) {
                  tmp101.contTrace.last.next = new Cont$func$number$1.class(390);
                  tmp101.contTrace.last = tmp101.contTrace.last.next;
                  return tmp101
                }
                tmp101 = runtime.resetDepth(tmp101, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp102 = runtime.safeCall(tmp101(instance$Ident$_LineLookupTable$_));
                if (tmp102 instanceof runtime.EffectSig.class) {
                  tmp102.contTrace.last.next = new Cont$func$number$1.class(391);
                  tmp102.contTrace.last = tmp102.contTrace.last.next;
                  return tmp102
                }
                tmp102 = runtime.resetDepth(tmp102, curDepth1);
                return [
                  idx$_$_,
                  tmp102
                ]
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp103 = Token.integer(integer, idx);
                if (tmp103 instanceof runtime.EffectSig.class) {
                  tmp103.contTrace.last.next = new Cont$func$number$1.class(392);
                  tmp103.contTrace.last = tmp103.contTrace.last.next;
                  return tmp103
                }
                tmp103 = runtime.resetDepth(tmp103, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp104 = runtime.safeCall(tmp103(instance$Ident$_LineLookupTable$_));
                if (tmp104 instanceof runtime.EffectSig.class) {
                  tmp104.contTrace.last.next = new Cont$func$number$1.class(393);
                  tmp104.contTrace.last = tmp104.contTrace.last.next;
                  return tmp104
                }
                tmp104 = runtime.resetDepth(tmp104, curDepth1);
                return [
                  idx$_,
                  tmp104
                ]
              }
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp105 = Token.integer(integer, idx);
              if (tmp105 instanceof runtime.EffectSig.class) {
                tmp105.contTrace.last.next = new Cont$func$number$1.class(394);
                tmp105.contTrace.last = tmp105.contTrace.last.next;
                return tmp105
              }
              tmp105 = runtime.resetDepth(tmp105, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp106 = runtime.safeCall(tmp105(instance$Ident$_LineLookupTable$_));
              if (tmp106 instanceof runtime.EffectSig.class) {
                tmp106.contTrace.last.next = new Cont$func$number$1.class(395);
                tmp106.contTrace.last = tmp106.contTrace.last.next;
                return tmp106
              }
              tmp106 = runtime.resetDepth(tmp106, curDepth1);
              return [
                idx$_,
                tmp106
              ]
            }
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp107 = Token.integer(integer, idx);
            if (tmp107 instanceof runtime.EffectSig.class) {
              tmp107.contTrace.last.next = new Cont$func$number$1.class(396);
              tmp107.contTrace.last = tmp107.contTrace.last.next;
              return tmp107
            }
            tmp107 = runtime.resetDepth(tmp107, curDepth1);
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp108 = runtime.safeCall(tmp107(instance$Ident$_LineLookupTable$_));
            if (tmp108 instanceof runtime.EffectSig.class) {
              tmp108.contTrace.last.next = new Cont$func$number$1.class(397);
              tmp108.contTrace.last = tmp108.contTrace.last.next;
              return tmp108
            }
            tmp108 = runtime.resetDepth(tmp108, curDepth1);
            return [
              idx$_,
              tmp108
            ]
          }
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp115 = new globalThis.Error("match error");
          if (tmp115 instanceof runtime.EffectSig.class) {
            tmp115.contTrace.last.next = new Cont$func$number$1.class(398);
            tmp115.contTrace.last = tmp115.contTrace.last.next;
            return tmp115
          }
          tmp115 = runtime.resetDepth(tmp115, curDepth1);
          throw tmp115;
        }
      }
    };
    scan = function scan(idx, acc) {
      let go, scrut, param0, other, quote, matchResult, scrut1, param01, ch, matchResult1, scrut2, first1, first0, idx$_, token, param02, param1, name, ch1, matchResult2, ch2, matchResult3, ch3, matchResult4, b, matchResult5, matchResult6, scrut3, idx$_1, selRes, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, selRes1, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, selRes2, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, curDepth1, tmp53, tmp54, tmp55, tmp56, stackDelayRes1, Cont$func$scan$1;
      Cont$func$scan$1 = function Cont$func$scan$(pc1) {
        return new Cont$func$scan$.class(pc1);
      };
      Cont$func$scan$1.class = class Cont$func$scan$ extends runtime.FunctionContFrame.class {
        constructor(pc) {
          let tmp57;
          tmp57 = super(null);
          this.pc = pc;
        }
        resume(value$) {
          if (this.pc === 563) {
            stackDelayRes1 = value$;
          } else if (this.pc === 580) {
            scrut = value$;
          } else if (this.pc === 627) {
            tmp56 = value$;
          } else if (this.pc === 582) {
            matchResult6 = value$;
          } else if (this.pc === 587) {
            matchResult5 = value$;
          } else if (this.pc === 591) {
            matchResult4 = value$;
          } else if (this.pc === 594) {
            matchResult3 = value$;
          } else if (this.pc === 596) {
            matchResult2 = value$;
          } else if (this.pc === 598) {
            matchResult = value$;
          } else if (this.pc === 622) {
            tmp46 = value$;
          } else if (this.pc === 623) {
            tmp47 = value$;
          } else if (this.pc === 624) {
            tmp48 = value$;
          } else if (this.pc === 625) {
            tmp51 = value$;
          } else if (this.pc === 626) {
            tmp52 = value$;
          } else if (this.pc === 599) {
            scrut1 = value$;
          } else if (this.pc === 617) {
            tmp39 = value$;
          } else if (this.pc === 618) {
            tmp40 = value$;
          } else if (this.pc === 619) {
            tmp41 = value$;
          } else if (this.pc === 620) {
            tmp44 = value$;
          } else if (this.pc === 621) {
            tmp45 = value$;
          } else if (this.pc === 600) {
            matchResult1 = value$;
          } else if (this.pc === 612) {
            tmp32 = value$;
          } else if (this.pc === 613) {
            tmp33 = value$;
          } else if (this.pc === 614) {
            tmp34 = value$;
          } else if (this.pc === 615) {
            tmp37 = value$;
          } else if (this.pc === 616) {
            tmp38 = value$;
          } else if (this.pc === 601) {
            scrut2 = value$;
          } else if (this.pc === 607) {
            tmp25 = value$;
          } else if (this.pc === 608) {
            tmp26 = value$;
          } else if (this.pc === 609) {
            tmp27 = value$;
          } else if (this.pc === 610) {
            tmp30 = value$;
          } else if (this.pc === 611) {
            tmp31 = value$;
          } else if (this.pc === 605) {
            tmp23 = value$;
          } else if (this.pc === 606) {
            tmp24 = value$;
          } else if (this.pc === 603) {
            tmp19 = value$;
          } else if (this.pc === 604) {
            tmp20 = value$;
          } else if (this.pc === 602) {
            tmp55 = value$;
          } else if (this.pc === 597) {
            tmp15 = value$;
          } else if (this.pc === 595) {
            tmp13 = value$;
          } else if (this.pc === 593) {
            tmp54 = value$;
          } else if (this.pc === 592) {
            tmp11 = value$;
          } else if (this.pc === 590) {
            tmp9 = value$;
          } else if (this.pc === 588) {
            tmp6 = value$;
          } else if (this.pc === 589) {
            tmp7 = value$;
          } else if (this.pc === 586) {
            tmp4 = value$;
          } else if (this.pc === 583) {
            scrut3 = value$;
          } else if (this.pc === 584) {
            tmp1 = value$;
          } else if (this.pc === 585) {
            tmp2 = value$;
          } else if (this.pc === 581) {
            tmp53 = value$;
          }
          contLoop: while (true) {
            if (this.pc === 563) {
              this.pc = 687;
              continue contLoop;
            } else if (this.pc === 687) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut = char1(idx);
              if (scrut instanceof runtime.EffectSig.class) {
                this.pc = 580;
                scrut.contTrace.last.next = this;
                scrut.contTrace.last = this;
                return scrut
              }
              this.pc = 580;
              continue contLoop;
            } else if (this.pc === 580) {
              scrut = runtime.resetDepth(scrut, curDepth1);
              if (scrut instanceof Option.None.class) {
                this.pc = 629;
                continue contLoop;
              } else if (scrut instanceof Option.Some.class) {
                param0 = scrut.value;
                selRes = Char.Whitespace;
                if (selRes === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp53 = new globalThis.Error("Access to required field 'Whitespace' yielded 'undefined'");
                  if (tmp53 instanceof runtime.EffectSig.class) {
                    this.pc = 581;
                    tmp53.contTrace.last.next = this;
                    tmp53.contTrace.last = this;
                    return tmp53
                  }
                  this.pc = 581;
                  continue contLoop;
                }
                this.pc = 686;
                continue contLoop;
                this.pc = 628;
                continue contLoop;
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp56 = new globalThis.Error("match error");
                if (tmp56 instanceof runtime.EffectSig.class) {
                  this.pc = 627;
                  tmp56.contTrace.last.next = this;
                  tmp56.contTrace.last = this;
                  return tmp56
                }
                this.pc = 627;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 628) {
              break contLoop;
            } else if (this.pc === 627) {
              tmp56 = runtime.resetDepth(tmp56, curDepth1);
              throw tmp56;
            } else if (this.pc === 686) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult6 = runtime.safeCall(selRes.unapply(param0));
              if (matchResult6 instanceof runtime.EffectSig.class) {
                this.pc = 582;
                matchResult6.contTrace.last.next = this;
                matchResult6.contTrace.last = this;
                return matchResult6
              }
              this.pc = 582;
              continue contLoop;
            } else if (this.pc === 582) {
              matchResult6 = runtime.resetDepth(matchResult6, curDepth1);
              if (matchResult6 instanceof runtime.MatchResult.class) {
                this.pc = 633;
                continue contLoop;
              } else {
                if (param0 === "\"") {
                  tmp3 = idx + 1;
                  this.pc = 635;
                  continue contLoop;
                } else {
                  this.pc = 685;
                  continue contLoop;
                }
                this.pc = 628;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 685) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult5 = runtime.safeCall(Lexer.Bracket.unapply(param0));
              if (matchResult5 instanceof runtime.EffectSig.class) {
                this.pc = 587;
                matchResult5.contTrace.last.next = this;
                matchResult5.contTrace.last = this;
                return matchResult5
              }
              this.pc = 587;
              continue contLoop;
            } else if (this.pc === 587) {
              matchResult5 = runtime.resetDepth(matchResult5, curDepth1);
              if (matchResult5 instanceof runtime.MatchResult.class) {
                b = param0;
                tmp5 = idx + 1;
                this.pc = 638;
                continue contLoop;
              } else {
                if (param0 === "/") {
                  tmp8 = idx + 1;
                  this.pc = 640;
                  continue contLoop;
                } else {
                  this.pc = 684;
                  continue contLoop;
                }
                this.pc = 628;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 684) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult4 = runtime.safeCall(Lexer.Operator.unapply(param0));
              if (matchResult4 instanceof runtime.EffectSig.class) {
                this.pc = 591;
                matchResult4.contTrace.last.next = this;
                matchResult4.contTrace.last = this;
                return matchResult4
              }
              this.pc = 591;
              continue contLoop;
            } else if (this.pc === 591) {
              matchResult4 = runtime.resetDepth(matchResult4, curDepth1);
              if (matchResult4 instanceof runtime.MatchResult.class) {
                ch3 = param0;
                tmp10 = idx + 1;
                this.pc = 642;
                continue contLoop;
              } else {
                selRes1 = Char.Digit;
                if (selRes1 === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp54 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
                  if (tmp54 instanceof runtime.EffectSig.class) {
                    this.pc = 593;
                    tmp54.contTrace.last.next = this;
                    tmp54.contTrace.last = this;
                    return tmp54
                  }
                  this.pc = 593;
                  continue contLoop;
                }
                this.pc = 683;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 683) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult3 = runtime.safeCall(selRes1.unapply(param0));
              if (matchResult3 instanceof runtime.EffectSig.class) {
                this.pc = 594;
                matchResult3.contTrace.last.next = this;
                matchResult3.contTrace.last = this;
                return matchResult3
              }
              this.pc = 594;
              continue contLoop;
            } else if (this.pc === 594) {
              matchResult3 = runtime.resetDepth(matchResult3, curDepth1);
              if (matchResult3 instanceof runtime.MatchResult.class) {
                ch2 = param0;
                tmp12 = idx + 1;
                this.pc = 644;
                continue contLoop;
              } else {
                this.pc = 682;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 682) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult2 = runtime.safeCall(Lexer.IdentifierStart.unapply(param0));
              if (matchResult2 instanceof runtime.EffectSig.class) {
                this.pc = 596;
                matchResult2.contTrace.last.next = this;
                matchResult2.contTrace.last = this;
                return matchResult2
              }
              this.pc = 596;
              continue contLoop;
            } else if (this.pc === 596) {
              matchResult2 = runtime.resetDepth(matchResult2, curDepth1);
              if (matchResult2 instanceof runtime.MatchResult.class) {
                ch1 = param0;
                tmp14 = idx + 1;
                this.pc = 646;
                continue contLoop;
              } else {
                this.pc = 681;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 681) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult = runtime.safeCall(Lexer.IdentifierQuote.unapply(param0));
              if (matchResult instanceof runtime.EffectSig.class) {
                this.pc = 598;
                matchResult.contTrace.last.next = this;
                matchResult.contTrace.last = this;
                return matchResult
              }
              this.pc = 598;
              continue contLoop;
            } else if (this.pc === 598) {
              matchResult = runtime.resetDepth(matchResult, curDepth1);
              if (matchResult instanceof runtime.MatchResult.class) {
                quote = param0;
                tmp16 = idx + 1;
                this.pc = 674;
                continue contLoop;
              } else {
                other = param0;
                this.pc = 680;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 678) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp48 = Predef.print(tmp47);
              if (tmp48 instanceof runtime.EffectSig.class) {
                this.pc = 624;
                tmp48.contTrace.last.next = this;
                tmp48.contTrace.last = this;
                return tmp48
              }
              this.pc = 624;
              continue contLoop;
            } else if (this.pc === 679) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp47 = Str.concat2(tmp46, "'");
              if (tmp47 instanceof runtime.EffectSig.class) {
                this.pc = 623;
                tmp47.contTrace.last.next = this;
                tmp47.contTrace.last = this;
                return tmp47
              }
              this.pc = 623;
              continue contLoop;
            } else if (this.pc === 680) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp46 = Str.concat2("Unrecognized character: '", other);
              if (tmp46 instanceof runtime.EffectSig.class) {
                this.pc = 622;
                tmp46.contTrace.last.next = this;
                tmp46.contTrace.last = this;
                return tmp46
              }
              this.pc = 622;
              continue contLoop;
            } else if (this.pc === 622) {
              tmp46 = runtime.resetDepth(tmp46, curDepth1);
              this.pc = 679;
              continue contLoop;
            } else if (this.pc === 623) {
              tmp47 = runtime.resetDepth(tmp47, curDepth1);
              this.pc = 678;
              continue contLoop;
            } else if (this.pc === 624) {
              tmp48 = runtime.resetDepth(tmp48, curDepth1);
              tmp49 = idx + 1;
              tmp50 = idx + 1;
              this.pc = 677;
              continue contLoop;
            } else if (this.pc === 675) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp49, tmp52)
            } else if (this.pc === 677) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp51 = Token.error(idx, tmp50);
              if (tmp51 instanceof runtime.EffectSig.class) {
                this.pc = 625;
                tmp51.contTrace.last.next = this;
                tmp51.contTrace.last = this;
                return tmp51
              }
              this.pc = 625;
              continue contLoop;
            } else if (this.pc === 625) {
              tmp51 = runtime.resetDepth(tmp51, curDepth1);
              this.pc = 676;
              continue contLoop;
            } else if (this.pc === 676) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp52 = runtime.safeCall(tmp51(instance$Ident$_LineLookupTable$_));
              if (tmp52 instanceof runtime.EffectSig.class) {
                this.pc = 626;
                tmp52.contTrace.last.next = this;
                tmp52.contTrace.last = this;
                return tmp52
              }
              this.pc = 626;
              continue contLoop;
            } else if (this.pc === 626) {
              tmp52 = runtime.resetDepth(tmp52, curDepth1);
              this.pc = 675;
              continue contLoop;
            } else if (this.pc === 674) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut1 = char1(tmp16);
              if (scrut1 instanceof runtime.EffectSig.class) {
                this.pc = 599;
                scrut1.contTrace.last.next = this;
                scrut1.contTrace.last = this;
                return scrut1
              }
              this.pc = 599;
              continue contLoop;
            } else if (this.pc === 599) {
              scrut1 = runtime.resetDepth(scrut1, curDepth1);
              if (scrut1 instanceof Option.Some.class) {
                param01 = scrut1.value;
                this.pc = 667;
                continue contLoop;
              } else {
                other = param0;
                this.pc = 673;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 671) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp41 = Predef.print(tmp40);
              if (tmp41 instanceof runtime.EffectSig.class) {
                this.pc = 619;
                tmp41.contTrace.last.next = this;
                tmp41.contTrace.last = this;
                return tmp41
              }
              this.pc = 619;
              continue contLoop;
            } else if (this.pc === 672) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp40 = Str.concat2(tmp39, "'");
              if (tmp40 instanceof runtime.EffectSig.class) {
                this.pc = 618;
                tmp40.contTrace.last.next = this;
                tmp40.contTrace.last = this;
                return tmp40
              }
              this.pc = 618;
              continue contLoop;
            } else if (this.pc === 673) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp39 = Str.concat2("Unrecognized character: '", other);
              if (tmp39 instanceof runtime.EffectSig.class) {
                this.pc = 617;
                tmp39.contTrace.last.next = this;
                tmp39.contTrace.last = this;
                return tmp39
              }
              this.pc = 617;
              continue contLoop;
            } else if (this.pc === 617) {
              tmp39 = runtime.resetDepth(tmp39, curDepth1);
              this.pc = 672;
              continue contLoop;
            } else if (this.pc === 618) {
              tmp40 = runtime.resetDepth(tmp40, curDepth1);
              this.pc = 671;
              continue contLoop;
            } else if (this.pc === 619) {
              tmp41 = runtime.resetDepth(tmp41, curDepth1);
              tmp42 = idx + 1;
              tmp43 = idx + 1;
              this.pc = 670;
              continue contLoop;
            } else if (this.pc === 668) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp42, tmp45)
            } else if (this.pc === 670) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp44 = Token.error(idx, tmp43);
              if (tmp44 instanceof runtime.EffectSig.class) {
                this.pc = 620;
                tmp44.contTrace.last.next = this;
                tmp44.contTrace.last = this;
                return tmp44
              }
              this.pc = 620;
              continue contLoop;
            } else if (this.pc === 620) {
              tmp44 = runtime.resetDepth(tmp44, curDepth1);
              this.pc = 669;
              continue contLoop;
            } else if (this.pc === 669) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp45 = runtime.safeCall(tmp44(instance$Ident$_LineLookupTable$_));
              if (tmp45 instanceof runtime.EffectSig.class) {
                this.pc = 621;
                tmp45.contTrace.last.next = this;
                tmp45.contTrace.last = this;
                return tmp45
              }
              this.pc = 621;
              continue contLoop;
            } else if (this.pc === 621) {
              tmp45 = runtime.resetDepth(tmp45, curDepth1);
              this.pc = 668;
              continue contLoop;
            } else if (this.pc === 667) {
              runtime.stackDepth = runtime.stackDepth + 1;
              matchResult1 = runtime.safeCall(Lexer.IdentifierStart.unapply(param01));
              if (matchResult1 instanceof runtime.EffectSig.class) {
                this.pc = 600;
                matchResult1.contTrace.last.next = this;
                matchResult1.contTrace.last = this;
                return matchResult1
              }
              this.pc = 600;
              continue contLoop;
            } else if (this.pc === 600) {
              matchResult1 = runtime.resetDepth(matchResult1, curDepth1);
              if (matchResult1 instanceof runtime.MatchResult.class) {
                ch = param01;
                tmp17 = idx + 2;
                tmp18 = quote + ch;
                this.pc = 660;
                continue contLoop;
              } else {
                other = param0;
                this.pc = 666;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 664) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp34 = Predef.print(tmp33);
              if (tmp34 instanceof runtime.EffectSig.class) {
                this.pc = 614;
                tmp34.contTrace.last.next = this;
                tmp34.contTrace.last = this;
                return tmp34
              }
              this.pc = 614;
              continue contLoop;
            } else if (this.pc === 665) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp33 = Str.concat2(tmp32, "'");
              if (tmp33 instanceof runtime.EffectSig.class) {
                this.pc = 613;
                tmp33.contTrace.last.next = this;
                tmp33.contTrace.last = this;
                return tmp33
              }
              this.pc = 613;
              continue contLoop;
            } else if (this.pc === 666) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp32 = Str.concat2("Unrecognized character: '", other);
              if (tmp32 instanceof runtime.EffectSig.class) {
                this.pc = 612;
                tmp32.contTrace.last.next = this;
                tmp32.contTrace.last = this;
                return tmp32
              }
              this.pc = 612;
              continue contLoop;
            } else if (this.pc === 612) {
              tmp32 = runtime.resetDepth(tmp32, curDepth1);
              this.pc = 665;
              continue contLoop;
            } else if (this.pc === 613) {
              tmp33 = runtime.resetDepth(tmp33, curDepth1);
              this.pc = 664;
              continue contLoop;
            } else if (this.pc === 614) {
              tmp34 = runtime.resetDepth(tmp34, curDepth1);
              tmp35 = idx + 1;
              tmp36 = idx + 1;
              this.pc = 663;
              continue contLoop;
            } else if (this.pc === 661) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp35, tmp38)
            } else if (this.pc === 663) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp37 = Token.error(idx, tmp36);
              if (tmp37 instanceof runtime.EffectSig.class) {
                this.pc = 615;
                tmp37.contTrace.last.next = this;
                tmp37.contTrace.last = this;
                return tmp37
              }
              this.pc = 615;
              continue contLoop;
            } else if (this.pc === 615) {
              tmp37 = runtime.resetDepth(tmp37, curDepth1);
              this.pc = 662;
              continue contLoop;
            } else if (this.pc === 662) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp38 = runtime.safeCall(tmp37(instance$Ident$_LineLookupTable$_));
              if (tmp38 instanceof runtime.EffectSig.class) {
                this.pc = 616;
                tmp38.contTrace.last.next = this;
                tmp38.contTrace.last = this;
                return tmp38
              }
              this.pc = 616;
              continue contLoop;
            } else if (this.pc === 616) {
              tmp38 = runtime.resetDepth(tmp38, curDepth1);
              this.pc = 661;
              continue contLoop;
            } else if (this.pc === 660) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut2 = identifier(tmp17, tmp18);
              if (scrut2 instanceof runtime.EffectSig.class) {
                this.pc = 601;
                scrut2.contTrace.last.next = this;
                scrut2.contTrace.last = this;
                return scrut2
              }
              this.pc = 601;
              continue contLoop;
            } else if (this.pc === 601) {
              scrut2 = runtime.resetDepth(scrut2, curDepth1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first0 = scrut2[0];
                first1 = scrut2[1];
                idx$_ = first0;
                token = first1;
                selRes2 = Token.Identifier;
                if (selRes2 === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp55 = new globalThis.Error("Access to required field 'Identifier' yielded 'undefined'");
                  if (tmp55 instanceof runtime.EffectSig.class) {
                    this.pc = 602;
                    tmp55.contTrace.last.next = this;
                    tmp55.contTrace.last = this;
                    return tmp55
                  }
                  this.pc = 602;
                  continue contLoop;
                }
                this.pc = 653;
                continue contLoop;
              } else {
                other = param0;
                this.pc = 659;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 657) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp27 = Predef.print(tmp26);
              if (tmp27 instanceof runtime.EffectSig.class) {
                this.pc = 609;
                tmp27.contTrace.last.next = this;
                tmp27.contTrace.last = this;
                return tmp27
              }
              this.pc = 609;
              continue contLoop;
            } else if (this.pc === 658) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp26 = Str.concat2(tmp25, "'");
              if (tmp26 instanceof runtime.EffectSig.class) {
                this.pc = 608;
                tmp26.contTrace.last.next = this;
                tmp26.contTrace.last = this;
                return tmp26
              }
              this.pc = 608;
              continue contLoop;
            } else if (this.pc === 659) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp25 = Str.concat2("Unrecognized character: '", other);
              if (tmp25 instanceof runtime.EffectSig.class) {
                this.pc = 607;
                tmp25.contTrace.last.next = this;
                tmp25.contTrace.last = this;
                return tmp25
              }
              this.pc = 607;
              continue contLoop;
            } else if (this.pc === 607) {
              tmp25 = runtime.resetDepth(tmp25, curDepth1);
              this.pc = 658;
              continue contLoop;
            } else if (this.pc === 608) {
              tmp26 = runtime.resetDepth(tmp26, curDepth1);
              this.pc = 657;
              continue contLoop;
            } else if (this.pc === 609) {
              tmp27 = runtime.resetDepth(tmp27, curDepth1);
              tmp28 = idx + 1;
              tmp29 = idx + 1;
              this.pc = 656;
              continue contLoop;
            } else if (this.pc === 654) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp28, tmp31)
            } else if (this.pc === 656) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp30 = Token.error(idx, tmp29);
              if (tmp30 instanceof runtime.EffectSig.class) {
                this.pc = 610;
                tmp30.contTrace.last.next = this;
                tmp30.contTrace.last = this;
                return tmp30
              }
              this.pc = 610;
              continue contLoop;
            } else if (this.pc === 610) {
              tmp30 = runtime.resetDepth(tmp30, curDepth1);
              this.pc = 655;
              continue contLoop;
            } else if (this.pc === 655) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp31 = runtime.safeCall(tmp30(instance$Ident$_LineLookupTable$_));
              if (tmp31 instanceof runtime.EffectSig.class) {
                this.pc = 611;
                tmp31.contTrace.last.next = this;
                tmp31.contTrace.last = this;
                return tmp31
              }
              this.pc = 611;
              continue contLoop;
            } else if (this.pc === 611) {
              tmp31 = runtime.resetDepth(tmp31, curDepth1);
              this.pc = 654;
              continue contLoop;
            } else if (this.pc === 653) {
              if (token instanceof selRes2.class) {
                param02 = token.name;
                param1 = token.symbolic;
                name = param02;
                this.pc = 649;
                continue contLoop;
              } else {
                tmp21 = idx + 1;
                tmp22 = idx + 1;
                this.pc = 652;
                continue contLoop;
              }
              this.pc = 628;
              continue contLoop;
            } else if (this.pc === 650) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp21, tmp24)
            } else if (this.pc === 652) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp23 = Token.error(idx, tmp22);
              if (tmp23 instanceof runtime.EffectSig.class) {
                this.pc = 605;
                tmp23.contTrace.last.next = this;
                tmp23.contTrace.last = this;
                return tmp23
              }
              this.pc = 605;
              continue contLoop;
            } else if (this.pc === 605) {
              tmp23 = runtime.resetDepth(tmp23, curDepth1);
              this.pc = 651;
              continue contLoop;
            } else if (this.pc === 651) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp24 = runtime.safeCall(tmp23(instance$Ident$_LineLookupTable$_));
              if (tmp24 instanceof runtime.EffectSig.class) {
                this.pc = 606;
                tmp24.contTrace.last.next = this;
                tmp24.contTrace.last = this;
                return tmp24
              }
              this.pc = 606;
              continue contLoop;
            } else if (this.pc === 606) {
              tmp24 = runtime.resetDepth(tmp24, curDepth1);
              this.pc = 650;
              continue contLoop;
            } else if (this.pc === 647) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(idx$_, tmp20)
            } else if (this.pc === 649) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp19 = Token.identifier(name, idx);
              if (tmp19 instanceof runtime.EffectSig.class) {
                this.pc = 603;
                tmp19.contTrace.last.next = this;
                tmp19.contTrace.last = this;
                return tmp19
              }
              this.pc = 603;
              continue contLoop;
            } else if (this.pc === 603) {
              tmp19 = runtime.resetDepth(tmp19, curDepth1);
              this.pc = 648;
              continue contLoop;
            } else if (this.pc === 648) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp20 = runtime.safeCall(tmp19(instance$Ident$_LineLookupTable$_));
              if (tmp20 instanceof runtime.EffectSig.class) {
                this.pc = 604;
                tmp20.contTrace.last.next = this;
                tmp20.contTrace.last = this;
                return tmp20
              }
              this.pc = 604;
              continue contLoop;
            } else if (this.pc === 604) {
              tmp20 = runtime.resetDepth(tmp20, curDepth1);
              this.pc = 647;
              continue contLoop;
            } else if (this.pc === 602) {
              tmp55 = runtime.resetDepth(tmp55, curDepth1);
              throw tmp55;
            } else if (this.pc === 645) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(...tmp15)
            } else if (this.pc === 646) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp15 = identifier(tmp14, ch1);
              if (tmp15 instanceof runtime.EffectSig.class) {
                this.pc = 597;
                tmp15.contTrace.last.next = this;
                tmp15.contTrace.last = this;
                return tmp15
              }
              this.pc = 597;
              continue contLoop;
            } else if (this.pc === 597) {
              tmp15 = runtime.resetDepth(tmp15, curDepth1);
              this.pc = 645;
              continue contLoop;
            } else if (this.pc === 643) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(...tmp13)
            } else if (this.pc === 644) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp13 = number(tmp12, ch2);
              if (tmp13 instanceof runtime.EffectSig.class) {
                this.pc = 595;
                tmp13.contTrace.last.next = this;
                tmp13.contTrace.last = this;
                return tmp13
              }
              this.pc = 595;
              continue contLoop;
            } else if (this.pc === 595) {
              tmp13 = runtime.resetDepth(tmp13, curDepth1);
              this.pc = 643;
              continue contLoop;
            } else if (this.pc === 593) {
              tmp54 = runtime.resetDepth(tmp54, curDepth1);
              throw tmp54;
            } else if (this.pc === 641) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(...tmp11)
            } else if (this.pc === 642) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp11 = operator(tmp10, ch3);
              if (tmp11 instanceof runtime.EffectSig.class) {
                this.pc = 592;
                tmp11.contTrace.last.next = this;
                tmp11.contTrace.last = this;
                return tmp11
              }
              this.pc = 592;
              continue contLoop;
            } else if (this.pc === 592) {
              tmp11 = runtime.resetDepth(tmp11, curDepth1);
              this.pc = 641;
              continue contLoop;
            } else if (this.pc === 639) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(...tmp9)
            } else if (this.pc === 640) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp9 = comment(tmp8);
              if (tmp9 instanceof runtime.EffectSig.class) {
                this.pc = 590;
                tmp9.contTrace.last.next = this;
                tmp9.contTrace.last = this;
                return tmp9
              }
              this.pc = 590;
              continue contLoop;
            } else if (this.pc === 590) {
              tmp9 = runtime.resetDepth(tmp9, curDepth1);
              this.pc = 639;
              continue contLoop;
            } else if (this.pc === 636) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp5, tmp7)
            } else if (this.pc === 638) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.symbol(b, idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                this.pc = 588;
                tmp6.contTrace.last.next = this;
                tmp6.contTrace.last = this;
                return tmp6
              }
              this.pc = 588;
              continue contLoop;
            } else if (this.pc === 588) {
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              this.pc = 637;
              continue contLoop;
            } else if (this.pc === 637) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp7 instanceof runtime.EffectSig.class) {
                this.pc = 589;
                tmp7.contTrace.last.next = this;
                tmp7.contTrace.last = this;
                return tmp7
              }
              this.pc = 589;
              continue contLoop;
            } else if (this.pc === 589) {
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              this.pc = 636;
              continue contLoop;
            } else if (this.pc === 634) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(...tmp4)
            } else if (this.pc === 635) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp4 = string(tmp3);
              if (tmp4 instanceof runtime.EffectSig.class) {
                this.pc = 586;
                tmp4.contTrace.last.next = this;
                tmp4.contTrace.last = this;
                return tmp4
              }
              this.pc = 586;
              continue contLoop;
            } else if (this.pc === 586) {
              tmp4 = runtime.resetDepth(tmp4, curDepth1);
              this.pc = 634;
              continue contLoop;
            } else if (this.pc === 633) {
              runtime.stackDepth = runtime.stackDepth + 1;
              scrut3 = whitespace(idx);
              if (scrut3 instanceof runtime.EffectSig.class) {
                this.pc = 583;
                scrut3.contTrace.last.next = this;
                scrut3.contTrace.last = this;
                return scrut3
              }
              this.pc = 583;
              continue contLoop;
            } else if (this.pc === 583) {
              scrut3 = runtime.resetDepth(scrut3, curDepth1);
              idx$_1 = scrut3;
              this.pc = 632;
              continue contLoop;
            } else if (this.pc === 630) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(idx$_1, tmp2)
            } else if (this.pc === 632) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp1 = Token.space(idx, idx$_1);
              if (tmp1 instanceof runtime.EffectSig.class) {
                this.pc = 584;
                tmp1.contTrace.last.next = this;
                tmp1.contTrace.last = this;
                return tmp1
              }
              this.pc = 584;
              continue contLoop;
            } else if (this.pc === 584) {
              tmp1 = runtime.resetDepth(tmp1, curDepth1);
              this.pc = 631;
              continue contLoop;
            } else if (this.pc === 631) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp2 = runtime.safeCall(tmp1(instance$Ident$_LineLookupTable$_));
              if (tmp2 instanceof runtime.EffectSig.class) {
                this.pc = 585;
                tmp2.contTrace.last.next = this;
                tmp2.contTrace.last = this;
                return tmp2
              }
              this.pc = 585;
              continue contLoop;
            } else if (this.pc === 585) {
              tmp2 = runtime.resetDepth(tmp2, curDepth1);
              this.pc = 630;
              continue contLoop;
            } else if (this.pc === 581) {
              tmp53 = runtime.resetDepth(tmp53, curDepth1);
              throw tmp53;
            } else if (this.pc === 629) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return Stack.reverse(acc)
            }
            break;
          }
        }
        toString() { return "Cont$func$scan$(" + runtime.render(this.pc) + ")"; }
      };
      go = function go(idx1, tok) {
        let scrut4, selRes3, discarded, selRes4, selRes5, tmp57, tmp58, tmp59, curDepth2, tmp60, tmp61, stackDelayRes2, Cont$func$go$1;
        Cont$func$go$1 = function Cont$func$go$(pc1) {
          return new Cont$func$go$.class(pc1);
        };
        Cont$func$go$1.class = class Cont$func$go$ extends runtime.FunctionContFrame.class {
          constructor(pc) {
            let tmp62;
            tmp62 = super(null);
            this.pc = pc;
          }
          resume(value$) {
            if (this.pc === 564) {
              stackDelayRes2 = value$;
            } else if (this.pc === 569) {
              tmp58 = value$;
            } else if (this.pc === 568) {
              tmp57 = value$;
            } else if (this.pc === 567) {
              tmp61 = value$;
            } else if (this.pc === 566) {
              tmp60 = value$;
            } else if (this.pc === 565) {
              tmp59 = value$;
            }
            contLoop: while (true) {
              if (this.pc === 564) {
                selRes3 = options.noWhitespace;
                discarded = options.noWhitespace$__checkNotMethod;
                if (selRes3 === undefined) {
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp59 = new globalThis.Error("Access to required field 'noWhitespace' yielded 'undefined'");
                  if (tmp59 instanceof runtime.EffectSig.class) {
                    this.pc = 565;
                    tmp59.contTrace.last.next = this;
                    tmp59.contTrace.last = this;
                    return tmp59
                  }
                  this.pc = 565;
                  continue contLoop;
                }
                this.pc = 579;
                continue contLoop;
              } else if (this.pc === 579) {
                scrut4 = selRes3;
                if (scrut4 === true) {
                  selRes4 = Token.Comment;
                  if (selRes4 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp60 = new globalThis.Error("Access to required field 'Comment' yielded 'undefined'");
                    if (tmp60 instanceof runtime.EffectSig.class) {
                      this.pc = 566;
                      tmp60.contTrace.last.next = this;
                      tmp60.contTrace.last = this;
                      return tmp60
                    }
                    this.pc = 566;
                    continue contLoop;
                  }
                  this.pc = 576;
                  continue contLoop;
                } else {
                  this.pc = 578;
                  continue contLoop;
                }
                this.pc = 570;
                continue contLoop;
              } else if (this.pc === 570) {
                break contLoop;
              } else if (this.pc === 577) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return scan(idx1, tmp58)
              } else if (this.pc === 578) {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp58 = Stack.Cons(tok, acc);
                if (tmp58 instanceof runtime.EffectSig.class) {
                  this.pc = 569;
                  tmp58.contTrace.last.next = this;
                  tmp58.contTrace.last = this;
                  return tmp58
                }
                this.pc = 569;
                continue contLoop;
              } else if (this.pc === 569) {
                tmp58 = runtime.resetDepth(tmp58, curDepth2);
                this.pc = 577;
                continue contLoop;
              } else if (this.pc === 576) {
                if (tok instanceof selRes4.class) {
                  this.pc = 571;
                  continue contLoop;
                } else {
                  selRes5 = Token.Space;
                  if (selRes5 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp61 = new globalThis.Error("Access to required field 'Space' yielded 'undefined'");
                    if (tmp61 instanceof runtime.EffectSig.class) {
                      this.pc = 567;
                      tmp61.contTrace.last.next = this;
                      tmp61.contTrace.last = this;
                      return tmp61
                    }
                    this.pc = 567;
                    continue contLoop;
                  }
                  this.pc = 575;
                  continue contLoop;
                }
                this.pc = 570;
                continue contLoop;
              } else if (this.pc === 575) {
                if (tok instanceof selRes5.class) {
                  this.pc = 572;
                  continue contLoop;
                } else {
                  this.pc = 574;
                  continue contLoop;
                }
                this.pc = 570;
                continue contLoop;
              } else if (this.pc === 573) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return scan(idx1, tmp57)
              } else if (this.pc === 574) {
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp57 = Stack.Cons(tok, acc);
                if (tmp57 instanceof runtime.EffectSig.class) {
                  this.pc = 568;
                  tmp57.contTrace.last.next = this;
                  tmp57.contTrace.last = this;
                  return tmp57
                }
                this.pc = 568;
                continue contLoop;
              } else if (this.pc === 568) {
                tmp57 = runtime.resetDepth(tmp57, curDepth2);
                this.pc = 573;
                continue contLoop;
              } else if (this.pc === 572) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return scan(idx1, acc)
              } else if (this.pc === 567) {
                tmp61 = runtime.resetDepth(tmp61, curDepth2);
                throw tmp61;
              } else if (this.pc === 571) {
                runtime.stackDepth = runtime.stackDepth + 1;
                return scan(idx1, acc)
              } else if (this.pc === 566) {
                tmp60 = runtime.resetDepth(tmp60, curDepth2);
                throw tmp60;
              } else if (this.pc === 565) {
                tmp59 = runtime.resetDepth(tmp59, curDepth2);
                throw tmp59;
              }
              break;
            }
          }
          toString() { return "Cont$func$go$(" + runtime.render(this.pc) + ")"; }
        };
        curDepth2 = runtime.stackDepth;
        stackDelayRes2 = runtime.checkDepth();
        if (stackDelayRes2 instanceof runtime.EffectSig.class) {
          stackDelayRes2.contTrace.last.next = new Cont$func$go$1.class(564);
          stackDelayRes2.contTrace.last = stackDelayRes2.contTrace.last.next;
          return stackDelayRes2
        }
        selRes3 = options.noWhitespace;
        discarded = options.noWhitespace$__checkNotMethod;
        if (selRes3 === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp59 = new globalThis.Error("Access to required field 'noWhitespace' yielded 'undefined'");
          if (tmp59 instanceof runtime.EffectSig.class) {
            tmp59.contTrace.last.next = new Cont$func$go$1.class(565);
            tmp59.contTrace.last = tmp59.contTrace.last.next;
            return tmp59
          }
          tmp59 = runtime.resetDepth(tmp59, curDepth2);
          throw tmp59;
        }
        scrut4 = selRes3;
        if (scrut4 === true) {
          selRes4 = Token.Comment;
          if (selRes4 === undefined) {
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp60 = new globalThis.Error("Access to required field 'Comment' yielded 'undefined'");
            if (tmp60 instanceof runtime.EffectSig.class) {
              tmp60.contTrace.last.next = new Cont$func$go$1.class(566);
              tmp60.contTrace.last = tmp60.contTrace.last.next;
              return tmp60
            }
            tmp60 = runtime.resetDepth(tmp60, curDepth2);
            throw tmp60;
          }
          if (tok instanceof selRes4.class) {
            runtime.stackDepth = runtime.stackDepth + 1;
            return scan(idx1, acc)
          } else {
            selRes5 = Token.Space;
            if (selRes5 === undefined) {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp61 = new globalThis.Error("Access to required field 'Space' yielded 'undefined'");
              if (tmp61 instanceof runtime.EffectSig.class) {
                tmp61.contTrace.last.next = new Cont$func$go$1.class(567);
                tmp61.contTrace.last = tmp61.contTrace.last.next;
                return tmp61
              }
              tmp61 = runtime.resetDepth(tmp61, curDepth2);
              throw tmp61;
            }
            if (tok instanceof selRes5.class) {
              runtime.stackDepth = runtime.stackDepth + 1;
              return scan(idx1, acc)
            } else {
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp57 = Stack.Cons(tok, acc);
              if (tmp57 instanceof runtime.EffectSig.class) {
                tmp57.contTrace.last.next = new Cont$func$go$1.class(568);
                tmp57.contTrace.last = tmp57.contTrace.last.next;
                return tmp57
              }
              tmp57 = runtime.resetDepth(tmp57, curDepth2);
              runtime.stackDepth = runtime.stackDepth + 1;
              return scan(idx1, tmp57)
            }
          }
        } else {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp58 = Stack.Cons(tok, acc);
          if (tmp58 instanceof runtime.EffectSig.class) {
            tmp58.contTrace.last.next = new Cont$func$go$1.class(569);
            tmp58.contTrace.last = tmp58.contTrace.last.next;
            return tmp58
          }
          tmp58 = runtime.resetDepth(tmp58, curDepth2);
          runtime.stackDepth = runtime.stackDepth + 1;
          return scan(idx1, tmp58)
        }
      };
      curDepth1 = runtime.stackDepth;
      stackDelayRes1 = runtime.checkDepth();
      if (stackDelayRes1 instanceof runtime.EffectSig.class) {
        stackDelayRes1.contTrace.last.next = new Cont$func$scan$1.class(563);
        stackDelayRes1.contTrace.last = stackDelayRes1.contTrace.last.next;
        return stackDelayRes1
      }
      runtime.stackDepth = runtime.stackDepth + 1;
      scrut = char1(idx);
      if (scrut instanceof runtime.EffectSig.class) {
        scrut.contTrace.last.next = new Cont$func$scan$1.class(580);
        scrut.contTrace.last = scrut.contTrace.last.next;
        return scrut
      }
      scrut = runtime.resetDepth(scrut, curDepth1);
      if (scrut instanceof Option.None.class) {
        runtime.stackDepth = runtime.stackDepth + 1;
        return Stack.reverse(acc)
      } else if (scrut instanceof Option.Some.class) {
        param0 = scrut.value;
        selRes = Char.Whitespace;
        if (selRes === undefined) {
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp53 = new globalThis.Error("Access to required field 'Whitespace' yielded 'undefined'");
          if (tmp53 instanceof runtime.EffectSig.class) {
            tmp53.contTrace.last.next = new Cont$func$scan$1.class(581);
            tmp53.contTrace.last = tmp53.contTrace.last.next;
            return tmp53
          }
          tmp53 = runtime.resetDepth(tmp53, curDepth1);
          throw tmp53;
        }
        runtime.stackDepth = runtime.stackDepth + 1;
        matchResult6 = runtime.safeCall(selRes.unapply(param0));
        if (matchResult6 instanceof runtime.EffectSig.class) {
          matchResult6.contTrace.last.next = new Cont$func$scan$1.class(582);
          matchResult6.contTrace.last = matchResult6.contTrace.last.next;
          return matchResult6
        }
        matchResult6 = runtime.resetDepth(matchResult6, curDepth1);
        if (matchResult6 instanceof runtime.MatchResult.class) {
          runtime.stackDepth = runtime.stackDepth + 1;
          scrut3 = whitespace(idx);
          if (scrut3 instanceof runtime.EffectSig.class) {
            scrut3.contTrace.last.next = new Cont$func$scan$1.class(583);
            scrut3.contTrace.last = scrut3.contTrace.last.next;
            return scrut3
          }
          scrut3 = runtime.resetDepth(scrut3, curDepth1);
          idx$_1 = scrut3;
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp1 = Token.space(idx, idx$_1);
          if (tmp1 instanceof runtime.EffectSig.class) {
            tmp1.contTrace.last.next = new Cont$func$scan$1.class(584);
            tmp1.contTrace.last = tmp1.contTrace.last.next;
            return tmp1
          }
          tmp1 = runtime.resetDepth(tmp1, curDepth1);
          runtime.stackDepth = runtime.stackDepth + 1;
          tmp2 = runtime.safeCall(tmp1(instance$Ident$_LineLookupTable$_));
          if (tmp2 instanceof runtime.EffectSig.class) {
            tmp2.contTrace.last.next = new Cont$func$scan$1.class(585);
            tmp2.contTrace.last = tmp2.contTrace.last.next;
            return tmp2
          }
          tmp2 = runtime.resetDepth(tmp2, curDepth1);
          runtime.stackDepth = runtime.stackDepth + 1;
          return go(idx$_1, tmp2)
        } else {
          if (param0 === "\"") {
            tmp3 = idx + 1;
            runtime.stackDepth = runtime.stackDepth + 1;
            tmp4 = string(tmp3);
            if (tmp4 instanceof runtime.EffectSig.class) {
              tmp4.contTrace.last.next = new Cont$func$scan$1.class(586);
              tmp4.contTrace.last = tmp4.contTrace.last.next;
              return tmp4
            }
            tmp4 = runtime.resetDepth(tmp4, curDepth1);
            runtime.stackDepth = runtime.stackDepth + 1;
            return go(...tmp4)
          } else {
            runtime.stackDepth = runtime.stackDepth + 1;
            matchResult5 = runtime.safeCall(Lexer.Bracket.unapply(param0));
            if (matchResult5 instanceof runtime.EffectSig.class) {
              matchResult5.contTrace.last.next = new Cont$func$scan$1.class(587);
              matchResult5.contTrace.last = matchResult5.contTrace.last.next;
              return matchResult5
            }
            matchResult5 = runtime.resetDepth(matchResult5, curDepth1);
            if (matchResult5 instanceof runtime.MatchResult.class) {
              b = param0;
              tmp5 = idx + 1;
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp6 = Token.symbol(b, idx);
              if (tmp6 instanceof runtime.EffectSig.class) {
                tmp6.contTrace.last.next = new Cont$func$scan$1.class(588);
                tmp6.contTrace.last = tmp6.contTrace.last.next;
                return tmp6
              }
              tmp6 = runtime.resetDepth(tmp6, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              tmp7 = runtime.safeCall(tmp6(instance$Ident$_LineLookupTable$_));
              if (tmp7 instanceof runtime.EffectSig.class) {
                tmp7.contTrace.last.next = new Cont$func$scan$1.class(589);
                tmp7.contTrace.last = tmp7.contTrace.last.next;
                return tmp7
              }
              tmp7 = runtime.resetDepth(tmp7, curDepth1);
              runtime.stackDepth = runtime.stackDepth + 1;
              return go(tmp5, tmp7)
            } else {
              if (param0 === "/") {
                tmp8 = idx + 1;
                runtime.stackDepth = runtime.stackDepth + 1;
                tmp9 = comment(tmp8);
                if (tmp9 instanceof runtime.EffectSig.class) {
                  tmp9.contTrace.last.next = new Cont$func$scan$1.class(590);
                  tmp9.contTrace.last = tmp9.contTrace.last.next;
                  return tmp9
                }
                tmp9 = runtime.resetDepth(tmp9, curDepth1);
                runtime.stackDepth = runtime.stackDepth + 1;
                return go(...tmp9)
              } else {
                runtime.stackDepth = runtime.stackDepth + 1;
                matchResult4 = runtime.safeCall(Lexer.Operator.unapply(param0));
                if (matchResult4 instanceof runtime.EffectSig.class) {
                  matchResult4.contTrace.last.next = new Cont$func$scan$1.class(591);
                  matchResult4.contTrace.last = matchResult4.contTrace.last.next;
                  return matchResult4
                }
                matchResult4 = runtime.resetDepth(matchResult4, curDepth1);
                if (matchResult4 instanceof runtime.MatchResult.class) {
                  ch3 = param0;
                  tmp10 = idx + 1;
                  runtime.stackDepth = runtime.stackDepth + 1;
                  tmp11 = operator(tmp10, ch3);
                  if (tmp11 instanceof runtime.EffectSig.class) {
                    tmp11.contTrace.last.next = new Cont$func$scan$1.class(592);
                    tmp11.contTrace.last = tmp11.contTrace.last.next;
                    return tmp11
                  }
                  tmp11 = runtime.resetDepth(tmp11, curDepth1);
                  runtime.stackDepth = runtime.stackDepth + 1;
                  return go(...tmp11)
                } else {
                  selRes1 = Char.Digit;
                  if (selRes1 === undefined) {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp54 = new globalThis.Error("Access to required field 'Digit' yielded 'undefined'");
                    if (tmp54 instanceof runtime.EffectSig.class) {
                      tmp54.contTrace.last.next = new Cont$func$scan$1.class(593);
                      tmp54.contTrace.last = tmp54.contTrace.last.next;
                      return tmp54
                    }
                    tmp54 = runtime.resetDepth(tmp54, curDepth1);
                    throw tmp54;
                  }
                  runtime.stackDepth = runtime.stackDepth + 1;
                  matchResult3 = runtime.safeCall(selRes1.unapply(param0));
                  if (matchResult3 instanceof runtime.EffectSig.class) {
                    matchResult3.contTrace.last.next = new Cont$func$scan$1.class(594);
                    matchResult3.contTrace.last = matchResult3.contTrace.last.next;
                    return matchResult3
                  }
                  matchResult3 = runtime.resetDepth(matchResult3, curDepth1);
                  if (matchResult3 instanceof runtime.MatchResult.class) {
                    ch2 = param0;
                    tmp12 = idx + 1;
                    runtime.stackDepth = runtime.stackDepth + 1;
                    tmp13 = number(tmp12, ch2);
                    if (tmp13 instanceof runtime.EffectSig.class) {
                      tmp13.contTrace.last.next = new Cont$func$scan$1.class(595);
                      tmp13.contTrace.last = tmp13.contTrace.last.next;
                      return tmp13
                    }
                    tmp13 = runtime.resetDepth(tmp13, curDepth1);
                    runtime.stackDepth = runtime.stackDepth + 1;
                    return go(...tmp13)
                  } else {
                    runtime.stackDepth = runtime.stackDepth + 1;
                    matchResult2 = runtime.safeCall(Lexer.IdentifierStart.unapply(param0));
                    if (matchResult2 instanceof runtime.EffectSig.class) {
                      matchResult2.contTrace.last.next = new Cont$func$scan$1.class(596);
                      matchResult2.contTrace.last = matchResult2.contTrace.last.next;
                      return matchResult2
                    }
                    matchResult2 = runtime.resetDepth(matchResult2, curDepth1);
                    if (matchResult2 instanceof runtime.MatchResult.class) {
                      ch1 = param0;
                      tmp14 = idx + 1;
                      runtime.stackDepth = runtime.stackDepth + 1;
                      tmp15 = identifier(tmp14, ch1);
                      if (tmp15 instanceof runtime.EffectSig.class) {
                        tmp15.contTrace.last.next = new Cont$func$scan$1.class(597);
                        tmp15.contTrace.last = tmp15.contTrace.last.next;
                        return tmp15
                      }
                      tmp15 = runtime.resetDepth(tmp15, curDepth1);
                      runtime.stackDepth = runtime.stackDepth + 1;
                      return go(...tmp15)
                    } else {
                      runtime.stackDepth = runtime.stackDepth + 1;
                      matchResult = runtime.safeCall(Lexer.IdentifierQuote.unapply(param0));
                      if (matchResult instanceof runtime.EffectSig.class) {
                        matchResult.contTrace.last.next = new Cont$func$scan$1.class(598);
                        matchResult.contTrace.last = matchResult.contTrace.last.next;
                        return matchResult
                      }
                      matchResult = runtime.resetDepth(matchResult, curDepth1);
                      if (matchResult instanceof runtime.MatchResult.class) {
                        quote = param0;
                        tmp16 = idx + 1;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        scrut1 = char1(tmp16);
                        if (scrut1 instanceof runtime.EffectSig.class) {
                          scrut1.contTrace.last.next = new Cont$func$scan$1.class(599);
                          scrut1.contTrace.last = scrut1.contTrace.last.next;
                          return scrut1
                        }
                        scrut1 = runtime.resetDepth(scrut1, curDepth1);
                        if (scrut1 instanceof Option.Some.class) {
                          param01 = scrut1.value;
                          runtime.stackDepth = runtime.stackDepth + 1;
                          matchResult1 = runtime.safeCall(Lexer.IdentifierStart.unapply(param01));
                          if (matchResult1 instanceof runtime.EffectSig.class) {
                            matchResult1.contTrace.last.next = new Cont$func$scan$1.class(600);
                            matchResult1.contTrace.last = matchResult1.contTrace.last.next;
                            return matchResult1
                          }
                          matchResult1 = runtime.resetDepth(matchResult1, curDepth1);
                          if (matchResult1 instanceof runtime.MatchResult.class) {
                            ch = param01;
                            tmp17 = idx + 2;
                            tmp18 = quote + ch;
                            runtime.stackDepth = runtime.stackDepth + 1;
                            scrut2 = identifier(tmp17, tmp18);
                            if (scrut2 instanceof runtime.EffectSig.class) {
                              scrut2.contTrace.last.next = new Cont$func$scan$1.class(601);
                              scrut2.contTrace.last = scrut2.contTrace.last.next;
                              return scrut2
                            }
                            scrut2 = runtime.resetDepth(scrut2, curDepth1);
                            if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                              first0 = scrut2[0];
                              first1 = scrut2[1];
                              idx$_ = first0;
                              token = first1;
                              selRes2 = Token.Identifier;
                              if (selRes2 === undefined) {
                                runtime.stackDepth = runtime.stackDepth + 1;
                                tmp55 = new globalThis.Error("Access to required field 'Identifier' yielded 'undefined'");
                                if (tmp55 instanceof runtime.EffectSig.class) {
                                  tmp55.contTrace.last.next = new Cont$func$scan$1.class(602);
                                  tmp55.contTrace.last = tmp55.contTrace.last.next;
                                  return tmp55
                                }
                                tmp55 = runtime.resetDepth(tmp55, curDepth1);
                                throw tmp55;
                              }
                              if (token instanceof selRes2.class) {
                                param02 = token.name;
                                param1 = token.symbolic;
                                name = param02;
                                runtime.stackDepth = runtime.stackDepth + 1;
                                tmp19 = Token.identifier(name, idx);
                                if (tmp19 instanceof runtime.EffectSig.class) {
                                  tmp19.contTrace.last.next = new Cont$func$scan$1.class(603);
                                  tmp19.contTrace.last = tmp19.contTrace.last.next;
                                  return tmp19
                                }
                                tmp19 = runtime.resetDepth(tmp19, curDepth1);
                                runtime.stackDepth = runtime.stackDepth + 1;
                                tmp20 = runtime.safeCall(tmp19(instance$Ident$_LineLookupTable$_));
                                if (tmp20 instanceof runtime.EffectSig.class) {
                                  tmp20.contTrace.last.next = new Cont$func$scan$1.class(604);
                                  tmp20.contTrace.last = tmp20.contTrace.last.next;
                                  return tmp20
                                }
                                tmp20 = runtime.resetDepth(tmp20, curDepth1);
                                runtime.stackDepth = runtime.stackDepth + 1;
                                return go(idx$_, tmp20)
                              } else {
                                tmp21 = idx + 1;
                                tmp22 = idx + 1;
                                runtime.stackDepth = runtime.stackDepth + 1;
                                tmp23 = Token.error(idx, tmp22);
                                if (tmp23 instanceof runtime.EffectSig.class) {
                                  tmp23.contTrace.last.next = new Cont$func$scan$1.class(605);
                                  tmp23.contTrace.last = tmp23.contTrace.last.next;
                                  return tmp23
                                }
                                tmp23 = runtime.resetDepth(tmp23, curDepth1);
                                runtime.stackDepth = runtime.stackDepth + 1;
                                tmp24 = runtime.safeCall(tmp23(instance$Ident$_LineLookupTable$_));
                                if (tmp24 instanceof runtime.EffectSig.class) {
                                  tmp24.contTrace.last.next = new Cont$func$scan$1.class(606);
                                  tmp24.contTrace.last = tmp24.contTrace.last.next;
                                  return tmp24
                                }
                                tmp24 = runtime.resetDepth(tmp24, curDepth1);
                                runtime.stackDepth = runtime.stackDepth + 1;
                                return go(tmp21, tmp24)
                              }
                            } else {
                              other = param0;
                              runtime.stackDepth = runtime.stackDepth + 1;
                              tmp25 = Str.concat2("Unrecognized character: '", other);
                              if (tmp25 instanceof runtime.EffectSig.class) {
                                tmp25.contTrace.last.next = new Cont$func$scan$1.class(607);
                                tmp25.contTrace.last = tmp25.contTrace.last.next;
                                return tmp25
                              }
                              tmp25 = runtime.resetDepth(tmp25, curDepth1);
                              runtime.stackDepth = runtime.stackDepth + 1;
                              tmp26 = Str.concat2(tmp25, "'");
                              if (tmp26 instanceof runtime.EffectSig.class) {
                                tmp26.contTrace.last.next = new Cont$func$scan$1.class(608);
                                tmp26.contTrace.last = tmp26.contTrace.last.next;
                                return tmp26
                              }
                              tmp26 = runtime.resetDepth(tmp26, curDepth1);
                              runtime.stackDepth = runtime.stackDepth + 1;
                              tmp27 = Predef.print(tmp26);
                              if (tmp27 instanceof runtime.EffectSig.class) {
                                tmp27.contTrace.last.next = new Cont$func$scan$1.class(609);
                                tmp27.contTrace.last = tmp27.contTrace.last.next;
                                return tmp27
                              }
                              tmp27 = runtime.resetDepth(tmp27, curDepth1);
                              tmp28 = idx + 1;
                              tmp29 = idx + 1;
                              runtime.stackDepth = runtime.stackDepth + 1;
                              tmp30 = Token.error(idx, tmp29);
                              if (tmp30 instanceof runtime.EffectSig.class) {
                                tmp30.contTrace.last.next = new Cont$func$scan$1.class(610);
                                tmp30.contTrace.last = tmp30.contTrace.last.next;
                                return tmp30
                              }
                              tmp30 = runtime.resetDepth(tmp30, curDepth1);
                              runtime.stackDepth = runtime.stackDepth + 1;
                              tmp31 = runtime.safeCall(tmp30(instance$Ident$_LineLookupTable$_));
                              if (tmp31 instanceof runtime.EffectSig.class) {
                                tmp31.contTrace.last.next = new Cont$func$scan$1.class(611);
                                tmp31.contTrace.last = tmp31.contTrace.last.next;
                                return tmp31
                              }
                              tmp31 = runtime.resetDepth(tmp31, curDepth1);
                              runtime.stackDepth = runtime.stackDepth + 1;
                              return go(tmp28, tmp31)
                            }
                          } else {
                            other = param0;
                            runtime.stackDepth = runtime.stackDepth + 1;
                            tmp32 = Str.concat2("Unrecognized character: '", other);
                            if (tmp32 instanceof runtime.EffectSig.class) {
                              tmp32.contTrace.last.next = new Cont$func$scan$1.class(612);
                              tmp32.contTrace.last = tmp32.contTrace.last.next;
                              return tmp32
                            }
                            tmp32 = runtime.resetDepth(tmp32, curDepth1);
                            runtime.stackDepth = runtime.stackDepth + 1;
                            tmp33 = Str.concat2(tmp32, "'");
                            if (tmp33 instanceof runtime.EffectSig.class) {
                              tmp33.contTrace.last.next = new Cont$func$scan$1.class(613);
                              tmp33.contTrace.last = tmp33.contTrace.last.next;
                              return tmp33
                            }
                            tmp33 = runtime.resetDepth(tmp33, curDepth1);
                            runtime.stackDepth = runtime.stackDepth + 1;
                            tmp34 = Predef.print(tmp33);
                            if (tmp34 instanceof runtime.EffectSig.class) {
                              tmp34.contTrace.last.next = new Cont$func$scan$1.class(614);
                              tmp34.contTrace.last = tmp34.contTrace.last.next;
                              return tmp34
                            }
                            tmp34 = runtime.resetDepth(tmp34, curDepth1);
                            tmp35 = idx + 1;
                            tmp36 = idx + 1;
                            runtime.stackDepth = runtime.stackDepth + 1;
                            tmp37 = Token.error(idx, tmp36);
                            if (tmp37 instanceof runtime.EffectSig.class) {
                              tmp37.contTrace.last.next = new Cont$func$scan$1.class(615);
                              tmp37.contTrace.last = tmp37.contTrace.last.next;
                              return tmp37
                            }
                            tmp37 = runtime.resetDepth(tmp37, curDepth1);
                            runtime.stackDepth = runtime.stackDepth + 1;
                            tmp38 = runtime.safeCall(tmp37(instance$Ident$_LineLookupTable$_));
                            if (tmp38 instanceof runtime.EffectSig.class) {
                              tmp38.contTrace.last.next = new Cont$func$scan$1.class(616);
                              tmp38.contTrace.last = tmp38.contTrace.last.next;
                              return tmp38
                            }
                            tmp38 = runtime.resetDepth(tmp38, curDepth1);
                            runtime.stackDepth = runtime.stackDepth + 1;
                            return go(tmp35, tmp38)
                          }
                        } else {
                          other = param0;
                          runtime.stackDepth = runtime.stackDepth + 1;
                          tmp39 = Str.concat2("Unrecognized character: '", other);
                          if (tmp39 instanceof runtime.EffectSig.class) {
                            tmp39.contTrace.last.next = new Cont$func$scan$1.class(617);
                            tmp39.contTrace.last = tmp39.contTrace.last.next;
                            return tmp39
                          }
                          tmp39 = runtime.resetDepth(tmp39, curDepth1);
                          runtime.stackDepth = runtime.stackDepth + 1;
                          tmp40 = Str.concat2(tmp39, "'");
                          if (tmp40 instanceof runtime.EffectSig.class) {
                            tmp40.contTrace.last.next = new Cont$func$scan$1.class(618);
                            tmp40.contTrace.last = tmp40.contTrace.last.next;
                            return tmp40
                          }
                          tmp40 = runtime.resetDepth(tmp40, curDepth1);
                          runtime.stackDepth = runtime.stackDepth + 1;
                          tmp41 = Predef.print(tmp40);
                          if (tmp41 instanceof runtime.EffectSig.class) {
                            tmp41.contTrace.last.next = new Cont$func$scan$1.class(619);
                            tmp41.contTrace.last = tmp41.contTrace.last.next;
                            return tmp41
                          }
                          tmp41 = runtime.resetDepth(tmp41, curDepth1);
                          tmp42 = idx + 1;
                          tmp43 = idx + 1;
                          runtime.stackDepth = runtime.stackDepth + 1;
                          tmp44 = Token.error(idx, tmp43);
                          if (tmp44 instanceof runtime.EffectSig.class) {
                            tmp44.contTrace.last.next = new Cont$func$scan$1.class(620);
                            tmp44.contTrace.last = tmp44.contTrace.last.next;
                            return tmp44
                          }
                          tmp44 = runtime.resetDepth(tmp44, curDepth1);
                          runtime.stackDepth = runtime.stackDepth + 1;
                          tmp45 = runtime.safeCall(tmp44(instance$Ident$_LineLookupTable$_));
                          if (tmp45 instanceof runtime.EffectSig.class) {
                            tmp45.contTrace.last.next = new Cont$func$scan$1.class(621);
                            tmp45.contTrace.last = tmp45.contTrace.last.next;
                            return tmp45
                          }
                          tmp45 = runtime.resetDepth(tmp45, curDepth1);
                          runtime.stackDepth = runtime.stackDepth + 1;
                          return go(tmp42, tmp45)
                        }
                      } else {
                        other = param0;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp46 = Str.concat2("Unrecognized character: '", other);
                        if (tmp46 instanceof runtime.EffectSig.class) {
                          tmp46.contTrace.last.next = new Cont$func$scan$1.class(622);
                          tmp46.contTrace.last = tmp46.contTrace.last.next;
                          return tmp46
                        }
                        tmp46 = runtime.resetDepth(tmp46, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp47 = Str.concat2(tmp46, "'");
                        if (tmp47 instanceof runtime.EffectSig.class) {
                          tmp47.contTrace.last.next = new Cont$func$scan$1.class(623);
                          tmp47.contTrace.last = tmp47.contTrace.last.next;
                          return tmp47
                        }
                        tmp47 = runtime.resetDepth(tmp47, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp48 = Predef.print(tmp47);
                        if (tmp48 instanceof runtime.EffectSig.class) {
                          tmp48.contTrace.last.next = new Cont$func$scan$1.class(624);
                          tmp48.contTrace.last = tmp48.contTrace.last.next;
                          return tmp48
                        }
                        tmp48 = runtime.resetDepth(tmp48, curDepth1);
                        tmp49 = idx + 1;
                        tmp50 = idx + 1;
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp51 = Token.error(idx, tmp50);
                        if (tmp51 instanceof runtime.EffectSig.class) {
                          tmp51.contTrace.last.next = new Cont$func$scan$1.class(625);
                          tmp51.contTrace.last = tmp51.contTrace.last.next;
                          return tmp51
                        }
                        tmp51 = runtime.resetDepth(tmp51, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        tmp52 = runtime.safeCall(tmp51(instance$Ident$_LineLookupTable$_));
                        if (tmp52 instanceof runtime.EffectSig.class) {
                          tmp52.contTrace.last.next = new Cont$func$scan$1.class(626);
                          tmp52.contTrace.last = tmp52.contTrace.last.next;
                          return tmp52
                        }
                        tmp52 = runtime.resetDepth(tmp52, curDepth1);
                        runtime.stackDepth = runtime.stackDepth + 1;
                        return go(tmp49, tmp52)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        runtime.stackDepth = runtime.stackDepth + 1;
        tmp56 = new globalThis.Error("match error");
        if (tmp56 instanceof runtime.EffectSig.class) {
          tmp56.contTrace.last.next = new Cont$func$scan$1.class(627);
          tmp56.contTrace.last = tmp56.contTrace.last.next;
          return tmp56
        }
        tmp56 = runtime.resetDepth(tmp56, curDepth1);
        throw tmp56;
      }
    };
    curDepth = runtime.stackDepth;
    stackDelayRes = runtime.checkDepth();
    if (stackDelayRes instanceof runtime.EffectSig.class) {
      stackDelayRes.contTrace.last.next = new Cont$func$lex$1.class(13);
      stackDelayRes.contTrace.last = stackDelayRes.contTrace.last.next;
      return stackDelayRes
    }
    runtime.stackDepth = runtime.stackDepth + 1;
    tmp = Lexer.makeLineLookupTable(str);
    if (tmp instanceof runtime.EffectSig.class) {
      tmp.contTrace.last.next = new Cont$func$lex$1.class(688);
      tmp.contTrace.last = tmp.contTrace.last.next;
      return tmp
    }
    tmp = runtime.resetDepth(tmp, curDepth);
    instance$Ident$_LineLookupTable$_ = tmp;
    runtime.stackDepth = runtime.stackDepth + 1;
    return scan(0, Stack.Nil)
  }
  static toString() { return "Lexer"; }
});
let Lexer = Lexer1; export default Lexer;
