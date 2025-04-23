import runtime from "./Runtime.mjs";
import Option from "./Option.mjs";
import Iter from "./Iter.mjs";
import Predef from "./Predef.mjs";
import WrappedMap from "./WrappedMap.mjs";
import Keyword from "./Keyword.mjs";
let Keywords1;
(class Keywords {
  static #prec;
  static #basePrec;
  static #semiPrec;
  static #commaPrec;
  static #eqPrec;
  static #ascPrec;
  static #thenPrec;
  static #precMap;
  static #bracketPrec;
  static #builtinKeywords;
  static {
    Keywords1 = Keywords;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58;
    this.all = WrappedMap.empty;
    Keywords.#prec = 0;
    Keywords.#basePrec = Keywords.currPrec;
    tmp = Keywords.keyword(";;", Keywords.#basePrec, Keywords.#basePrec);
    this._terminator = tmp;
    tmp1 = Keywords.keyword("class", Option.None, Keywords.#basePrec);
    this._class = tmp1;
    Keywords.#semiPrec = Keywords.nextPrec;
    Keywords.#commaPrec = Keywords.nextPrec;
    tmp2 = Keywords.keyword(";", Keywords.#semiPrec, Keywords.#basePrec);
    this._semicolon = tmp2;
    tmp3 = Keywords.keyword(",", Keywords.#commaPrec, Keywords.#semiPrec);
    this._comma = tmp3;
    Keywords.#eqPrec = Keywords.nextPrec;
    Keywords.#ascPrec = Keywords.nextPrec;
    tmp4 = Keywords.keyword("=", Keywords.#eqPrec, Keywords.#eqPrec);
    this._equal = tmp4;
    tmp5 = Keywords.keyword("and", Option.None, Keywords.currPrec);
    this._and = tmp5;
    tmp6 = Keywords.keyword("|", Option.None, Option.None);
    this._bar = tmp6;
    tmp7 = Keywords.keyword("->", Keywords.nextPrec, Keywords.#eqPrec);
    this._thinArrow = tmp7;
    tmp8 = Keywords.keyword(":", Keywords.#ascPrec, Keywords.#eqPrec);
    this._colon = tmp8;
    tmp9 = Keywords.keyword("match", Keywords.nextPrec, Keywords.currPrec);
    this._match = tmp9;
    tmp10 = Keywords.keyword("while", Keywords.nextPrec, Keywords.currPrec);
    this._while = tmp10;
    tmp11 = Keywords.keyword("for", Keywords.nextPrec, Keywords.currPrec);
    this._for = tmp11;
    tmp12 = Keywords.keyword("to", Option.None, Option.None);
    this._to = tmp12;
    tmp13 = Keywords.keyword("downto", Option.None, Option.None);
    this._downto = tmp13;
    tmp14 = Keywords.keyword("do", Option.None, Option.None);
    this._do = tmp14;
    tmp15 = Keywords.keyword("done", Option.None, Option.None);
    this._done = tmp15;
    tmp16 = Keywords.keyword("of", Option.None, Option.None);
    this._of = tmp16;
    tmp17 = Keywords.keyword("with", Option.None, Keywords.currPrec);
    this._with = tmp17;
    tmp18 = Keywords.keyword("case", Option.None, Keywords.currPrec);
    this._case = tmp18;
    Keywords.#thenPrec = Keywords.nextPrec;
    tmp19 = Keywords.keyword("if", Keywords.nextPrec, Keywords.#thenPrec);
    this._if = tmp19;
    tmp20 = Keywords.keyword("<-", Keywords.#thenPrec, Keywords.#thenPrec);
    this._leftArrow = tmp20;
    tmp21 = Keywords.keyword("then", Keywords.#thenPrec, Keywords.#thenPrec);
    this._then = tmp21;
    tmp22 = Keywords.keyword("else", Keywords.#thenPrec, Keywords.#thenPrec);
    this._else = tmp22;
    tmp23 = Keywords.keyword("let", Keywords.#eqPrec, Keywords.#semiPrec);
    this._let = tmp23;
    tmp24 = Keywords.keyword("in", Keywords.#thenPrec, Keywords.#thenPrec);
    this._in = tmp24;
    tmp25 = Keywords.keyword("true", Option.None, Option.None);
    this._true = tmp25;
    tmp26 = Keywords.keyword("false", Option.None, Option.None);
    this._false = tmp26;
    tmp27 = Keywords.keyword("as", Keywords.nextPrec, Keywords.currPrec);
    this._as = tmp27;
    tmp28 = Keywords.keyword("fun", Keywords.currPrec, Keywords._thinArrow.leftPrec);
    this._fun = tmp28;
    tmp29 = Keywords.keyword("function", Keywords.currPrec, Keywords.#eqPrec);
    this._function = tmp29;
    tmp30 = Keywords.keyword("type", Keywords.currPrec, Option.None);
    this._type = tmp30;
    tmp31 = Keywords.keyword("exception", Keywords.currPrec, Option.None);
    this._exception = tmp31;
    tmp32 = Keywords.keyword("rec", Keywords.currPrec, Keywords.#eqPrec);
    this._rec = tmp32;
    tmp33 = Keywords.keyword("#", Option.None, Option.None);
    this._hash = tmp33;
    this.maxKeywordPrec = Keywords.#prec;
    tmp34 = Keywords.makePrecMap(Keywords.maxKeywordPrec, ",", "@", ":", "|", "&", "=", "/ \\", "^", "!", "< >", "+ -", "* %", "~", "", "", ".");
    Keywords.#precMap = tmp34;
    tmp35 = runtime.safeCall(Keywords.#precMap.get("."));
    tmp36 = Option.unsafe.get(tmp35);
    this.periodPrec = tmp36;
    tmp37 = Option.Some(Keywords.periodPrec);
    tmp38 = Option.Some(Keywords.periodPrec);
    tmp39 = Keywords.keyword(".", tmp37, tmp38);
    this._period = tmp39;
    this.maxOperatorPrec = Keywords.periodPrec;
    tmp40 = Keywords.maxOperatorPrec - 1;
    this.appPrec = tmp40;
    tmp41 = Keywords.appPrec - 1;
    this.prefixPrec = tmp41;
    tmp42 = Keywords.charPrecOpt("*");
    tmp43 = Keywords.charPrecOpt("*");
    tmp44 = Keywords.keyword("*", tmp42, tmp43);
    this._asterisk = tmp44;
    tmp45 = Keywords.charPrecOpt("=");
    tmp46 = Keywords.charPrecOpt("=");
    tmp47 = Keywords.keyword("==", tmp45, tmp46);
    this._equalequal = tmp47;
    tmp48 = Keywords.maxOperatorPrec + 1;
    tmp49 = Option.Some(tmp48);
    Keywords.#bracketPrec = tmp49;
    tmp50 = Keywords.keyword("(", Keywords.#bracketPrec, Keywords.#basePrec);
    this._leftRound = tmp50;
    tmp51 = Keywords.keyword(")", Keywords.#basePrec, Option.None);
    this._rightRound = tmp51;
    tmp52 = Keywords.keyword("[", Keywords.#bracketPrec, Keywords.#basePrec);
    this._leftSquare = tmp52;
    tmp53 = Keywords.keyword("]", Keywords.#basePrec, Option.None);
    this._rightSquare = tmp53;
    tmp54 = Keywords.keyword("{", Keywords.#bracketPrec, Keywords.#basePrec);
    this._leftCurly = tmp54;
    tmp55 = Keywords.keyword("}", Keywords.#basePrec, Option.None);
    this._rightCurly = tmp55;
    tmp56 = Keywords.keyword("begin", Keywords.#bracketPrec, Keywords.#basePrec);
    this._begin = tmp56;
    tmp57 = Keywords.keyword("end", Keywords.#basePrec, Option.None);
    this._end = tmp57;
    tmp58 = new globalThis.Set(Keywords.all.keysIterator);
    Keywords.#builtinKeywords = tmp58;
    const Letter$class = class Letter {
      constructor() {}
      unapply(scrut) {
        let gtLo, ltHi, gtLo1, ltHi1;
        gtLo = "a" <= scrut;
        if (gtLo === true) {
          ltHi = scrut <= "z";
          if (ltHi === true) {
            return runtime.safeCall(runtime.MatchResult([]))
          } else {
            gtLo1 = "A" <= scrut;
            if (gtLo1 === true) {
              ltHi1 = scrut <= "Z";
              if (ltHi1 === true) {
                return runtime.safeCall(runtime.MatchResult([]))
              } else {
                return runtime.safeCall(runtime.MatchFailure())
              }
            } else {
              return runtime.safeCall(runtime.MatchFailure())
            }
          }
        } else {
          gtLo1 = "A" <= scrut;
          if (gtLo1 === true) {
            ltHi1 = scrut <= "Z";
            if (ltHi1 === true) {
              return runtime.safeCall(runtime.MatchResult([]))
            } else {
              return runtime.safeCall(runtime.MatchFailure())
            }
          } else {
            return runtime.safeCall(runtime.MatchFailure())
          }
        }
      } 
      unapplyStringPrefix(topic) {
        let emptyTest, head, tail, gtLo, ltHi, emptyTest1, head1, tail1, gtLo1, ltHi1;
        emptyTest = topic == "";
        if (emptyTest === true) {
          return runtime.safeCall(runtime.MatchFailure())
        } else {
          head = runtime.Str.get(topic, 0);
          tail = runtime.Str.drop(topic, 1);
          gtLo = "a" <= head;
          if (gtLo === true) {
            ltHi = head <= "z";
            if (ltHi === true) {
              return runtime.safeCall(runtime.MatchResult([
                tail
              ]))
            } else {
              emptyTest1 = topic == "";
              if (emptyTest1 === true) {
                return runtime.safeCall(runtime.MatchFailure())
              } else {
                head1 = runtime.Str.get(topic, 0);
                tail1 = runtime.Str.drop(topic, 1);
                gtLo1 = "A" <= head1;
                if (gtLo1 === true) {
                  ltHi1 = head1 <= "Z";
                  if (ltHi1 === true) {
                    return runtime.safeCall(runtime.MatchResult([
                      tail1
                    ]))
                  } else {
                    return runtime.safeCall(runtime.MatchFailure())
                  }
                } else {
                  return runtime.safeCall(runtime.MatchFailure())
                }
              }
            }
          } else {
            emptyTest1 = topic == "";
            if (emptyTest1 === true) {
              return runtime.safeCall(runtime.MatchFailure())
            } else {
              head1 = runtime.Str.get(topic, 0);
              tail1 = runtime.Str.drop(topic, 1);
              gtLo1 = "A" <= head1;
              if (gtLo1 === true) {
                ltHi1 = head1 <= "Z";
                if (ltHi1 === true) {
                  return runtime.safeCall(runtime.MatchResult([
                    tail1
                  ]))
                } else {
                  return runtime.safeCall(runtime.MatchFailure())
                }
              } else {
                return runtime.safeCall(runtime.MatchFailure())
              }
            }
          }
        }
      }
      toString() { return "Letter"; }
    };
    this.Letter = new Letter$class;
    this.Letter.class = Letter$class;
    const FloatOperator$class = class FloatOperator {
      constructor() {}
      unapply(scrut) {
        if (scrut === "+.") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "-.") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "*.") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "/.") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          return runtime.safeCall(runtime.MatchFailure())
        }
      } 
      unapplyStringPrefix(topic) {
        let cond, sliced, cond1, sliced1, cond2, sliced2, cond3, sliced3;
        cond = runtime.Str.startsWith(topic, "+.");
        if (cond === true) {
          sliced = runtime.Str.drop(topic, 2);
          return runtime.safeCall(runtime.MatchResult([
            sliced
          ]))
        } else {
          cond1 = runtime.Str.startsWith(topic, "-.");
          if (cond1 === true) {
            sliced1 = runtime.Str.drop(topic, 2);
            return runtime.safeCall(runtime.MatchResult([
              sliced1
            ]))
          } else {
            cond2 = runtime.Str.startsWith(topic, "*.");
            if (cond2 === true) {
              sliced2 = runtime.Str.drop(topic, 2);
              return runtime.safeCall(runtime.MatchResult([
                sliced2
              ]))
            } else {
              cond3 = runtime.Str.startsWith(topic, "/.");
              if (cond3 === true) {
                sliced3 = runtime.Str.drop(topic, 2);
                return runtime.safeCall(runtime.MatchResult([
                  sliced3
                ]))
              } else {
                return runtime.safeCall(runtime.MatchFailure())
              }
            }
          }
        }
      }
      toString() { return "FloatOperator"; }
    };
    this.FloatOperator = new FloatOperator$class;
    this.FloatOperator.class = FloatOperator$class;
    const RightAssociative$class = class RightAssociative {
      constructor() {}
      unapply(scrut) {
        if (scrut === "@") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === "/") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === ",") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else if (scrut === ":") {
          return runtime.safeCall(runtime.MatchResult([]))
        } else {
          return runtime.safeCall(runtime.MatchFailure())
        }
      } 
      unapplyStringPrefix(topic) {
        let cond, sliced, cond1, sliced1, cond2, sliced2, cond3, sliced3;
        cond = runtime.Str.startsWith(topic, "@");
        if (cond === true) {
          sliced = runtime.Str.drop(topic, 1);
          return runtime.safeCall(runtime.MatchResult([
            sliced
          ]))
        } else {
          cond1 = runtime.Str.startsWith(topic, "/");
          if (cond1 === true) {
            sliced1 = runtime.Str.drop(topic, 1);
            return runtime.safeCall(runtime.MatchResult([
              sliced1
            ]))
          } else {
            cond2 = runtime.Str.startsWith(topic, ",");
            if (cond2 === true) {
              sliced2 = runtime.Str.drop(topic, 1);
              return runtime.safeCall(runtime.MatchResult([
                sliced2
              ]))
            } else {
              cond3 = runtime.Str.startsWith(topic, ":");
              if (cond3 === true) {
                sliced3 = runtime.Str.drop(topic, 1);
                return runtime.safeCall(runtime.MatchResult([
                  sliced3
                ]))
              } else {
                return runtime.safeCall(runtime.MatchFailure())
              }
            }
          }
        }
      }
      toString() { return "RightAssociative"; }
    };
    this.RightAssociative = new RightAssociative$class;
    this.RightAssociative.class = RightAssociative$class;
  }
  static makePrecMap(startPrec, ...ops) {
    let m, i, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda;
    m = WrappedMap.empty;
    i = 0;
    tmp6: while (true) {
      scrut = i < ops.length;
      if (scrut === true) {
        tmp = runtime.safeCall(ops.at(i));
        tmp1 = runtime.safeCall(tmp.split(" "));
        lambda = (undefined, function (op, _, _1) {
          let scrut1, tmp7;
          scrut1 = op.length > 0;
          if (scrut1 === true) {
            tmp7 = i + startPrec;
            return m.insert(op, tmp7)
          } else {
            return runtime.Unit
          }
        });
        tmp2 = lambda;
        tmp3 = runtime.safeCall(tmp1.forEach(tmp2));
        tmp4 = i + 1;
        i = tmp4;
        tmp5 = runtime.Unit;
        continue tmp6;
      } else {
        tmp5 = runtime.Unit;
      }
      break;
    }
    return m
  } 
  static keyword(name, leftPrec, rightPrec) {
    let result, tmp, tmp1;
    tmp = Keyword.Keyword(name, leftPrec, rightPrec);
    result = tmp;
    tmp1 = Keywords.all.insert(name, result);
    return result
  } 
  static get currPrec() {
    return Option.Some(Keywords.#prec);
  } 
  static get nextPrec() {
    let tmp;
    tmp = Keywords.#prec + 1;
    Keywords.#prec = tmp;
    return Option.Some(Keywords.#prec);
  } 
  static charPrec(op) {
    let tmp;
    tmp = runtime.safeCall(Keywords.#precMap.get(op));
    return Option.unsafe.get(tmp)
  } 
  static charPrecOpt(op1) {
    return runtime.safeCall(Keywords.#precMap.get(op1))
  } 
  static get extended() {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, k, scrut;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        k = first0;
        scrut = runtime.safeCall(Keywords.#builtinKeywords.has(k));
        if (scrut === false) {
          return true
        } else {
          return false
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    tmp1 = Iter.filtering(Keywords.all, tmp);
    tmp2 = Iter.toArray(tmp1);
    return WrappedMap.toMap(tmp2);
  } 
  static hasLetter(s) {
    let tmp, lambda;
    lambda = (undefined, function (ch, _, _1) {
      let matchResult;
      matchResult = runtime.safeCall(Keywords.Letter.unapply(ch));
      if (matchResult instanceof runtime.MatchResult.class) {
        return true
      } else {
        return false
      }
    });
    tmp = lambda;
    return runtime.safeCall([
      ...s
    ].some(tmp))
  } 
  static opPrec(opStr) {
    let lastChar, rightPrec1, matchResult, scrut, matchResult1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    matchResult1 = runtime.safeCall(Keywords.FloatOperator.unapply(opStr));
    if (matchResult1 instanceof runtime.MatchResult.class) {
      tmp = runtime.safeCall(opStr.at(0));
      tmp1 = Keywords1.charPrec(tmp);
      tmp2 = runtime.safeCall(opStr.at(0));
      tmp3 = Keywords1.charPrec(tmp2);
      return Predef.tuple(tmp1, tmp3)
    } else {
      scrut = Keywords.hasLetter(opStr);
      if (scrut === true) {
        return Predef.tuple(Keywords1.maxKeywordPrec, Keywords1.maxKeywordPrec)
      } else {
        tmp4 = - 1;
        lastChar = runtime.safeCall(opStr.at(tmp4));
        rightPrec1 = Keywords1.charPrec(lastChar);
        tmp5 = runtime.safeCall(opStr.at(0));
        tmp6 = Keywords1.charPrec(tmp5);
        tmp7 = Keywords1.charPrec(lastChar);
        matchResult = runtime.safeCall(Keywords.RightAssociative.unapply(lastChar));
        if (matchResult instanceof runtime.MatchResult.class) {
          tmp8 = - 1;
        } else {
          tmp8 = 0;
        }
        tmp9 = tmp7 + tmp8;
        return Predef.tuple(tmp6, tmp9)
      }
    }
  } 
  static opPrecOpt(opStr1) {
    let lastChar, scrut, param0, rightPrec1, scrut1, param01, leftPrec1, matchResult, scrut2, matchResult1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (opStr1 === "") {
      return Option.None
    } else {
      matchResult1 = runtime.safeCall(Keywords.FloatOperator.unapply(opStr1));
      if (matchResult1 instanceof runtime.MatchResult.class) {
        tmp = runtime.safeCall(opStr1.at(0));
        tmp1 = Keywords1.charPrec(tmp);
        tmp2 = runtime.safeCall(opStr1.at(0));
        tmp3 = Keywords1.charPrec(tmp2);
        tmp4 = Predef.tuple(tmp1, tmp3);
        return Option.Some(tmp4)
      } else {
        scrut2 = Keywords.hasLetter(opStr1);
        if (scrut2 === true) {
          tmp5 = Predef.tuple(Keywords1.maxKeywordPrec, Keywords1.maxKeywordPrec);
          return Option.Some(tmp5)
        } else {
          tmp6 = - 1;
          lastChar = runtime.safeCall(opStr1.at(tmp6));
          scrut = Keywords1.charPrecOpt(lastChar);
          if (scrut instanceof Option.Some.class) {
            param0 = scrut.value;
            rightPrec1 = param0;
            tmp7 = runtime.safeCall(opStr1.at(0));
            scrut1 = Keywords1.charPrecOpt(tmp7);
            if (scrut1 instanceof Option.Some.class) {
              param01 = scrut1.value;
              leftPrec1 = param01;
              matchResult = runtime.safeCall(Keywords.RightAssociative.unapply(lastChar));
              if (matchResult instanceof runtime.MatchResult.class) {
                tmp8 = - 1;
              } else {
                tmp8 = 0;
              }
              tmp9 = rightPrec1 + tmp8;
              tmp10 = Predef.tuple(leftPrec1, tmp9);
              return Option.Some(tmp10)
            } else {
              return Option.None
            }
          } else {
            return Option.None
          }
        }
      }
    }
  }
  static toString() { return "Keywords"; }
});
let Keywords = Keywords1; export default Keywords;
