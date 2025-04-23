import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import Option from "./Option.mjs";
import Stack from "./Stack.mjs";
import WrappedMap from "./WrappedMap.mjs";
import Iter from "./Iter.mjs";
import Token from "./Token.mjs";
import Keyword from "./Keyword.mjs";
import Keywords from "./Keywords.mjs";
import Tree from "./Tree.mjs";
import ParseRule from "./ParseRule.mjs";
let Rules1;
(class Rules {
  static #letExpression;
  static {
    Rules1 = Rules;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35;
    this.syntaxKinds = WrappedMap.empty;
    tmp = new globalThis.Set();
    this.extendedKinds = tmp;
    tmp1 = Rules.define("let-bindings");
    lambda = (undefined, function (lhs, rhsBindings) {
      let first1, first0, rhs, bindings, tmp294;
      if (globalThis.Array.isArray(rhsBindings) && rhsBindings.length === 2) {
        first0 = rhsBindings[0];
        first1 = rhsBindings[1];
        rhs = first0;
        bindings = first1;
        tmp294 = Tree.Infix(Keywords._equal, lhs, rhs);
        return Stack.Cons(tmp294, bindings)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp2 = lambda;
    tmp3 = ParseRule.Choice.keyword(Keywords._equal);
    tmp4 = ParseRule.Choice.end(Stack.Nil);
    tmp5 = ParseRule.Choice.keyword(Keywords._and);
    tmp6 = ParseRule.Choice.reference("let-bindings");
    tmp7 = runtime.safeCall(tmp6({
    "process": Rules.idFirst, "name": "let-bindings tail"
    }));
    tmp8 = runtime.safeCall(tmp5(tmp7));
    tmp9 = Predef.tuple(tmp4, tmp8);
    tmp10 = runtime.safeCall(ParseRule.Choice.term({
    "name": "right-hand side", "choices": tmp9
    }));
    tmp11 = runtime.safeCall(tmp3(tmp10));
    tmp12 = Predef.tuple(tmp11);
    tmp13 = runtime.safeCall(ParseRule.Choice.term({
    "process": tmp2, "name": "left-hand side", "choices": tmp12
    }));
    tmp14 = runtime.safeCall(tmp1(tmp13));
    tmp15 = Rules.makeLetBindings(true);
    Rules.#letExpression = tmp15;
    tmp16 = Rules.define("simple-matching");
    lambda1 = (undefined, function (lhs, rhsTail) {
      let first1, first0, rhs, tail, tmp294;
      if (globalThis.Array.isArray(rhsTail) && rhsTail.length === 2) {
        first0 = rhsTail[0];
        first1 = rhsTail[1];
        rhs = first0;
        tail = first1;
        tmp294 = Tree.Infix(Keywords._thinArrow, lhs, rhs);
        return Stack.Cons(tmp294, tail)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp17 = lambda1;
    tmp18 = ParseRule.Choice.keyword(Keywords._thinArrow);
    tmp19 = ParseRule.Choice.end(Stack.Nil);
    tmp20 = ParseRule.Choice.keyword(Keywords._bar);
    tmp21 = ParseRule.Choice.reference("simple-matching");
    tmp22 = runtime.safeCall(tmp21({
    "process": Rules.idFirst, "name": "simple-matching tail"
    }));
    tmp23 = runtime.safeCall(tmp20(tmp22));
    tmp24 = Predef.tuple(tmp19, tmp23);
    tmp25 = runtime.safeCall(ParseRule.Choice.term({
    "name": "rhs", "choices": tmp24
    }));
    tmp26 = runtime.safeCall(tmp18(tmp25));
    tmp27 = Predef.tuple(tmp26);
    tmp28 = runtime.safeCall(ParseRule.Choice.term({
    "process": tmp17, "name": "case body", "choices": tmp27
    }));
    tmp29 = runtime.safeCall(tmp16(tmp28));
    tmp30 = Rules.define("pattern-list");
    tmp31 = ParseRule.Choice.reference("pattern-list");
    tmp32 = runtime.safeCall(tmp31({
    "process": Rules.idFirst, "name": "pattern list tail"
    }));
    tmp33 = Predef.tuple(tmp32);
    lambda2 = (undefined, function (head, tail) {
      return Stack.Cons(head, tail)
    });
    tmp34 = runtime.safeCall(ParseRule.Choice.term({
    "process": lambda2, "name": "pattern", "choices": tmp33
    }));
    tmp35 = runtime.safeCall(tmp30(tmp34));
    tmp36 = Rules.define("multiple-matching");
    tmp37 = ParseRule.Choice.reference("pattern-list");
    tmp38 = Tree.infix(Keywords._thinArrow);
    tmp39 = ParseRule.Choice.keyword(Keywords._thinArrow);
    tmp40 = ParseRule.Choice.end(Stack.Nil);
    tmp41 = ParseRule.Choice.keyword(Keywords._bar);
    tmp42 = ParseRule.Choice.reference("multiple-matching");
    tmp43 = runtime.safeCall(tmp42({
    "process": Rules.idFirst, "name": "multiple-matching tail"
    }));
    tmp44 = runtime.safeCall(tmp41(tmp43));
    tmp45 = Predef.tuple(tmp40, tmp44);
    tmp46 = runtime.safeCall(ParseRule.Choice.term({
    "process": Rules.idFirst, "name": "the right-hand side of the arrow", "choices": tmp45
    }));
    tmp47 = runtime.safeCall(tmp39(tmp46));
    tmp48 = Predef.tuple(tmp47);
    tmp49 = runtime.safeCall(tmp37({
    "process": tmp38, "name": "list of patterns", "choices": tmp48
    }));
    tmp50 = runtime.safeCall(tmp36(tmp49));
    tmp51 = ParseRule.Choice.keyword(Keywords._fun);
    tmp52 = ParseRule.Choice.keyword(Keywords._thinArrow);
    tmp53 = runtime.safeCall(ParseRule.Choice.term({
    "process": Rules.idFirst, "name": "function body"
    }));
    tmp54 = runtime.safeCall(tmp52(tmp53));
    tmp55 = Predef.tuple(tmp54);
    lambda3 = (undefined, function (params, body) {
      let tmp294;
      tmp294 = Stack.Cons(params, Stack.Nil);
      return Tree.Lambda(tmp294, body)
    });
    tmp56 = runtime.safeCall(ParseRule.Choice.term({
    "process": lambda3, "name": "function parameters", "choices": tmp55
    }));
    tmp57 = runtime.safeCall(tmp51(tmp56));
    tmp58 = ParseRule.Choice.keyword(Keywords._match);
    tmp59 = ParseRule.Choice.keyword(Keywords._with);
    tmp60 = ParseRule.Choice.keyword(Keywords._bar);
    tmp61 = runtime.safeCall(tmp60());
    tmp62 = Rules.getRuleByKind("simple-matching");
    tmp63 = ParseRule.Choice.siding({
    "optional": true, "init": tmp61, "rest": tmp62, "process": Rules.idSecond
    });
    tmp64 = runtime.safeCall(tmp59(tmp63));
    tmp65 = Predef.tuple(tmp64);
    tmp66 = runtime.safeCall(ParseRule.Choice.term({
    "process": Tree.Match, "name": "pattern matching scrutinee", "choices": tmp65
    }));
    tmp67 = runtime.safeCall(tmp58(tmp66));
    tmp68 = ParseRule.Choice.keyword(Keywords._function);
    tmp69 = ParseRule.Choice.keyword(Keywords._bar);
    tmp70 = runtime.safeCall(tmp69());
    tmp71 = Rules.getRuleByKind("simple-matching");
    lambda4 = (undefined, function (_, branches) {
      return Tree.Match(Tree.empty, branches)
    });
    tmp72 = ParseRule.Choice.siding({
    "optional": true, "init": tmp70, "rest": tmp71, "process": lambda4
    });
    tmp73 = runtime.safeCall(tmp68(tmp72));
    tmp74 = ParseRule.Choice.keyword(Keywords._if);
    lambda5 = (undefined, function (tst, conAlt) {
      let first1, first0, con, alt;
      if (globalThis.Array.isArray(conAlt) && conAlt.length === 2) {
        first0 = conAlt[0];
        first1 = conAlt[1];
        con = first0;
        alt = first1;
        return Tree.Ternary(Keywords._if, tst, con, alt)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp75 = lambda5;
    tmp76 = ParseRule.Choice.keyword(Keywords._then);
    tmp77 = ParseRule.Choice.end(Option.None);
    tmp78 = ParseRule.Choice.keyword(Keywords._else);
    tmp79 = runtime.safeCall(ParseRule.Choice.term({
    "process": Rules.someFirst, "name": "if-then-else alternative"
    }));
    tmp80 = runtime.safeCall(tmp78(tmp79));
    tmp81 = Predef.tuple(tmp77, tmp80);
    tmp82 = runtime.safeCall(ParseRule.Choice.term({
    "name": "if-then-else consequent", "choices": tmp81
    }));
    tmp83 = runtime.safeCall(tmp76(tmp82));
    tmp84 = Predef.tuple(tmp83);
    tmp85 = runtime.safeCall(ParseRule.Choice.term({
    "process": tmp75, "name": "if-then-else condition", "choices": tmp84
    }));
    tmp86 = runtime.safeCall(tmp74(tmp85));
    tmp87 = ParseRule.Choice.keyword(Keywords._while);
    tmp88 = ParseRule.Choice.keyword(Keywords._do);
    tmp89 = ParseRule.Choice.keyword(Keywords._done);
    tmp90 = runtime.safeCall(tmp89());
    tmp91 = Predef.tuple(tmp90);
    tmp92 = runtime.safeCall(ParseRule.Choice.term({
    "name": "while end", "process": Rules.idFirst, "choices": tmp91
    }));
    tmp93 = runtime.safeCall(tmp88(tmp92));
    tmp94 = Predef.tuple(tmp93);
    tmp95 = runtime.safeCall(ParseRule.Choice.term({
    "process": Tree.While, "name": "while body", "choices": tmp94
    }));
    tmp96 = runtime.safeCall(tmp87(tmp95));
    tmp97 = ParseRule.Choice.keyword(Keywords._for);
    tmp98 = ParseRule.Choice.keyword(Keywords._equal);
    tmp99 = ParseRule.Choice.keyword(Keywords._to);
    tmp100 = runtime.safeCall(tmp99());
    tmp101 = ParseRule.Choice.keyword(Keywords._downto);
    tmp102 = runtime.safeCall(tmp101());
    tmp103 = Predef.tuple(tmp100, tmp102);
    tmp104 = ParseRule.Choice.keyword(Keywords._do);
    tmp105 = ParseRule.Choice.keyword(Keywords._done);
    tmp106 = runtime.safeCall(tmp105());
    tmp107 = Predef.tuple(tmp106);
    tmp108 = runtime.safeCall(ParseRule.Choice.term({
    "name": "`for` `done` keyword", "process": Rules.idFirst, "choices": tmp107
    }));
    tmp109 = runtime.safeCall(tmp104(tmp108));
    tmp110 = Predef.tuple(tmp109);
    tmp111 = runtime.safeCall(ParseRule.Choice.term({
    "name": "`for` `do` keyword", "choices": tmp110
    }));
    tmp112 = ParseRule.Choice.siding({
    "init": tmp103, "rest": tmp111, "process": Rules.idSecond
    });
    tmp113 = Predef.tuple(tmp112);
    lambda6 = (undefined, function (start, endBody) {
      return [
        start,
        ...endBody
      ]
    });
    tmp114 = runtime.safeCall(ParseRule.Choice.term({
    "process": lambda6, "name": "`for` `to` or `downto` keyword", "choices": tmp113
    }));
    tmp115 = runtime.safeCall(tmp98(tmp114));
    tmp116 = Predef.tuple(tmp115);
    lambda7 = (undefined, function (head, startEndBody) {
      return Tree.For(head, ...startEndBody)
    });
    tmp117 = runtime.safeCall(ParseRule.Choice.term({
    "name": "`for` head", "process": lambda7, "choices": tmp116
    }));
    tmp118 = runtime.safeCall(tmp97(tmp117));
    lambda8 = (undefined, function (tree) {
      if (tree instanceof Tree.Empty.class) {
        return Tree.Tuple(Stack.Nil)
      } else {
        return tree
      }
    });
    tmp119 = Rules.makeBracketRule({
    "opening": Keywords._leftRound, "closing": Keywords._rightRound, "kind": "term", "wrapContent": lambda8
    });
    lambda9 = (undefined, function (tree) {
      let tmp294;
      if (tree instanceof Tree.Empty.class) {
        tmp294 = Tree.Sequence(Stack.Nil);
      } else {
        tmp294 = tree;
      }
      return Tree.Bracketed(Token.Square, tmp294)
    });
    tmp120 = lambda9;
    tmp121 = Rules.makeBracketRule({
    "opening": Keywords._leftSquare, "closing": Keywords._rightSquare, "kind": "term", "wrapContent": tmp120
    });
    tmp122 = Rules.makeBracketRule({
    "opening": Keywords._leftCurly, "closing": Keywords._rightCurly, "kind": "term", "wrapContent": Predef.id
    });
    lambda10 = (undefined, function (tree) {
      if (tree instanceof Tree.Empty.class) {
        return Tree.Sequence(Stack.Nil)
      } else {
        return tree
      }
    });
    tmp123 = Rules.makeBracketRule({
    "opening": Keywords._begin, "closing": Keywords._end, "kind": "term", "wrapContent": lambda10
    });
    lambda11 = (undefined, function (lhs, rhs) {
      let param0, tail, tmp294, tmp295, tmp296;
      if (rhs instanceof Tree.Tuple.class) {
        param0 = rhs.trees;
        tail = param0;
        tmp294 = Stack.Cons(lhs, tail);
        return Tree.Tuple(tmp294)
      } else {
        tmp295 = Stack.Cons(rhs, Stack.Nil);
        tmp296 = Stack.Cons(lhs, tmp295);
        return Tree.Tuple(tmp296)
      }
    });
    tmp124 = lambda11;
    tmp125 = Rules.makeInfixChoice(Keywords._comma, "term", tmp124);
    lambda12 = (undefined, function (lhs, rhs) {
      let param0, tail, tmp294, tmp295, tmp296;
      if (rhs instanceof Tree.Sequence.class) {
        param0 = rhs.trees;
        tail = param0;
        tmp294 = Stack.Cons(lhs, tail);
        return Tree.Sequence(tmp294)
      } else {
        tmp295 = Stack.Cons(rhs, Stack.Nil);
        tmp296 = Stack.Cons(lhs, tmp295);
        return Tree.Sequence(tmp296)
      }
    });
    tmp126 = lambda12;
    tmp127 = Rules.makeInfixChoice(Keywords._semicolon, "term", tmp126);
    lambda13 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._leftArrow, lhs, rhs)
    });
    tmp128 = Rules.makeInfixChoice(Keywords._leftArrow, "term", lambda13);
    lambda14 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._equalequal, lhs, rhs)
    });
    tmp129 = Rules.makeInfixChoice(Keywords._equalequal, "term", lambda14);
    lambda15 = (undefined, function (lhs, rhs) {
      let tmp294, tmp295, tmp296;
      tmp294 = Tree.Ident("*", true);
      tmp295 = Stack.Cons(rhs, Stack.Nil);
      tmp296 = Stack.Cons(lhs, tmp295);
      return Tree.App(tmp294, tmp296)
    });
    tmp130 = lambda15;
    tmp131 = Rules.makeInfixChoice(Keywords._asterisk, "term", tmp130);
    tmp132 = ParseRule.Choice.keyword(Keywords._period);
    tmp133 = ParseRule.Choice.keyword(Keywords._leftRound);
    tmp134 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp135 = runtime.safeCall(tmp134());
    tmp136 = Predef.tuple(tmp135);
    lambda16 = (undefined, function (argument, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        let tmp294;
        tmp294 = Tree.Bracketed(Token.Round, argument);
        return Tree.Infix(Keywords._period, lhs, tmp294)
      });
      return lambda36
    });
    tmp137 = runtime.safeCall(ParseRule.Choice.term({
    "process": lambda16, "name": "application argument", "choices": tmp136
    }));
    tmp138 = runtime.safeCall(tmp133(tmp137));
    lambda17 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._period, lhs, rhs)
      });
      return lambda36
    });
    tmp139 = runtime.safeCall(ParseRule.Choice.term({
    "process": lambda17, "name": "operator `.` right-hand side"
    }));
    tmp140 = runtime.safeCall(tmp132(tmp138, tmp139));
    tmp141 = ParseRule.Choice.keyword(Keywords._colon);
    lambda18 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._colon, lhs, rhs)
      });
      return lambda36
    });
    tmp142 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": lambda18, "name": "right-hand side type"
    }));
    tmp143 = runtime.safeCall(tmp141(tmp142));
    lambda19 = (undefined, function (argument, _) {
      let lambda36;
      lambda36 = (undefined, function (callee) {
        return Tree.App(callee, argument)
      });
      return lambda36
    });
    tmp144 = runtime.safeCall(ParseRule.Choice.term({
    "process": lambda19, "name": "application argument", "outerPrec": Keywords.appPrec
    }));
    tmp145 = Predef.tuple(tmp125, tmp127, tmp128, tmp129, tmp131, tmp140, tmp143, tmp144);
    tmp146 = runtime.safeCall(ParseRule.Choice.term({
    "process": Predef.pipeInto, "choices": tmp145
    }));
    tmp147 = ParseRule.rule("prefix rules for expressions", Rules.#letExpression, tmp57, tmp67, tmp73, tmp86, tmp96, tmp118, tmp119, tmp121, tmp122, tmp123, tmp146);
    this.termRule = tmp147;
    tmp148 = ParseRule.Choice.keyword(Keywords._leftRound);
    lambda20 = (undefined, function (headArg, tailArgsCtor) {
      let param0, ctor, first1, first0, tailArgs, ctor1, tmp294, tmp295;
      if (globalThis.Array.isArray(tailArgsCtor) && tailArgsCtor.length === 2) {
        first0 = tailArgsCtor[0];
        first1 = tailArgsCtor[1];
        tailArgs = first0;
        ctor1 = first1;
        tmp294 = Stack.Cons(headArg, tailArgs);
        tmp295 = Tree.Tuple(tmp294);
        return Tree.App(ctor1, tmp295)
      } else if (tailArgsCtor instanceof Option.Some.class) {
        param0 = tailArgsCtor.value;
        ctor = param0;
        return Tree.App(ctor, headArg)
      } else if (tailArgsCtor instanceof Option.None.class) {
        return headArg
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp149 = lambda20;
    tmp150 = ParseRule.Choice.reference("type-arguments-tail");
    tmp151 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp152 = runtime.safeCall(ParseRule.Choice.ident({
    "process": Rules.someFirst, "name": "the type constructor's name"
    }));
    tmp153 = runtime.safeCall(tmp151(tmp152));
    tmp154 = Predef.tuple(tmp153);
    tmp155 = runtime.safeCall(tmp150({
    "name": "the remaining type arguments", "choices": tmp154
    }));
    tmp156 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp157 = ParseRule.Choice.end(Option.None);
    tmp158 = runtime.safeCall(ParseRule.Choice.ident({
    "process": Rules.someFirst, "name": "the type constructor's name"
    }));
    tmp159 = runtime.safeCall(tmp156(tmp157, tmp158));
    tmp160 = Predef.tuple(tmp155, tmp159);
    tmp161 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": tmp149, "name": "the first type in the parentheses", "choices": tmp160
    }));
    tmp162 = runtime.safeCall(tmp148(tmp161));
    lambda21 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._thinArrow, lhs, rhs)
    });
    tmp163 = Rules.makeInfixChoice(Keywords._thinArrow, "type", lambda21);
    lambda22 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._asterisk, lhs, rhs)
    });
    tmp164 = Rules.makeInfixChoice(Keywords._asterisk, "type", lambda22);
    lambda23 = (undefined, function (callee, _) {
      let lambda36;
      lambda36 = (undefined, function (argument) {
        return Tree.App(callee, argument)
      });
      return lambda36
    });
    tmp165 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": lambda23, "outerPrec": Keywords.appPrec
    }));
    tmp166 = Predef.tuple(tmp163, tmp164, tmp165);
    tmp167 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": Predef.pipeInto, "choices": tmp166
    }));
    tmp168 = ParseRule.rule("rules for types", tmp162, tmp167);
    this.typeRule = tmp168;
    tmp169 = Rules.define("type-arguments-tail");
    tmp170 = ParseRule.Choice.keyword(Keywords._comma);
    tmp171 = Rules.listLike({
    "head": "type", "tail": "type-arguments-tail", "name": "type argument"
    });
    tmp172 = runtime.safeCall(tmp170(tmp171));
    tmp173 = runtime.safeCall(tmp169(tmp172));
    tmp174 = Rules.define("constr-decl");
    lambda24 = (undefined, function (ctor, argOpt) {
      let param0, arg;
      if (argOpt instanceof Option.Some.class) {
        param0 = argOpt.value;
        arg = param0;
        return Tree.Infix(Keywords._of, ctor, arg)
      } else if (argOpt instanceof Option.None.class) {
        return ctor
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp175 = lambda24;
    tmp176 = ParseRule.Choice.end(Option.None);
    tmp177 = ParseRule.Choice.keyword(Keywords._of);
    tmp178 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": Rules.someFirst, "name": "the variant constructor's argument"
    }));
    tmp179 = runtime.safeCall(tmp177(tmp178));
    tmp180 = Predef.tuple(tmp176, tmp179);
    tmp181 = runtime.safeCall(ParseRule.Choice.ident({
    "process": tmp175, "name": "the variant constructor's name", "choices": tmp180
    }));
    tmp182 = runtime.safeCall(tmp174(tmp181));
    tmp183 = Rules.define("variants");
    tmp184 = ParseRule.Choice.reference("constr-decl");
    lambda25 = (undefined, function (lhs, rhsOpt) {
      let param0, rhs;
      if (rhsOpt instanceof Option.Some.class) {
        param0 = rhsOpt.value;
        rhs = param0;
        return Tree.Infix(Keywords._bar, lhs, rhs)
      } else {
        return lhs
      }
    });
    tmp185 = lambda25;
    tmp186 = ParseRule.Choice.end(Option.None);
    tmp187 = ParseRule.Choice.keyword(Keywords._bar);
    tmp188 = ParseRule.Choice.reference("variants");
    tmp189 = runtime.safeCall(tmp188({
    "process": Rules.someFirst, "name": "variants end"
    }));
    tmp190 = runtime.safeCall(tmp187(tmp189));
    tmp191 = Predef.tuple(tmp186, tmp190);
    tmp192 = runtime.safeCall(tmp184({
    "process": tmp185, "name": "variants item", "choices": tmp191
    }));
    tmp193 = runtime.safeCall(tmp183(tmp192));
    tmp194 = Rules.define("typedefs");
    tmp195 = ParseRule.Choice.reference("typedef-lhs");
    lambda26 = (undefined, function (lhs, rhsMore) {
      let first1, first0, rhs, more, tmp294;
      if (globalThis.Array.isArray(rhsMore) && rhsMore.length === 2) {
        first0 = rhsMore[0];
        first1 = rhsMore[1];
        rhs = first0;
        more = first1;
        tmp294 = runtime.safeCall(rhs(lhs));
        return Stack.Cons(tmp294, more)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp196 = lambda26;
    tmp197 = ParseRule.Choice.reference("typedef-rhs");
    tmp198 = ParseRule.Choice.end(Stack.Nil);
    tmp199 = ParseRule.Choice.keyword(Keywords._and);
    tmp200 = ParseRule.Choice.reference("typedefs");
    tmp201 = runtime.safeCall(tmp200({
    "process": Rules.idFirst, "name": "typedef end"
    }));
    tmp202 = runtime.safeCall(tmp199(tmp201));
    tmp203 = Predef.tuple(tmp198, tmp202);
    tmp204 = runtime.safeCall(tmp197({
    "name": "typedef body", "choices": tmp203
    }));
    tmp205 = Predef.tuple(tmp204);
    tmp206 = runtime.safeCall(tmp195({
    "process": tmp196, "name": "typedef name", "choices": tmp205
    }));
    tmp207 = runtime.safeCall(tmp194(tmp206));
    tmp208 = Rules.define("typedef-rhs");
    tmp209 = ParseRule.Choice.keyword(Keywords._equal);
    tmp210 = ParseRule.Choice.reference("variants");
    lambda27 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._equal, lhs, rhs)
      });
      return lambda36
    });
    tmp211 = runtime.safeCall(tmp210({
    "process": lambda27, "name": "typedef-rhs: variants"
    }));
    tmp212 = ParseRule.Choice.keyword(Keywords._leftCurly);
    tmp213 = ParseRule.Choice.reference("label-decls");
    lambda28 = (undefined, function (content, _) {
      let tmp294, tmp295;
      if (content instanceof Stack.Nil.class) {
        tmp294 = Tree.Sequence(Stack.Nil);
        return Tree.Bracketed(Token.Curly, tmp294)
      } else {
        tmp295 = Tree.Sequence(content);
        return Tree.Bracketed(Token.Curly, tmp295)
      }
    });
    tmp214 = lambda28;
    tmp215 = ParseRule.Choice.keyword(Keywords._rightCurly);
    tmp216 = ParseRule.Choice.end(Tree.empty);
    tmp217 = runtime.safeCall(tmp215(tmp216));
    tmp218 = runtime.safeCall(tmp213({
    "process": tmp214, "name": "label-decl", "choices": tmp217
    }));
    tmp219 = runtime.safeCall(tmp212(tmp218));
    lambda29 = (undefined, function (rhs) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._equal, lhs, rhs)
      });
      return lambda36
    });
    tmp220 = ParseRule.Choice.map(tmp219, lambda29);
    tmp221 = runtime.safeCall(tmp209(tmp211, tmp220));
    tmp222 = runtime.safeCall(tmp208(tmp221));
    tmp223 = Rules.define("typedef-rhs");
    tmp224 = ParseRule.Choice.keyword(Keywords._equalequal);
    lambda30 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._equalequal, lhs, rhs)
      });
      return lambda36
    });
    tmp225 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": lambda30, "name": "type alias body"
    }));
    tmp226 = runtime.safeCall(tmp224(tmp225));
    tmp227 = runtime.safeCall(tmp223(tmp226));
    tmp228 = Rules.define("label-decl");
    tmp229 = Tree.infix(Keywords._colon);
    tmp230 = ParseRule.Choice.keyword(Keywords._colon);
    tmp231 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": Rules.idFirst, "name": "label-decl body"
    }));
    tmp232 = runtime.safeCall(tmp230(tmp231));
    tmp233 = Predef.tuple(tmp232);
    tmp234 = runtime.safeCall(ParseRule.Choice.typeExpr({
    "process": tmp229, "name": "label-decl name", "choices": tmp233
    }));
    tmp235 = runtime.safeCall(tmp228(tmp234));
    tmp236 = Rules.define("label-decls");
    tmp237 = Rules.listLike({
    "head": "label-decl", "tail": "label-decls", "name": "label and declaration pair", "sep": Keywords._semicolon
    });
    tmp238 = runtime.safeCall(tmp236(tmp237));
    tmp239 = Rules.define("constr-decls");
    tmp240 = Rules.listLike({
    "head": "constr-decl", "tail": "constr-decls", "name": "constructor declaration", "sep": Keywords._bar
    });
    tmp241 = runtime.safeCall(tmp239(tmp240));
    tmp242 = Rules.define("typedef-lhs");
    tmp243 = ParseRule.Choice.reference("type-params");
    lambda31 = (undefined, function (params, ident) {
      let tmp294;
      if (params instanceof Stack.Nil.class) {
        return ident
      } else {
        tmp294 = Tree.Tuple(params);
        return Tree.App(ident, tmp294)
      }
    });
    tmp244 = lambda31;
    tmp245 = runtime.safeCall(ParseRule.Choice.ident({
    "process": Rules.idFirst, "name": "the type identifier"
    }));
    tmp246 = Predef.tuple(tmp245);
    tmp247 = runtime.safeCall(tmp243({
    "process": tmp244, "name": "the type parameters", "choices": tmp246
    }));
    tmp248 = runtime.safeCall(tmp242(tmp247));
    tmp249 = Rules.define("type-params");
    tmp250 = ParseRule.Choice.end(Stack.Nil);
    tmp251 = runtime.safeCall(tmp249(tmp250));
    tmp252 = Rules.define("type-params");
    lambda32 = (undefined, function (h, _) {
      return Stack.Cons(h, Stack.Nil)
    });
    tmp253 = runtime.safeCall(ParseRule.Choice.typeVar({
    "process": lambda32, "name": "the only type parameter"
    }));
    tmp254 = runtime.safeCall(tmp252(tmp253));
    tmp255 = Rules.define("type-params");
    tmp256 = ParseRule.Choice.keyword(Keywords._leftRound);
    tmp257 = ParseRule.Choice.reference("type-params-tail");
    tmp258 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp259 = runtime.safeCall(tmp258());
    tmp260 = Predef.tuple(tmp259);
    tmp261 = runtime.safeCall(tmp257({
    "process": Rules.idFirst, "name": "more type parameters", "choices": tmp260
    }));
    tmp262 = Predef.tuple(tmp261);
    tmp263 = runtime.safeCall(ParseRule.Choice.typeVar({
    "process": Stack.Cons, "name": "the first type parameter", "choices": tmp262
    }));
    tmp264 = runtime.safeCall(tmp256(tmp263));
    tmp265 = runtime.safeCall(tmp255(tmp264));
    tmp266 = Rules.define("type-params-tail");
    tmp267 = ParseRule.Choice.end(Stack.Nil);
    tmp268 = runtime.safeCall(tmp266(tmp267));
    tmp269 = Rules.define("type-params-tail");
    tmp270 = ParseRule.Choice.keyword(Keywords._comma);
    tmp271 = ParseRule.Choice.reference("type-params-tail");
    tmp272 = runtime.safeCall(tmp271({
    "process": Rules.idFirst, "name": "more type parameters"
    }));
    tmp273 = Predef.tuple(tmp272);
    tmp274 = runtime.safeCall(ParseRule.Choice.typeVar({
    "process": Stack.Cons, "name": "the first type parameter", "choices": tmp273
    }));
    tmp275 = runtime.safeCall(tmp270(tmp274));
    tmp276 = runtime.safeCall(tmp269(tmp275));
    tmp277 = Rules.makeLetBindings(false);
    tmp278 = ParseRule.Choice.keyword(Keywords._type);
    tmp279 = ParseRule.Choice.reference("typedefs");
    lambda33 = (undefined, function (typedefs, _) {
      return Tree.Define(Tree.DefineKind.Type, typedefs)
    });
    tmp280 = runtime.safeCall(tmp279({
    "process": lambda33, "name": "more typedefs"
    }));
    tmp281 = runtime.safeCall(tmp278(tmp280));
    tmp282 = ParseRule.Choice.keyword(Keywords._exception);
    tmp283 = ParseRule.Choice.reference("constr-decls");
    lambda34 = (undefined, function (decls, _) {
      return Tree.Define(Tree.DefineKind.Exception, decls)
    });
    tmp284 = runtime.safeCall(tmp283({
    "process": lambda34, "name": "constructor declarations"
    }));
    tmp285 = runtime.safeCall(tmp282(tmp284));
    tmp286 = ParseRule.Choice.keyword(Keywords._hash);
    tmp287 = runtime.safeCall(ParseRule.Choice.term({
    "process": Rules.idFirst, "name": "directive body"
    }));
    tmp288 = Predef.tuple(tmp287);
    lambda35 = (undefined, function (ident, body) {
      let tmp294;
      tmp294 = Stack.Cons([
        ident,
        body
      ], Stack.Nil);
      return Tree.Define(Tree.DefineKind.Directive, tmp294)
    });
    tmp289 = runtime.safeCall(ParseRule.Choice.ident({
    "process": lambda35, "name": "directive name", "choices": tmp288
    }));
    tmp290 = runtime.safeCall(tmp286(tmp289));
    tmp291 = ParseRule.rule("prefix rules for module items", tmp277, tmp281, tmp285, tmp290);
    this.declRule = tmp291;
    tmp292 = Rules.syntaxKinds.insert("term", Rules.termRule);
    tmp293 = Rules.syntaxKinds.insert("type", Rules.typeRule);
    Rules.syntaxKinds.insert("decl", Rules.declRule)
  }
  static getRuleByKind(kind) {
    let tmp;
    tmp = runtime.safeCall(Rules.syntaxKinds.get(kind));
    return Option.unsafe.get(tmp)
  } 
  static define(name) {
    return (...choices) => {
      let tmp, tmp1, lambda;
      tmp = runtime.safeCall(Rules.syntaxKinds.updateWith(name));
      lambda = (undefined, function (caseScrut) {
        let param0, rule, tmp2, tmp3, tmp4;
        if (caseScrut instanceof Option.None.class) {
          tmp2 = ParseRule.rule(name, ...choices);
          return Option.Some(tmp2)
        } else if (caseScrut instanceof Option.Some.class) {
          param0 = caseScrut.value;
          rule = param0;
          tmp3 = Iter.toStack(choices);
          tmp4 = runtime.safeCall(rule.extendChoices(tmp3));
          return Option.Some(tmp4)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp1 = lambda;
      return runtime.safeCall(tmp(tmp1))
    }
  } 
  static idFirst(value, _) {
    return value
  } 
  static idSecond(_1, value1) {
    return value1
  } 
  static someFirst(value2, _2) {
    return Option.Some(value2)
  } 
  static listFirst(value3, _3) {
    return Stack.Cons(value3, Stack.Nil)
  } 
  static listLike(fields) {
    let mkTail, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    scrut = fields["sep"];
    if (scrut === undefined) {
      tmp = Predef.id;
    } else {
      tmp = ParseRule.Choice.keyword(fields["sep"]);
    }
    mkTail = tmp;
    tmp1 = ParseRule.Choice.reference(fields.head);
    tmp2 = "the first " + fields.name;
    tmp3 = ParseRule.Choice.end(Stack.Nil);
    tmp4 = ParseRule.Choice.reference(fields.tail);
    tmp5 = "more " + fields.name;
    tmp6 = tmp5 + "s";
    tmp7 = runtime.safeCall(tmp4({
    "process": Rules.idFirst, "name": tmp6
    }));
    tmp8 = runtime.safeCall(mkTail(tmp7));
    tmp9 = Predef.tuple(tmp3, tmp8);
    return runtime.safeCall(tmp1({
    "process": Stack.Cons, "name": tmp2, "choices": tmp9
    }))
  } 
  static makeLetBindings(hasInClause) {
    let intro, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    intro = "let binding: ";
    tmp = ParseRule.Choice.keyword(Keywords._let);
    tmp1 = ParseRule.Choice.keyword(Keywords._rec);
    tmp2 = runtime.safeCall(tmp1());
    tmp3 = ParseRule.Choice.reference("let-bindings");
    if (hasInClause === true) {
      tmp4 = ParseRule.Choice.keyword(Keywords._in);
      tmp5 = intro + "body";
      tmp6 = runtime.safeCall(ParseRule.Choice.term({
      "process": Rules.someFirst, "name": tmp5
      }));
      tmp7 = runtime.safeCall(tmp4(tmp6));
      tmp8 = ParseRule.Choice.end(Option.None);
      tmp9 = Predef.tuple(tmp7, tmp8);
    } else {
      tmp10 = ParseRule.Choice.end(Option.None);
      tmp9 = Predef.tuple(tmp10);
    }
    tmp11 = runtime.safeCall(tmp3({
    "process": Tree.LetIn, "name": "let-bindings", "choices": tmp9
    }));
    tmp12 = ParseRule.Choice.siding({
    "optional": true, "init": tmp2, "rest": tmp11, "process": Rules.idSecond
    });
    return runtime.safeCall(tmp(tmp12))
  } 
  static makeInfixChoice(kw, rhsKind, compose) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda;
    tmp = ParseRule.Choice.keyword(kw);
    tmp1 = ParseRule.Choice.reference(rhsKind);
    tmp2 = "operator `" + kw.name;
    tmp3 = tmp2 + "` right-hand side";
    lambda = (undefined, function (rhs, _4) {
      let lambda1;
      lambda1 = (undefined, function (lhs) {
        return runtime.safeCall(compose(lhs, rhs))
      });
      return lambda1
    });
    tmp4 = runtime.safeCall(tmp1({
    "process": lambda, "name": tmp3
    }));
    return runtime.safeCall(tmp(tmp4))
  } 
  static makeBracketRule(fields1) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda;
    tmp = ParseRule.Choice.keyword(fields1.opening);
    tmp1 = ParseRule.Choice.reference(fields1.kind);
    lambda = (undefined, function (tree, next) {
      let param0, param1, msg, tmp9;
      if (next instanceof Tree.Error.class) {
        param0 = next.tree;
        param1 = next.message;
        if (param0 instanceof Tree.Empty.class) {
          msg = param1;
          tmp9 = runtime.safeCall(fields1.wrapContent(tree));
          return Tree.Error(tmp9, msg)
        } else {
          throw new globalThis.Error("match error");
        }
      } else if (next instanceof Tree.Empty.class) {
        return runtime.safeCall(fields1.wrapContent(tree))
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp2 = lambda;
    tmp3 = fields1.kind + " in bracket";
    tmp4 = ParseRule.Choice.keyword(fields1.closing);
    tmp5 = ParseRule.Choice.end(Tree.empty);
    tmp6 = runtime.safeCall(tmp4(tmp5));
    tmp7 = Predef.tuple(tmp6);
    tmp8 = runtime.safeCall(tmp1({
    "process": tmp2, "name": tmp3, "choices": tmp7
    }));
    return runtime.safeCall(tmp(tmp8))
  }
  static toString() { return "Rules"; }
});
let Rules = Rules1; export default Rules;
