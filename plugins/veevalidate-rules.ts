import { defineRule } from "vee-validate";
import rules from "@vee-validate/rules";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    Object.keys(rules)
        .filter((k) => k !== "default")
        .forEach((rule) => {
            defineRule(rule, rules[rule]);
        });
});
