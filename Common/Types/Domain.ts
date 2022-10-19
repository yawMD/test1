import { FindOperator } from 'typeorm/find-options/FindOperator';
import DatabaseProperty from './Database/DatabaseProperty';
import BadDataException from './Exception/BadDataException';

export default class Domain extends DatabaseProperty {
    private _domain: string = '';
    public get domain(): string {
        return this._domain;
    }
    public set domain(v: string) {
        const isValid: boolean = Domain.isValidDomain(v);
        if (!isValid) {
            throw new BadDataException('Domain is not in valid format.');
        }
        this._domain = v;
    }

    public static isValidDomain(domain: string): boolean {
        if (!domain.includes('.')) {
            return false;
        }

        const firstTLDs: Array<string> =
            'ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|im|in|io|iq|ir|is|it|je|jo|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|na|nc|ne|nf|ng|nl|no|nr|nu|nz|om|pa|pe|pf|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt'.split(
                '|'
            );
        const secondTLDs: Array<string> =
            'dev|com|edu|gov|net|mil|org|nom|sch|caa|res|off|gob|int|tur|ip6|uri|urn|asn|act|nsw|qld|tas|vic|pro|biz|adm|adv|agr|arq|art|ato|bio|bmd|cim|cng|cnt|ecn|eco|emp|eng|esp|etc|eti|far|fnd|fot|fst|g12|ggf|imb|ind|inf|jor|jus|leg|lel|mat|med|mus|not|ntr|odo|ppg|psc|psi|qsl|rec|slg|srv|teo|tmp|trd|vet|zlg|web|ltd|sld|pol|fin|k12|lib|pri|aip|fie|eun|sci|prd|cci|pvt|mod|idv|rel|sex|gen|nic|abr|bas|cal|cam|emr|fvg|laz|lig|lom|mar|mol|pmn|pug|sar|sic|taa|tos|umb|vao|vda|ven|mie|北海道|和歌山|神奈川|鹿児島|ass|rep|tra|per|ngo|soc|grp|plc|its|air|and|bus|can|ddr|jfk|mad|nrw|nyc|ski|spy|tcm|ulm|usa|war|fhs|vgs|dep|eid|fet|fla|flå|gol|hof|hol|sel|vik|cri|iwi|ing|abo|fam|gok|gon|gop|gos|aid|atm|gsm|sos|elk|waw|est|aca|bar|cpa|jur|law|sec|plo|www|bir|cbg|jar|khv|msk|nov|nsk|ptz|rnd|spb|stv|tom|tsk|udm|vrn|cmw|kms|nkz|snz|pub|fhv|red|ens|nat|rns|rnu|bbs|tel|bel|kep|nhs|dni|fed|isa|nsn|gub|e12|tec|орг|обр|упр|alt|nis|jpn|mex|ath|iki|nid|gda|inc'.split(
                '|'
            );

        const parts: Array<string> = domain.split('.');
        const lastItem: string = parts[parts.length - 1] as string;
        const beforeLastItem: string = parts[parts.length - 2] as string;

        if (firstTLDs.includes(lastItem)) {
            if (secondTLDs.includes(beforeLastItem)) {
                return true;
            }
            return true;
        } else if (secondTLDs.includes(lastItem)) {
            return true;
        }

        return false;
    }

    public constructor(domain: string) {
        super();
        this.domain = domain;
    }

    public override toString(): string {
        return this.domain;
    }

    protected static override toDatabase(
        _value: Domain | FindOperator<Domain>
    ): string | null {
        if (_value) {
            return _value.toString();
        }

        return null;
    }

    protected static override fromDatabase(_value: string): Domain | null {
        if (_value) {
            return new Domain(_value);
        }

        return null;
    }
}
