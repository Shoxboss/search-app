"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const inversify_1 = require("inversify");
const winston_1 = require("winston");
const types_1 = require("../di/types");
const data = [
    { email: "jim@gmail.com", number: "221122" },
    { email: "jam@gmail.com", number: "830347" },
    { email: "john@gmail.com", number: "221122" },
    { email: "jams@gmail.com", number: "349425" },
    { email: "jams@gmail.com", number: "141424" },
    { email: "jill@gmail.com", number: "822287" },
    { email: "jill@gmail.com", number: "822286" },
];
let SearchService = class SearchService {
    constructor(_logger) {
        this._logger = _logger;
    }
    search(email, number) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = data.filter((item) => {
                return ((!email || item.email === email) && (!number || item.number === number));
            });
            yield new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 5000);
            });
            return results;
        });
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.DI_TYPES.Logger)),
    __metadata("design:paramtypes", [winston_1.Logger])
], SearchService);
