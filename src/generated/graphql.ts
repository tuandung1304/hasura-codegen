export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  timestamptz: { input: any; output: any }
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>
  _gt?: InputMaybe<Scalars['Int']['input']>
  _gte?: InputMaybe<Scalars['Int']['input']>
  _in?: InputMaybe<Array<Scalars['Int']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Int']['input']>
  _lte?: InputMaybe<Scalars['Int']['input']>
  _neq?: InputMaybe<Scalars['Int']['input']>
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int']['input']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input']
}

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>
  on_conflict?: InputMaybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input
  on_conflict?: InputMaybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>
  _set?: InputMaybe<Posts_Set_Input>
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>
  _set?: InputMaybe<Posts_Set_Input>
  pk_columns: Posts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts'
  content: Scalars['String']['output']
  created_at: Scalars['timestamptz']['output']
  id: Scalars['Int']['output']
  title: Scalars['String']['output']
  updated_at: Scalars['timestamptz']['output']
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']['output']
}

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate'
  aggregate?: Maybe<Posts_Aggregate_Fields>
  nodes: Array<Posts>
}

export type Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Posts_Aggregate_Bool_Exp_Count>
}

export type Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Posts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Posts_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields'
  avg?: Maybe<Posts_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Posts_Max_Fields>
  min?: Maybe<Posts_Min_Fields>
  stddev?: Maybe<Posts_Stddev_Fields>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>
  sum?: Maybe<Posts_Sum_Fields>
  var_pop?: Maybe<Posts_Var_Pop_Fields>
  var_samp?: Maybe<Posts_Var_Samp_Fields>
  variance?: Maybe<Posts_Variance_Fields>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Posts_Max_Order_By>
  min?: InputMaybe<Posts_Min_Order_By>
  stddev?: InputMaybe<Posts_Stddev_Order_By>
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>
  sum?: InputMaybe<Posts_Sum_Order_By>
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>
  variance?: InputMaybe<Posts_Variance_Order_By>
}

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>
}

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>
  _not?: InputMaybe<Posts_Bool_Exp>
  _or?: InputMaybe<Array<Posts_Bool_Exp>>
  content?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  title?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  user_id?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey',
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields'
  content?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
  user_id?: Maybe<Scalars['Int']['output']>
}

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  content?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields'
  content?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
  user_id?: Maybe<Scalars['Int']['output']>
}

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  content?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Posts>
}

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint
  update_columns?: Array<Posts_Update_Column>
  where?: InputMaybe<Posts_Bool_Exp>
}

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  content?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int']['input']
}

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
  user_id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Posts_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Posts_Set_Input>
  /** filter the rows which have to be updated */
  where: Posts_Bool_Exp
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
  user_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>
}

export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>
  _gt?: InputMaybe<Scalars['timestamptz']['input']>
  _gte?: InputMaybe<Scalars['timestamptz']['input']>
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timestamptz']['input']>
  _lte?: InputMaybe<Scalars['timestamptz']['input']>
  _neq?: InputMaybe<Scalars['timestamptz']['input']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  address?: Maybe<Scalars['String']['output']>
  age?: Maybe<Scalars['Int']['output']>
  created_at: Scalars['timestamptz']['output']
  email: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  phone?: Maybe<Scalars['String']['output']>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  updated_at: Scalars['timestamptz']['output']
}

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  avg?: Maybe<Users_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
  stddev?: Maybe<Users_Stddev_Fields>
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>
  sum?: Maybe<Users_Sum_Fields>
  var_pop?: Maybe<Users_Var_Pop_Fields>
  var_samp?: Maybe<Users_Var_Samp_Fields>
  variance?: Maybe<Users_Variance_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  age?: InputMaybe<Int_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  email?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  phone?: InputMaybe<String_Comparison_Exp>
  posts?: InputMaybe<Posts_Bool_Exp>
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  address?: Maybe<Scalars['String']['output']>
  age?: Maybe<Scalars['Int']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  phone?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  address?: Maybe<Scalars['String']['output']>
  age?: Maybe<Scalars['Int']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  phone?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: InputMaybe<Order_By>
  age?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  phone?: InputMaybe<Order_By>
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields'
  age?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields'
  age?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}
