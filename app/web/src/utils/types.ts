export interface State<T, R=void> {
  loading: boolean
  data?: T
  error?: string
  refetch?: () => Promise<R>
}
