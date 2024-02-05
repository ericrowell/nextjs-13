import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

// other codes...

return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isSubscribed ? (
            <Badge
              disableOutline
              content="PRO"
              size="md"
              color="primary"
              className="font-bold text-xs py-1 px-2"
            >
              <Avatar
                src={avatar || undefined}
                color="primary"
                isBordered={userId === user?.id}
              />
            </Badge>
          ) : (
            <Avatar
              src={avatar || undefined}
              color="primary"
              isBordered={userId === user?.id}
            />
          )}
          <Spacer x={0.5} />
          <div className="pl-4">
            <div className="font-bold">{name}</div>
            <div className="text-small text-default-500">
              {formatDate(createdAt)}
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* rest of your code */}
    </>
);