import Query from './Query';
import Select from './Select';
import Populate from './Populate';
import Sort from './Sort';
import BaseModel from 'Common/Models/BaseModel';
import DatabaseCommonInteractionProps from 'Common/Types/Database/DatabaseCommonInteractionProps';

export default interface FindOneBy<TBaseModel extends BaseModel> {
    query: Query<TBaseModel>;
    select?: Select<TBaseModel> | undefined;
    populate?: Populate<TBaseModel> | undefined;
    sort?: Sort<TBaseModel> | undefined;
    props: DatabaseCommonInteractionProps;
}
