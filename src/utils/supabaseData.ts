import supabase from '@utils/supabaseClient';

export default async <T>(table: string, selector: string) => {
  const { data } = await supabase.from(table).select(selector);

  return selector === '*' ? (data as T) : (data?.[0] as T);
};
